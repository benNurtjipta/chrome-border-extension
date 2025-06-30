let bordersActive = false;

function toggleBorders() {
  const styleId = "border-toggle-style";
  const existingStyle = document.getElementById(styleId);

  if (bordersActive) {
    if (existingStyle) {
      existingStyle.remove();
    }
    bordersActive = false;
    console.log("Borders removed");
  } else {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = "* { border: 1px solid red !important; }";
    document.head.appendChild(style);
    bordersActive = true;
    console.log("Borders added");
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === "toggle-borders") {
    toggleBorders();
    sendResponse({ success: true });
  }
});

document.addEventListener("keydown", (event) => {
  if (
    (event.ctrlKey && event.key === "b" && !event.shiftKey) ||
    (event.ctrlKey && event.shiftKey && event.key === "B")
  ) {
    event.preventDefault();
    toggleBorders();
  }
});
