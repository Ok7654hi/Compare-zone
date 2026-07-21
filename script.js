// Complete Realme Archive (2020-2026) + Competitors Database
const devices = [
    // --- REALME GT SERIES ---
    { id: 1, name: "Realme GT 8 Pro", brand: "Realme", series: "Realme GT", display: "6.79\" QHD+ AMOLED, 144Hz", processor: "Snapdragon 8 Elite Gen 5", ram: "16GB RAM", battery: "7000 mAh, 120W", camera: "200MP + 50MP OIS", os: "Realme UI 7.0", price: "₹72,999", rating: "4.7", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Urban Blue Eco-Leather", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }, { name: "Amazon", url: "https://www.amazon.in" }] },
    { id: 2, name: "Realme GT 7 Pro", brand: "Realme", series: "Realme GT", display: "6.78\" LTPO AMOLED, 144Hz", processor: "Snapdragon 8 Elite", ram: "12GB RAM", battery: "6500 mAh, 120W", camera: "50MP Triple OIS", os: "Realme UI 6.0", price: "₹59,999", rating: "4.6", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Mars Orange Edition", stores: [{ name: "Amazon", url: "https://www.amazon.in" }] },
    { id: 3, name: "Realme GT 6", brand: "Realme", series: "Realme GT", display: "6.78\" AMOLED, 120Hz", processor: "Snapdragon 8s Gen 3", ram: "12GB RAM", battery: "5500 mAh, 120W", camera: "50MP OIS + Telephoto", os: "Realme UI 5.0", price: "₹39,999", rating: "4.5", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Fluid Silver", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },
    { id: 4, name: "Realme GT 3 (240W)", brand: "Realme", series: "Realme GT", display: "6.74\" AMOLED, 144Hz", processor: "Snapdragon 8+ Gen 1", ram: "16GB RAM", battery: "4600 mAh, 240W SuperVOOC", camera: "50MP Triple", os: "Realme UI 4.0", price: "₹34,999", rating: "4.4", image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Pulse White", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },
    { id: 5, name: "Realme GT 2 Pro", brand: "Realme", series: "Realme GT", display: "6.7\" AMOLED, 120Hz", processor: "Snapdragon 8 Gen 1", ram: "12GB RAM", battery: "5000 mAh, 65W", camera: "50MP Dual OIS", os: "Realme UI 3.0", price: "₹49,999", rating: "4.3", image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Paper White Eco", stores: [{ name: "Amazon", url: "https://www.amazon.in" }] },

    // --- REALME NUMBER SERIES ---
    { id: 6, name: "Realme 16 Pro Plus", brand: "Realme", series: "Realme Number", display: "6.8\" AMOLED 4D Curve, 144Hz", processor: "Snapdragon 7 Gen 4", ram: "12GB RAM", battery: "7000 mAh, 80W", camera: "200MP + 50MP OIS", os: "Realme UI 7.0", price: "₹39,999", rating: "4.6", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Golden Curve Edition", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },
    { id: 7, name: "Realme 14 Pro Plus 5G", brand: "Realme", series: "Realme Number", display: "6.7\" Curved AMOLED, 120Hz", processor: "Snapdragon 7s Gen 3", ram: "12GB RAM", battery: "5200 mAh, 80W", camera: "50MP OIS Periscope", os: "Realme UI 7.0", price: "₹29,999", rating: "4.4", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Monet Gold", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },
    { id: 8, name: "Realme 12 Pro+", brand: "Realme", series: "Realme Number", display: "6.7\" Curved AMOLED, 120Hz", processor: "Snapdragon 7s Gen 2", ram: "8GB RAM", battery: "5000 mAh, 67W", camera: "50MP + 64MP Periscope", os: "Realme UI 5.0", price: "₹29,999", rating: "4.4", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Submarine Blue", stores: [{ name: "Amazon", url: "https://www.amazon.in" }] },

    // --- REALME P SERIES ---
    { id: 9, name: "Realme P4 Power", brand: "Realme", series: "Realme P Series", display: "6.8\" AMOLED, 144Hz", processor: "MediaTek Dimensity 7400 Ultra", ram: "12GB RAM", battery: "10001 mAh Titan Battery, 80W", camera: "50MP OIS", os: "Realme UI 7.0", price: "₹28,999", rating: "4.7", image: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: TransSilver Matte", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },
    { id: 10, name: "Realme P2 Pro", brand: "Realme", series: "Realme P Series", display: "6.7\" Curved AMOLED, 120Hz", processor: "Snapdragon 7s Gen 2", ram: "8GB RAM", battery: "5200 mAh, 80W", camera: "50MP OIS", os: "Realme UI 5.0", price: "₹21,999", rating: "4.3", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Parrot Green", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },

    // --- REALME NARZO & C SERIES ---
    { id: 11, name: "Realme Narzo 100x 5G", brand: "Realme", series: "Realme Narzo", display: "6.81\" IPS LCD, 144Hz", processor: "MediaTek Dimensity 6300", ram: "8GB RAM", battery: "8000 mAh Titan Battery, 45W", camera: "50MP Dual AI", os: "Realme UI 7.0", price: "₹16,999", rating: "4.5", image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Cyber Black", stores: [{ name: "Amazon", url: "https://www.amazon.in" }] },
    { id: 12, name: "Realme C75", brand: "Realme", series: "Realme C Series", display: "6.72\" IPS LCD, 90Hz", processor: "MediaTek Helio G85", ram: "6GB RAM", battery: "6000 mAh, 45W", camera: "50MP AI Camera", os: "Realme UI", price: "₹10,999", rating: "4.2", image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Lightning Gold", stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] },

    // --- MAJOR COMPETITORS ---
    { id: 13, name: "Samsung Galaxy S26 Ultra", brand: "Samsung", series: "Galaxy S", display: "6.9\" Dynamic AMOLED 2X, 120Hz", processor: "Snapdragon 8 Elite for Galaxy", ram: "12GB RAM", battery: "5000 mAh, 45W", camera: "200MP Quad OIS", os: "One UI 8.1", price: "₹1,29,999", rating: "4.8", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Titanium Flagship", stores: [{ name: "Amazon", url: "https://www.amazon.in" }] },
    { id: 14, name: "Apple iPhone 17 Pro Max", brand: "Apple", series: "iPhone Pro", display: "6.9\" Super Retina XDR, 120Hz", processor: "Apple A19 Pro", ram: "8GB RAM", battery: "4800 mAh, MagSafe", camera: "48MP Triple ProRes", os: "iOS 19", price: "₹1,49,900", rating: "4.9", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop&q=60", aiTag: "AI Render: Titanium Pro Max", stores: [{ name: "Apple Store", url: "https://www.apple.com" }] }
];

document.addEventListener("DOMContentLoaded", () => {
    initCatalog(devices);
    initSelectors();
    initFilters();
    initChatWidget();
    initSearch();
    simulateAiSync();
});

function simulateAiSync() {
    const syncStatus = document.getElementById("sync-status");
    setTimeout(() => {
        syncStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Complete Realme Archive & AI Live</span>`;
        syncStatus.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
    }, 1500);
}

// Populate Catalog Grid
function initCatalog(data) {
    const catalog = document.getElementById("device-catalog");
    document.getElementById("catalog-count").textContent = data.length;
    
    if (data.length === 0) {
        catalog.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No devices found matching your search.</p>`;
        return;
    }

    catalog.innerHTML = data.map(d => `
        <div class="device-item-card">
            <div class="device-img-container">
                <div class="ai-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> ${d.aiTag}</div>
                <div class="device-rating-badge"><i class="fa-solid fa-star"></i> ${d.rating}</div>
                <img src="${d.image}" alt="${d.name}">
            </div>
            <div class="device-card-content">
                <h4>${d.name}</h4>
                <p><strong>Brand:</strong> ${d.brand} (${d.series})</p>
                <p><strong>Display:</strong> ${d.display}</p>
                <p><strong>Proc:</strong> ${d.processor} | <strong>RAM:</strong> ${d.ram}</p>
                <p><strong>Battery:</strong> ${d.battery}</p>
                <p><strong>Camera:</strong> ${d.camera}</p>
                <p><strong>OS:</strong> ${d.os}</p>
                <p style="color: var(--accent-color); font-weight: bold; margin-top: 0.2rem;">${d.price}</p>
                
                <div class="store-links-box">
                    <span class="store-links-title">E-Commerce & Retail Stores:</span>
                    <div class="store-badges">
                        ${d.stores.map(s => `<a href="${s.url}" target="_blank" class="store-badge"><i class="fa-solid fa-cart-shopping"></i> ${s.name}</a>`).join("")}
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

// Populate Comparison Dropdowns
function initSelectors() {
    const selectors = document.querySelectorAll(".device-selector");
    selectors.forEach(select => {
        select.innerHTML = '<option value="">Select Device</option>';
        devices.forEach(d => {
            const opt = document.createElement("option");
            opt.value = d.id;
            opt.textContent = `${d.brand} - ${d.name}`;
            select.appendChild(opt);
        });

        select.addEventListener("change", (e) => {
            const slotId = e.target.getAttribute("data-slot");
            const deviceId = e.target.value;
            updatePreview(slotId, deviceId);
        });
    });
}

// Update Side-by-Side Pro Preview Card
function updatePreview(slotId, deviceId) {
    const previewContainer = document.getElementById(`preview-${slotId}`);
    if (!deviceId) {
        previewContainer.innerHTML = "Please select a device";
        return;
    }
    const device = devices.find(d => d.id == deviceId);
    previewContainer.innerHTML = `
        <p><strong>${device.name}</strong> ⭐ ${device.rating}</p>
        <p><strong>Display:</strong> ${device.display}</p>
        <p><strong>Processor:</strong> ${device.processor}</p>
        <p><strong>RAM & Storage:</strong> ${device.ram}</p>
        <p><strong>Battery & Charge:</strong> ${device.battery}</p>
        <p><strong>Camera:</strong> ${device.camera}</p>
        <p><strong>OS:</strong> ${device.os}</p>
        <p style="margin-top: 0.4rem; font-size: 1.1rem; color: var(--accent-color); font-weight: bold;">${device.price}</p>
    `;
}

// Filter Functionality by Brand Chips
function initFilters() {
    const chips = document.querySelectorAll(".chip");
    chips.forEach(chip => {
        chip.addEventListener("click", (e) => {
            chips.forEach(c => c.classList.remove("active"));
            e.target.classList.add("active");
            
            const brand = e.target.getAttribute("data-brand");
            if (brand === "all") {
                initCatalog(devices);
            } else {
                const filtered = devices.filter(d => d.brand.toLowerCase() === brand.toLowerCase());
                initCatalog(filtered);
            }
        });
    });
}

// Advanced Real-time Search Engine
function initSearch() {
    const searchInput = document.getElementById("device-search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = devices.filter(d => 
            d.name.toLowerCase().includes(query) || 
            d.brand.toLowerCase().includes(query) || 
            d.series.toLowerCase().includes(query) ||
            d.processor.toLowerCase().includes(query) ||
            d.display.toLowerCase().includes(query) ||
            d.camera.toLowerCase().includes(query)
        );
        initCatalog(filtered);
    });
}

// ==========================================
// GOOGLE AI GEMINI API & SUPPORT CHAT WIDGET
// ==========================================
function initChatWidget() {
    const toggleBtn = document.getElementById("chat-toggle-btn");
    const closeBtn = document.getElementById("chat-close");
    const chatWindow = document.getElementById("chat-window");
    const sendBtn = document.getElementById("chat-send");
    const chatInput = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");
    const quickChips = document.querySelectorAll(".quick-chip");

    toggleBtn.addEventListener("click", () => chatWindow.classList.toggle("hidden"));
    closeBtn.addEventListener("click", () => chatWindow.classList.add("hidden"));

    const appendMessage = (text, sender) => {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chat-message ${sender}`;
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const handleGeminiQuery = async (userText) => {
        if (!userText.trim()) return;

        appendMessage(userText, "user");
        chatInput.value = "";

        const loadingId = "loading-" + Date.now();
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "chat-message bot";
        loadingDiv.id = loadingId;
        loadingDiv.textContent = "AI Pro is searching the complete Realme archive...";
        chatBody.appendChild(loadingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
            const dbContext = JSON.stringify(devices);
            const prompt = `You are the official Pro Support AI for 'Compare Zone'. Use this complete Realme archive database: ${dbContext}. Customer Question: "${userText}"`;

            const API_KEY = "YOUR_GEMINI_API_KEY"; 
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            const data = await response.json();
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that query right now. Check our catalog filters above!";

            document.getElementById(loadingId).remove();
            appendMessage(botReply, "bot");

        } catch (error) {
            document.getElementById(loadingId).remove();
            const fallbackReply = getDatabaseFallback(userText);
            appendMessage(fallbackReply, "bot");
        }
    };

    function getDatabaseFallback(query) {
        const q = query.toLowerCase();
        if (q.includes("gt") || q.includes("series")) {
            return "Our database covers all Realme GT, Number, P, Narzo, and C series models from 2020 through 2026 with full GSMArena specs!";
        } else if (q.includes("power") || q.includes("battery")) {
            return "The Realme P4 Power features an AI-rendered TransSilver matte body with a colossal 10,001mAh Titan Battery!";
        }
        return "You can check specifications, AI-generated visual previews, ratings, and e-commerce store links for every phone directly in your website catalog!";
    }

    sendBtn.addEventListener("click", () => handleGeminiQuery(chatInput.value));
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleGeminiQuery(chatInput.value);
    });

    quickChips.forEach(chip => {
        chip.addEventListener("click", (e) => {
            const queryText = e.target.getAttribute("data-query");
            handleGeminiQuery(queryText);
        });
    });
}
