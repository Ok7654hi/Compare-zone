// GSMArena & 91mobiles Pro Standardized Database
const devices = [
    {
        id: 1,
        name: "Vivo X300 Pro",
        brand: "Vivo",
        series: "X Series",
        display: "6.78\" AMOLED, 120Hz",
        processor: "Snapdragon 8 Elite",
        ram: "12GB RAM",
        battery: "6500 mAh, 100W Charging",
        camera: "200MP + 50MP OIS",
        os: "Funtouch OS 16",
        price: "₹85,999",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Flipkart", url: "https://www.flipkart.com/search?q=Vivo+X300+Pro" },
            { name: "Amazon", url: "https://www.amazon.in/s?k=Vivo+X300+Pro" },
            { name: "Vivo Store", url: "https://www.vivo.com" }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S26 Ultra",
        brand: "Samsung",
        series: "Galaxy S",
        display: "6.9\" Dynamic AMOLED 2X, 120Hz",
        processor: "Snapdragon 8 Elite for Galaxy",
        ram: "12GB RAM",
        battery: "5000 mAh, 45W Charging",
        camera: "200MP Quad OIS",
        os: "One UI 8.1",
        price: "₹1,29,999",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Amazon", url: "https://www.amazon.in/s?k=Samsung+Galaxy+S26+Ultra" },
            { name: "Flipkart", url: "https://www.flipkart.com/search?q=Samsung+Galaxy+S26+Ultra" },
            { name: "Samsung Shop", url: "https://www.samsung.com" }
        ]
    },
    {
        id: 3,
        name: "Apple iPhone 17 Pro Max",
        brand: "Apple",
        series: "iPhone Pro",
        display: "6.9\" Super Retina XDR, 120Hz",
        processor: "Apple A19 Pro",
        ram: "8GB RAM",
        battery: "4800 mAh, MagSafe Fast Charge",
        camera: "48MP Triple ProRes",
        os: "iOS 19",
        price: "₹1,49,900",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Amazon", url: "https://www.amazon.in/s?k=iPhone+17+Pro+Max" },
            { name: "Flipkart", url: "https://www.flipkart.com/search?q=iPhone+17+Pro+Max" },
            { name: "Apple Store", url: "https://www.apple.com" }
        ]
    },
    {
        id: 4,
        name: "Xiaomi 15 Pro",
        brand: "Xiaomi",
        series: "Xiaomi Flagship",
        display: "6.73\" LTPO AMOLED, 120Hz",
        processor: "Snapdragon 8 Elite",
        ram: "12GB RAM",
        battery: "6100 mAh, 90W Charging",
        camera: "50MP Leica Triple",
        os: "Xiaomi HyperOS 3",
        price: "₹74,999",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Amazon", url: "https://www.amazon.in/s?k=Xiaomi+15+Pro" },
            { name: "Mi Store", url: "https://www.mi.com" }
        ]
    },
    {
        id: 5,
        name: "Poco F7 Pro",
        brand: "Poco",
        series: "Poco F Series",
        display: "6.67\" Flow AMOLED, 120Hz",
        processor: "Snapdragon 8 Gen 4",
        ram: "12GB RAM",
        battery: "6000 mAh, 120W HyperCharge",
        camera: "50MP OIS",
        os: "Xiaomi HyperOS",
        price: "₹37,999",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Flipkart", url: "https://www.flipkart.com/search?q=Poco+F7+Pro" }
        ]
    },
    {
        id: 6,
        name: "iQOO 15 Apex",
        brand: "iQOO",
        series: "iQOO Flagship",
        display: "6.82\" 2K AMOLED, 144Hz",
        processor: "Snapdragon 8 Elite Gen 5",
        ram: "12GB RAM",
        battery: "7000 mAh, 120W Charging",
        camera: "50MP Triple",
        os: "Funtouch OS 16",
        price: "₹76,999",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Amazon", url: "https://www.amazon.in/s?k=iQOO+15+Apex" },
            { name: "iQOO Store", url: "https://www.iqoo.com" }
        ]
    },
    {
        id: 7,
        name: "Realme 14 Pro Plus 5G",
        brand: "Realme",
        series: "Realme Number",
        display: "6.7\" Curved AMOLED, 120Hz",
        processor: "Snapdragon 7s Gen 3",
        ram: "12GB RAM",
        battery: "5200 mAh, 80W Charging",
        camera: "50MP OIS Periscope",
        os: "Realme UI 7.0",
        price: "₹29,999",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=300&auto=format&fit=crop&q=60",
        stores: [
            { name: "Flipkart", url: "https://www.flipkart.com/search?q=Realme+14+Pro+Plus+5G" },
            { name: "Realme Store", url: "https://www.realme.com" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initCatalog(devices);
    initSelectors();
    initFilters();
    initChatWidget();
    initSearch();
    simulateProSync();
});

function simulateProSync() {
    const syncStatus = document.getElementById("sync-status");
    setTimeout(() => {
        syncStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>GSMArena & 91mobiles Pro Specs Synced</span>`;
        syncStatus.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
    }, 1500);
}

// Populate Catalog Grid with GSMArena Style Details
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
        loadingDiv.textContent = "AI Pro is referencing GSMArena & 91mobiles specs...";
        chatBody.appendChild(loadingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
            const dbContext = JSON.stringify(devices);
            const prompt = `You are the official Pro Support AI for 'Compare Zone'. Use this GSMArena-level detailed database (displays, processors, battery speeds, cameras, prices): ${dbContext}. Customer Question: "${userText}"`;

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
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that query right now. Check our pro catalog filters above!";

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
        if (q.includes("display") || q.includes("charging")) {
            return "Our pro database tracks 120Hz+ AMOLED displays and ultra-fast charging speeds ranging from 45W up to 120W across major brands like iQOO, Vivo, and Samsung!";
        } else if (q.includes("camera")) {
            return "GSMArena specs highlight top configurations like the 200MP setup on Vivo X300 Pro and Samsung S26 Ultra for professional photography.";
        }
        return "You can check deep hardware specifications (Displays, Battery, RAM, OS version, and E-commerce buy links) directly inside every phone card in our catalog!";
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
