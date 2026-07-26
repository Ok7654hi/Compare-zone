/**
 * ChatGPT & Codex Desktop Pairing Module
 * Integrates both APIs for enhanced AI capabilities
 */

const axios = require('axios');

class AIServicePairing {
  constructor(config = {}) {
    this.openaiApiKey = config.openaiApiKey || process.env.OPENAI_API_KEY;
    this.codexApiKey = config.codexApiKey || process.env.CODEX_API_KEY;
    this.apiBase = config.apiBase || 'https://api.openai.com/v1';
    this.timeout = config.timeout || 30000;
  }

  /**
   * Send request to ChatGPT
   * @param {string} prompt - User prompt
   * @param {object} options - Additional options
   */
  async chatGPT(prompt, options = {}) {
    try {
      const response = await axios.post(
        `${this.apiBase}/chat/completions`,
        {
          model: options.model || 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: options.temperature || 0.7,
          max_tokens: options.max_tokens || 2000,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          timeout: this.timeout,
        }
      );

      return {
        success: true,
        service: 'ChatGPT',
        content: response.data.choices[0].message.content,
        model: response.data.model,
        usage: response.data.usage,
      };
    } catch (error) {
      return this.handleError('ChatGPT', error);
    }
  }

  /**
   * Send request to Codex for code generation
   * @param {string} prompt - Code prompt
   * @param {object} options - Additional options
   */
  async codex(prompt, options = {}) {
    try {
      const response = await axios.post(
        `${this.apiBase}/completions`,
        {
          model: options.model || 'code-davinci-002',
          prompt: prompt,
          temperature: options.temperature || 0.2,
          max_tokens: options.max_tokens || 1000,
          top_p: options.top_p || 1,
          frequency_penalty: options.frequency_penalty || 0,
          presence_penalty: options.presence_penalty || 0,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.codexApiKey}`,
            'Content-Type': 'application/json',
          },
          timeout: this.timeout,
        }
      );

      return {
        success: true,
        service: 'Codex',
        content: response.data.choices[0].text,
        model: response.data.model,
        usage: response.data.usage,
      };
    } catch (error) {
      return this.handleError('Codex', error);
    }
  }

  /**
   * Pair both services - get responses from ChatGPT and Codex
   * @param {string} prompt - User prompt
   * @param {object} options - Configuration options
   */
  async pairServices(prompt, options = {}) {
    const results = {
      timestamp: new Date().toISOString(),
      prompt: prompt,
      responses: {},
      comparison: {},
    };

    try {
      // Call both services in parallel
      const [chatgptResponse, codexResponse] = await Promise.all([
        this.chatGPT(prompt, options.chatgpt || {}),
        this.codex(prompt, options.codex || {}),
      ]);

      results.responses.chatgpt = chatgptResponse;
      results.responses.codex = codexResponse;

      // Generate comparison
      results.comparison = {
        chatgptLength: chatgptResponse.content?.length || 0,
        codexLength: codexResponse.content?.length || 0,
        bothSuccessful: chatgptResponse.success && codexResponse.success,
      };

      return results;
    } catch (error) {
      results.error = error.message;
      return results;
    }
  }

  /**
   * Sequential pairing - use ChatGPT response as context for Codex
   * @param {string} initialPrompt - Initial prompt
   */
  async sequentialPair(initialPrompt) {
    const results = {
      timestamp: new Date().toISOString(),
      initialPrompt: initialPrompt,
      steps: [],
    };

    try {
      // Step 1: Get ChatGPT response
      const chatgptResult = await this.chatGPT(initialPrompt);
      results.steps.push({
        step: 'ChatGPT Analysis',
        result: chatgptResult,
      });

      if (!chatgptResult.success) {
        results.error = 'ChatGPT failed';
        return results;
      }

      // Step 2: Use ChatGPT response as context for Codex
      const codexPrompt = `Based on this analysis: "${chatgptResult.content}"\n\nGenerate code to implement this:`;
      const codexResult = await this.codex(codexPrompt);
      results.steps.push({
        step: 'Codex Code Generation',
        result: codexResult,
      });

      results.success = codexResult.success;
    } catch (error) {
      results.error = error.message;
    }

    return results;
  }

  /**
   * Handle API errors
   */
  handleError(service, error) {
    console.error(`${service} Error:`, error.message);
    return {
      success: false,
      service: service,
      error: error.message,
      statusCode: error.response?.status,
    };
  }
}

// Export for use in other modules
module.exports = AIServicePairing;

// Example usage
if (require.main === module) {
  const pairing = new AIServicePairing({
    openaiApiKey: process.env.OPENAI_API_KEY,
    codexApiKey: process.env.CODEX_API_KEY,
  });

  (async () => {
    console.log('🚀 ChatGPT & Codex Pairing Started...\n');

    // Example 1: Parallel pairing
    const parallelResult = await pairing.pairServices(
      'Create a function to validate email addresses'
    );
    console.log('Parallel Pairing Result:', JSON.stringify(parallelResult, null, 2));

    // Example 2: Sequential pairing
    const sequentialResult = await pairing.sequentialPair(
      'What are the best practices for API security?'
    );
    console.log('\nSequential Pairing Result:', JSON.stringify(sequentialResult, null, 2));
  })();
}
