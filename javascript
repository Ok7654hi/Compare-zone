/* ==========================================================================
   COMPARE ZONE - COMPLETE MASTER SCRIPT (script.js)
   ========================================================================== */

// 1. SMARTPHONE DATABASE
const phoneDatabase = [
    {
        id: "realme_14_pro",
        brand: "Realme",
        model: "Realme 14 Pro+",
        ram: "12GB",
        storage: "256GB",
        processor: "Snapdragon 7s Gen 3",
        battery: "5000 mAh",
        camera: "50MP + 50MP + 8MP",
        display: "6.7 inch Curved AMOLED",
        price: "₹29,999",
        image: "https://via.placeholder.com/150?text=Realme+14+Pro"
    },
    {
        id: "nokia_g60",
        brand: "Nokia",
        model: "Nokia G60 5G",
        ram: "6GB",
        storage: "128GB",
        processor: "Snapdragon 695",
        battery: "4500 mAh",
        camera: "50MP + 5MP + 2MP",
        display: "6.58 inch FHD+ 120Hz",
        price: "₹15,999",
        image: "https://via.placeholder.com/150?text=Nokia+G60"
    },
    {
        id: "jio_phone_5g",
        brand: "Jio",
        model: "JioPhone 5G",
        ram: "4GB",
        storage: "64GB",
        processor: "Unisoc T610",
        battery: "5000 mAh",
        camera: "13MP + 2MP",
        display: "6.5 inch HD+",
        price: "₹8,499",
        image: "https://via.placeholder.com/150?text=JioPhone+5G"
    },
    {
        id: "huawei_p60",
        brand: "Huawei",
        model: "Huawei P60 Pro",
        ram: "8GB",
        storage: "256GB",
        processor: "Snapdragon 8+ Gen 1",
        battery: "4815 mAh",
        camera: "48MP + 48MP + 13MP",
        display: "6.67 inch OLED 120Hz",
        price: "₹54,999",
        image: "https://via.placeholder.com/150?text=Huawei+P60"
    }
];

// 2. INITIALIZATION & DROPDOWN POPULATION
document.addEventListener("DOMContentLoaded", () => {
    populateSelectOptions(phoneDatabase);
});

function populateSelectOptions(data) {
    const s1 = document.getElementById("selectPhone1");
    const s2 = document.getElementById("selectPhone2");

    if (!s1 || !s2) return;

    // Reset dropdowns
    s1.innerHTML = '<option value="">पहला फोन चुनें...</option>';
    s2.innerHTML = '<option value="">दूसरा फोन चुनें...</option>';

    data.forEach(phone => {
        const option1 = new Option(`${phone.brand} ${phone.model}`, phone.id);
        const option2 = new Option(`${phone.brand} ${phone.model}`, phone.id);
        s1.add(option1);
        s2.add(option2);
    });
}

// 3. FILTER ENGINE (Brand & RAM Filter)
function applyFilters() {
    const brandFilter = document.getElementById("brandFilter");
    const ramFilter = document.getElementById("ramFilter");

    const selectedBrand = brandFilter ? brandFilter.value : "all";
    const selectedRam = ramFilter ? ramFilter.value : "all";

    const filteredData = phoneDatabase.filter(phone => {
        const matchBrand = (selectedBrand === "all" || phone.brand === selectedBrand);
        const matchRam = (selectedRam === "all" || phone.ram === selectedRam);
        return matchBrand && matchRam;
    });

    populateSelectOptions(filteredData);
    
    // Clear display if active selections are filtered out
    updateComparison(1);
    updateComparison(2);
}

// 4. COMPARISON ENGINE (Side-by-Side Spec Renderer)
function updateComparison(slotNumber) {
    const selectElem = document.getElementById(`selectPhone${slotNumber}`);
    const displayArea = document.getElementById(`phone${slotNumber}Details`);

    if (!selectElem || !displayArea) return;

    const selectedId = selectElem.value;

    if (!selectedId) {
        displayArea.innerHTML = '<p style="color:#94a3b8; margin-top:2rem; text-align:center;">सूची से डिवाइस चुनें</p>';
        return;
    }

    const phone = phoneDatabase.find(p => p.id === selectedId);

    if (!phone) return;

    displayArea.innerHTML = `
        <img src="${phone.image}" alt="${phone.model}">
        <h4 style="text-align:center; margin-bottom:1rem; font-size:1.1rem; color:#0f172a;">${phone.model}</h4>
        <table class="spec-table">
            <tr><td class="spec-label">ब्रांड</td><td>${phone.brand}</td></tr>
            <tr><td class="spec-label">RAM</td><td>${phone.ram}</td></tr>
            <tr><td class="spec-label">स्टोरेज</td><td>${phone.storage}</td></tr>
            <tr><td class="spec-label">प्रोसेसर</td><td>${phone.processor}</td></tr>
            <tr><td class="spec-label">डिस्प्ले</td><td>${phone.display}</td></tr>
            <tr><td class="spec-label">कैमरा</td><td>${phone.camera}</td></tr>
            <tr><td class="spec-label">बैटरी</td><td>${phone.battery}</td></tr>
            <tr><td class="spec-label">कीमत</td><td style="color:#2563eb; font-weight:bold; font-size:1rem;">${phone.price}</td></tr>
        </table>
    `;
}

// 5. SOCIAL LOGIN MODAL CONTROLLER
function toggleModal(show) {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.display = show ? "flex" : "none";
    }
}

function loginAlert(platform) {
    alert(`${platform} लॉगिन ऑथेंटिकेशन जारी है...`);
    toggleModal(false);
}

// 6. 24/7 AI HELPER CHATBOT LOGIC
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    if (chatBox) {
        chatBox.style.display = (chatBox.style.display === "block") ? "none" : "block";
    }
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const msgContainer = document.getElementById("chatMessages");
    
    if (!input || !msgContainer) return;

    const text = input.value.trim();
    if (!text) return;

    // Render User Message
    msgContainer.innerHTML += `
        <div style="margin: 8px 0; text-align: right;">
            <span style="background: #e2e8f0; padding: 6px 10px; border-radius: 8px; display: inline-block;">
                ${text}
            </span>
        </div>`;
    input.value = "";
    msgContainer.scrollTop = msgContainer.scrollHeight;

    // AI Bot Automated Processing
    setTimeout(() => {
        let botReply = "मैं Compare Zone AI हूँ! आप मोबाइल तुलना या फीचर्स के बारे में पूछ सकते हैं।";
        const lower = text.toLowerCase();

        if (lower.includes("budget") || lower.includes("सस्ता") || lower.includes("price") || lower.includes("कीमत")) {
            botReply = "अगर आप कम बजट में 5G फोन चाहते हैं, तो JioPhone 5G (₹8,499) या Nokia G60 5G (₹15,999) देख सकते हैं।";
        } else if (lower.includes("realme") || lower.includes("camera") || lower.includes("कैमरा")) {
            botReply = "कैमरा और परफ़ॉरमेंस के लिए Realme 14 Pro+ (50MP Triple Camera) एक बेहतरीन विकल्प है।";
        } else if (lower.includes("nokia") || lower.includes("battery") || lower.includes("बैटरी")) {
            botReply = "अच्छी बैटरी लाइफ के लिए 5000 mAh क्षमता वाले स्मार्टफ़ोन बेस्ट रहते हैं।";
        }

        msgContainer.innerHTML += `
            <div style="margin: 8px 0; text-align: left;">
                <span style="background: #2563eb; color: white; padding: 6px 10px; border-radius: 8px; display: inline-block;">
                    🤖 ${botReply}
                </span>
            </div>`;
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 600);
}
