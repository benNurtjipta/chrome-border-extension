const STYLE_ID = "border-toggle-style";
const COMMAND_NAME = "toggle-borders";
const CSS_CLASS = "extension-borders-active";
const BORDER_STYLE = `
.${CSS_CLASS} * { 
  border: 1px solid red !important; 
  box-sizing: border-box !important;
}
`;

let bordersActive = false;

function toggleBorders() {
  try {
    const existingStyle = document.getElementById(STYLE_ID);

    if (bordersActive) {
      if (existingStyle) {
        existingStyle.remove();
      }
      document.documentElement.classList.remove(CSS_CLASS);
      bordersActive = false;
      console.log("Borders removed");
    } else {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = BORDER_STYLE;

      if (document.head) {
        document.head.appendChild(style);
        document.documentElement.classList.add(CSS_CLASS);
        bordersActive = true;
        console.log("Borders added");
      } else {
        console.error("Cannot add borders: document.head not available");
      }
    }
  } catch (error) {
    console.error("Error toggling borders:", error);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    if (request.command === COMMAND_NAME) {
      toggleBorders();
      sendResponse({ success: true, active: bordersActive });
    }
  } catch (error) {
    console.error("Error handling message:", error);
    sendResponse({ success: false, error: error.message });
  }
});

document.addEventListener("keydown", (event) => {
  try {
    const isMacShortcut =
      event.ctrlKey && !event.shiftKey && event.key.toLowerCase() === "b";
    const isWinLinuxShortcut =
      event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "b";

    if (isMacShortcut || isWinLinuxShortcut) {
      event.preventDefault();
      toggleBorders();
    }
  } catch (error) {
    console.error("Error handling keydown:", error);
  }
});
