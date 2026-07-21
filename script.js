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
}// Master Directory: Complete Realme Archive (2020-2026) + Complete Vivo Archive (2018-2026) + Competitors
const devices = [
    // --- VIVO X SERIES (Flagship & ZEISS Imaging) ---
    { 
        id: 101, 
        name: "Vivo X300 Pro", 
        brand: "Vivo", 
        series: "X Series", 
        display: "6.78\" LTPO AMOLED, 120Hz (4500 nits)", 
        processor: "MediaTek Dimensity 9500", 
        ram: "12GB / 16GB RAM", 
        battery: "6510 mAh, 90W Fast Charge", 
        camera: "50MP LYT-828 + 200MP Periscope OIS", 
        os: "OriginOS 6 (Android 16)", 
        price: "₹1,09,999", 
        rating: "4.7", 
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-pro.jpg", 
        aiTag: "Official Photo: Dune Brown ZEISS", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }, { name: "Amazon", url: "https://www.amazon.in" }, { name: "Vivo Store", url: "https://shop.vivo.com/in" }] 
    },
    { 
        id: 102, 
        name: "Vivo X300 Ultra", 
        brand: "Vivo", 
        series: "X Series", 
        display: "6.82\" AMOLED, 120Hz", 
        processor: "MediaTek Dimensity 9500", 
        ram: "16GB RAM", 
        battery: "6000 mAh, 100W Charge", 
        camera: "200MP Quad ZEISS Optics", 
        os: "OriginOS 6", 
        price: "₹1,59,999", 
        rating: "4.9", 
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-ultra.jpg", 
        aiTag: "Official Photo: Titanium Master", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },
    { 
        id: 103, 
        name: "Vivo X Fold5 5G", 
        brand: "Vivo", 
        series: "X Series", 
        display: "8.03\" Foldable AMOLED, 120Hz", 
        processor: "Snapdragon 8 Elite", 
        ram: "16GB RAM", 
        battery: "5700 mAh, 80W", 
        camera: "50MP Triple ZEISS", 
        os: "OriginOS Fold", 
        price: "₹1,49,999", 
        rating: "4.8", 
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold5.jpg", 
        aiTag: "Official Photo: Foldable Gray", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 104, 
        name: "Vivo X100 Pro", 
        brand: "Vivo", 
        series: "X Series", 
        display: "6.78\" LTPO AMOLED, 120Hz", 
        processor: "MediaTek Dimensity 9300", 
        ram: "16GB RAM", 
        battery: "5400 mAh, 100W", 
        camera: "50MP 1-inch ZEISS", 
        os: "Funtouch OS 14", 
        price: "₹89,999", 
        rating: "4.7", 
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg", 
        aiTag: "Official Photo: Asteroid Black", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },

    // --- VIVO V SERIES (Style, Selfie & Mid-Flagship) ---
    { 
        id: 105, 
        name: "Vivo V70 Elite", 
        brand: "Vivo", 
        series: "V Series", 
        display: "6.59\" AMOLED, 120Hz (5000 nits)", 
        processor: "Qualcomm Snapdragon 8s Gen 3", 
        ram: "8GB / 12GB RAM", 
        battery: "6500 mAh, 90W Fast Charge", 
        camera: "50MP + 50MP + 8MP ZEISS", 
        os: "OriginOS 6 (Android 16)", 
        price: "₹58,999", 
        rating: "4.6", 
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70-elite.jpg", 
        aiTag: "Official Photo: Passion Red", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }, { name: "Croma", url: "https://www.croma.com" }] 
    },
    { 
        id: 106, 
        name: "Vivo V40 Pro", 
        brand: "Vivo", 
        series: "V Series", 
        display: "6.78\" Curved AMOLED, 120Hz", 
        processor: "MediaTek Dimensity 9200+", 
        ram: "8GB RAM", 
        battery: "5500 mAh, 80W", 
        camera: "50MP Triple ZEISS", 
        os: "Funtouch OS 14", 
        price: "₹37,999", 
        rating: "4.5", 
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg", 
        aiTag: "Official Photo: Titanium Gray", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },

    // --- VIVO T SERIES & Y SERIES ---
    { 
        id: 107, 
        name: "Vivo T4 Pro", 
        brand: "Vivo", 
        series: "T Series", 
        display: "6.78\" AMOLED, 120Hz", 
        processor: "Snapdragon 7 Gen 4", 
        ram: "8GB RAM", 
        battery: "6500 mAh, 90W", 
        camera: "50MP Dual Camera", 
        os: "Funtouch OS 15", 
        price: "₹35,999", 
        rating: "4.5", 
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Turbo Black", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 108, 
        name: "Vivo Y300 5G", 
        brand: "Vivo", 
        series: "Y Series", 
        display: "6.67\" AMOLED, 120Hz", 
        processor: "Snapdragon 4 Gen 2", 
        ram: "8GB RAM", 
        battery: "5000 mAh, 80W", 
        camera: "50MP Dual Camera", 
        os: "Funtouch OS 14", 
        price: "₹21,999", 
        rating: "4.3", 
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Emerald Green", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },

    // --- REALME GT SERIES ---
    { 
        id: 201, 
        name: "Realme GT 8 Pro", 
        brand: "Realme", 
        series: "Realme GT", 
        display: "6.79\" QHD+ AMOLED, 144Hz", 
        processor: "Snapdragon 8 Elite Gen 5", 
        ram: "16GB RAM", 
        battery: "7000 mAh, 120W", 
        camera: "200MP + 50MP OIS", 
        os: "Realme UI 7.0", 
        price: "₹72,999", 
        rating: "4.7", 
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Urban Blue Eco-Leather", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }, { name: "Amazon", url: "https://www.amazon.in" }] 
    },
    { 
        id: 202, 
        name: "Realme GT 7 Pro", 
        brand: "Realme", 
        series: "Realme GT", 
        display: "6.78\" LTPO AMOLED, 144Hz", 
        processor: "Snapdragon 8 Elite", 
        ram: "12GB RAM", 
        battery: "6500 mAh, 120W", 
        camera: "50MP Triple OIS", 
        os: "Realme UI 6.0", 
        price: "₹59,999", 
        rating: "4.6", 
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Mars Orange", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },
    { 
        id: 203, 
        name: "Realme GT 6", 
        brand: "Realme", 
        series: "Realme GT", 
        display: "6.78\" AMOLED, 120Hz", 
        processor: "Snapdragon 8s Gen 3", 
        ram: "12GB RAM", 
        battery: "5500 mAh, 120W", 
        camera: "50MP OIS + Telephoto", 
        os: "Realme UI 5.0", 
        price: "₹39,999", 
        rating: "4.5", 
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Fluid Silver", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 204, 
        name: "Realme GT 3 (240W)", 
        brand: "Realme", 
        series: "Realme GT", 
        display: "6.74\" AMOLED, 144Hz", 
        processor: "Snapdragon 8+ Gen 1", 
        ram: "16GB RAM", 
        battery: "4600 mAh, 240W SuperVOOC", 
        camera: "50MP Triple", 
        os: "Realme UI 4.0", 
        price: "₹34,999", 
        rating: "4.4", 
        image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Pulse White", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 205, 
        name: "Realme GT 2 Pro", 
        brand: "Realme", 
        series: "Realme GT", 
        display: "6.7\" AMOLED, 120Hz", 
        processor: "Snapdragon 8 Gen 1", 
        ram: "12GB RAM", 
        battery: "5000 mAh, 65W", 
        camera: "50MP Dual OIS", 
        os: "Realme UI 3.0", 
        price: "₹49,999", 
        rating: "4.3", 
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Paper White", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },

    // --- REALME NUMBER SERIES ---
    { 
        id: 206, 
        name: "Realme 16 Pro Plus", 
        brand: "Realme", 
        series: "Realme Number", 
        display: "6.8\" AMOLED 4D Curve, 144Hz", 
        processor: "Snapdragon 7 Gen 4", 
        ram: "12GB RAM", 
        battery: "7000 mAh, 80W", 
        camera: "200MP + 50MP OIS", 
        os: "Realme UI 7.0", 
        price: "₹39,999", 
        rating: "4.6", 
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Golden Curve", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 207, 
        name: "Realme 14 Pro Plus 5G", 
        brand: "Realme", 
        series: "Realme Number", 
        display: "6.7\" Curved AMOLED, 120Hz", 
        processor: "Snapdragon 7s Gen 3", 
        ram: "12GB RAM", 
        battery: "5200 mAh, 80W", 
        camera: "50MP OIS Periscope", 
        os: "Realme UI 7.0", 
        price: "₹29,999", 
        rating: "4.4", 
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Monet Gold", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 208, 
        name: "Realme 12 Pro+", 
        brand: "Realme", 
        series: "Realme Number", 
        display: "6.7\" Curved AMOLED, 120Hz", 
        processor: "Snapdragon 7s Gen 2", 
        ram: "8GB RAM", 
        battery: "5000 mAh, 67W", 
        camera: "50MP + 64MP Periscope", 
        os: "Realme UI 5.0", 
        price: "₹29,999", 
        rating: "4.4", 
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Submarine Blue", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },

    // --- REALME P SERIES ---
    { 
        id: 209, 
        name: "Realme P4 Power", 
        brand: "Realme", 
        series: "Realme P Series", 
        display: "6.8\" AMOLED, 144Hz", 
        processor: "MediaTek Dimensity 7400 Ultra", 
        ram: "12GB RAM", 
        battery: "10001 mAh Titan Battery, 80W", 
        camera: "50MP OIS", 
        os: "Realme UI 7.0", 
        price: "₹28,999", 
        rating: "4.7", 
        image: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: TransSilver Matte", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },
    { 
        id: 210, 
        name: "Realme P2 Pro", 
        brand: "Realme", 
        series: "Realme P Series", 
        display: "6.7\" Curved AMOLED, 120Hz", 
        processor: "Snapdragon 7s Gen 2", 
        ram: "8GB RAM", 
        battery: "5200 mAh, 80W", 
        camera: "50MP OIS", 
        os: "Realme UI 5.0", 
        price: "₹21,999", 
        rating: "4.3", 
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Parrot Green", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },

    // --- REALME NARZO & C SERIES ---
    { 
        id: 211, 
        name: "Realme Narzo 100x 5G", 
        brand: "Realme", 
        series: "Realme Narzo", 
        display: "6.81\" IPS LCD, 144Hz", 
        processor: "MediaTek Dimensity 6300", 
        ram: "8GB RAM", 
        battery: "8000 mAh Titan Battery, 45W", 
        camera: "50MP Dual AI", 
        os: "Realme UI 7.0", 
        price: "₹16,999", 
        rating: "4.5", 
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Cyber Black", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },
    { 
        id: 212, 
        name: "Realme C75", 
        brand: "Realme", 
        series: "Realme C Series", 
        display: "6.72\" IPS LCD, 90Hz", 
        processor: "MediaTek Helio G85", 
        ram: "6GB RAM", 
        battery: "6000 mAh, 45W", 
        camera: "50MP AI Camera", 
        os: "Realme UI", 
        price: "₹10,999", 
        rating: "4.2", 
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Lightning Gold", 
        stores: [{ name: "Flipkart", url: "https://www.flipkart.com" }] 
    },

    // --- MAJOR COMPETITORS ---
    { 
        id: 301, 
        name: "Samsung Galaxy S26 Ultra", 
        brand: "Samsung", 
        series: "Galaxy S", 
        display: "6.9\" Dynamic AMOLED 2X, 120Hz", 
        processor: "Snapdragon 8 Elite for Galaxy", 
        ram: "12GB RAM", 
        battery: "5000 mAh, 45W", 
        camera: "200MP Quad OIS", 
        os: "One UI 8.1", 
        price: "₹1,29,999", 
        rating: "4.8", 
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Titanium Flagship", 
        stores: [{ name: "Amazon", url: "https://www.amazon.in" }] 
    },
    { 
        id: 302, 
        name: "Apple iPhone 17 Pro Max", 
        brand: "Apple", 
        series: "iPhone Pro", 
        display: "6.9\" Super Retina XDR, 120Hz", 
        processor: "Apple A19 Pro", 
        ram: "8GB RAM", 
        battery: "4800 mAh, MagSafe", 
        camera: "48MP Triple ProRes", 
        os: "iOS 19", 
        price: "₹1,49,900", 
        rating: "4.9", 
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop&q=60", 
        aiTag: "AI Render: Titanium Pro Max", 
        stores: [{ name: "Apple Store", url: "https://www.apple.com" }] 
    }
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
        syncStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Vivo, Realme & Model Photos Live</span>`;
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
                <img src="${d.image}" alt="${d.name}" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=60'">
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
        loadingDiv.textContent = "AI Pro is searching Vivo & Realme archives...";
        chatBody.appendChild(loadingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
            const dbContext = JSON.stringify(devices);
            const prompt = `You are the official Pro Support AI for 'Compare Zone'. Use this complete Vivo and Realme database: ${dbContext}. Customer Question: "${userText}"`;

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
        if (q.includes("vivo") || q.includes("x300")) {
            return "The Vivo X300 Pro features a 6,510mAh battery, Dimensity 9500, and 200MP ZEISS camera!";
        } else if (q.includes("gt") || q.includes("realme")) {
            return "Realme GT 8 Pro features Snapdragon 8 Elite Gen 5, a 7,000mAh Titan battery, and 120W charging!";
        }
        return "You can explore all Vivo and Realme models with official photos, pro specs, ratings, and live store buy links inside the catalog!";
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
// Master Directory: Complete Samsung Archive + Complete Xiaomi Archive + Multi-Brand Dataset
const devices = [
    // --- COMPLETE SAMSUNG GALAXY ARCHIVE ---
    { id: 5001, name: "Samsung Galaxy S9", brand: "Samsung", series: "Galaxy S", display: "5.8\" Super AMOLED", processor: "Exynos 9810 / Snapdragon 845", ram: "4GB RAM", battery: "3000 mAh, 15W", camera: "12MP OIS", os: "Android 10", price: "₹39,999", rating: "4.2", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-.jpg", aiTag: "Official Photo: Lilac Purple", stores: [{ name: "Amazon", url: "https://www.amazon.in" }] },
    { id: 5002, name: "Samsung Galaxy S9+", brand: "Samsung", series: "Galaxy S", display: "6.2\" Super AMOLED", processor: "Exynos 9810 / Snapdragon 845", ram: "6GB RAM", battery: "3500 mAh, 15W", camera: "12MP Dual OIS", os: "Android 10", price: "₹49,999", rating: "4.4", image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-plus-.jpg", aiTag: "Official Photo: Coral Blue", stores: [{ name: "Flipkart", url:
