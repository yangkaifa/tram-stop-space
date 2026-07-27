const benchButton = document.querySelector("#bench-button");
const binButton = document.querySelector("#bin-button");

const benchStatusText = document.querySelector("#bench-status");
const binStatusText = document.querySelector("#bin-status");

const bench = document.querySelector("#bench");
const bin = document.querySelector("#bin");

benchButton.addEventListener("click", function () {
    if (benchStatusText.textContent === "Bench is hidden.") {
        benchStatusText.textContent = "Bench is visible.";
        benchButton.textContent = "Hide Bench";
        bench.style.display = "block";
    } else {
        benchStatusText.textContent = "Bench is hidden.";
        benchButton.textContent = "Show Bench";
        bench.style.display = "none";
    }
});

binButton.addEventListener("click", function () {
    if (binStatusText.textContent === "Bin is hidden.") {
        binStatusText.textContent = "Bin is visible.";
        binButton.textContent = "Hide Bin";
        bin.style.display = "block";
    } else {
        binStatusText.textContent = "Bin is hidden.";
        binButton.textContent = "Show Bin";
        bin.style.display = "none";
    }
});