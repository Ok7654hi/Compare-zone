// Compare Zone

console.log("Compare Zone Loaded Successfully");

// Search Button
const searchBtn = document.querySelector("button");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        const search = document.querySelector("input").value;

        if (search.trim() === "") {
            alert("Please enter a phone name.");
            return;
        }

        alert("Searching for: " + search);

        // Future:
        // window.location.href = "search.html?q=" + encodeURIComponent(search);
    });
}

// Press Enter to Search
const searchInput = document.querySelector("input");

if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });
}

console.log("JavaScript Ready");