const COMMAND_NAME = "toggle-borders";

chrome.commands.onCommand.addListener((command) => {
  if (command === COMMAND_NAME) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        console.error("Error querying tabs:", chrome.runtime.lastError);
        return;
      }

      if (tabs[0]) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { command: COMMAND_NAME },
          (response) => {
            if (chrome.runtime.lastError) {
              console.error("Error sending message:", chrome.runtime.lastError);
            } else if (response) {
              console.log("Border toggle response:", response);
            }
          }
        );
      }
    });
  }
});
