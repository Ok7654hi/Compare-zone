/**
 * ChatGPT & Codex Desktop Pairing Module
 * Integrates conversational reasoning and code generation workflows
 */

const OpenAI = require("openai");

class AIServicePairing {
  constructor(config = {}) {
    this.client = new OpenAI({
      apiKey: config.openaiApiKey || process.env.OPENAI_API_KEY,
    });

    this.chatModel = config.chatModel || "gpt-5-mini";
    this.codeModel = config.codeModel || "gpt-5-mini";
  }

  /**
   * Send request to ChatGPT
   */
  async chatGPT(prompt, options = {}) {
    try {
      const response = await this.client.responses.create({
        model: options.model || this.chatModel,
        input: prompt,
        temperature: options.temperature ?? 0.7,
      });

      return {
        success: true,
        content: response.output_text,
        model: response.model,
        usage: response.usage,
      };

    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }


  /**
   * Send request for code generation
   */
  async codex(prompt, options = {}) {
    try {
      const response = await this.client.responses.create({
        model: options.model || this.codeModel,
        input: [
          {
            role: "system",
            content:
              "You are a senior software engineer. Generate clean, production-ready code.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: options.temperature ?? 0.2,
      });

      return {
        success: true,
        code: response.output_text,
        model: response.model,
        usage: response.usage,
      };

    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }


  /**
   * Parallel pairing
   */
  async pairServices(prompt, options = {}) {
    const [chatResponse, codeResponse] = await Promise.all([
      this.chatGPT(prompt, options),
      this.codex(prompt, options),
    ]);

    return {
      prompt,
      analysis: chatResponse,
      code: codeResponse,
      timestamp: new Date().toISOString(),
    };
  }


  /**
   * Sequential pairing
   * ChatGPT analyzes → coding model implements
   */
  async sequentialPair(initialPrompt) {

    const analysis = await this.chatGPT(
      `
Analyze this software request.
Provide:
- architecture decisions
- implementation plan
- edge cases

Request:
${initialPrompt}
`
    );


    if (!analysis.success) {
      return analysis;
    }


    const code = await this.codex(
      `
Using this analysis:

${analysis.content}

Implement the solution for:

${initialPrompt}
`
    );


    return {
      analysis,
      implementation: code,
    };
  }
}

module.exports = AIServicePairing;
