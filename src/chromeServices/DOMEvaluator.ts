import { DOMMessage, DOMMessageResponse } from "../types";

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log("[content.js]. Message received", msg);

  // Fetches information from react
  const { headerMenuInfo } = msg;

  // Checks if it is the right url
  const isGloboplayUrl = document.URL.toLowerCase().includes("globoplay");

  // Fetch elements
  const headerMenu = document.querySelector<HTMLElement>("header");
  const mediaControlOverlay =
    document.querySelector<HTMLElement>(".media-control");

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    isGloboplayUrl,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
