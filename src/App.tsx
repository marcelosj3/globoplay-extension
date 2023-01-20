import { useCallback, useEffect, useState } from "react";
import { DOMMessage, DOMMessageResponse } from "./types";

function App() {
  const [isGloboplayUrl, setIsGloboplayUrl] = useState<boolean>(false);

  useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          /**
           * Sends a single message to the content script(s) in the specified tab,
           * with an optional callback to run when a response is sent back.
           *
           * The runtime.onMessage event is fired in each content script running
           * in the specified tab for the current extension.
           */
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            {
              type: "GET_DOM",
            } as DOMMessage,
            (response: DOMMessageResponse) => {
              setIsGloboplayUrl(response.isGloboplayUrl);
            }
          );
        }
      );
  }, []);

  const handleOnChangeHeaderMenu = useCallback(() => {}, []);

  // const handleOnChangeMediaControlOverlay = useCallback(() => {
  //   setMediaControlOverlayInfo(({ display, showElement }) => ({
  //     display,
  //     showElement: !showElement,
  //   }));
  // }, []);

  return (
    <div className="App">
      {isGloboplayUrl ? (
        <>
          <input
            type="checkbox"
            id="header"
            name="header"
            onChange={handleOnChangeHeaderMenu}
            // checked={headerMenuInfo.showElement}
          />
          <label htmlFor="header">Header</label>

          {/* <input
            type="checkbox"
            id="overlay"
            name="overlay"
            onChange={handleOnChangeMediaControlOverlay}
            checked={mediaControlOverlayInfo.showElement}
          />
          <label htmlFor="overlay">Overlay</label> */}
        </>
      ) : (
        <h1>NOPE</h1>
      )}
    </div>
  );
}

export default App;
