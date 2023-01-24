import { useCallback, useEffect, useState } from "react";
import { DOMMessage, DOMMessageResponse } from "./types";

function App() {
  const [isGloboplayUrl, setIsGloboplayUrl] = useState<boolean>(false);
  const [showHeaderMenu, setShowHeaderMenu] = useState<boolean>(false);
  const [showMediaControlOverlay, setShowMediaControlOverlay] =
    useState<boolean>(false);
  const [showAllElements, setShowAllElements] = useState<boolean>(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState<boolean>(false);

  useEffect(() => {
    if (
      showHeaderMenu !== showAllElements &&
      showMediaControlOverlay !== showAllElements
    )
      setShowAllElements((showElements) => !showElements);

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
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            {
              type: "GET_DOM",
              headerMenuInfo: {
                showElement: showHeaderMenu,
              },
              mediaControlOverlayInfo: {
                showElement: showMediaControlOverlay,
              },
              videoInfo: { isFullscreen: isVideoFullscreen },
            } as DOMMessage,
            (response: DOMMessageResponse) => {
              setIsGloboplayUrl(response.isGloboplayUrl);
              setIsVideoFullscreen(response.video.isFullscreen);
            }
          );
        }
      );
  }, [
    showHeaderMenu,
    showMediaControlOverlay,
    showAllElements,
    isVideoFullscreen,
  ]);

  const handleOnChangeHeaderMenu = useCallback(() => {
    setShowHeaderMenu((showElement) => !showElement);
  }, []);

  const handleOnChangeMediaControlOverlay = useCallback(() => {
    setShowMediaControlOverlay((showElement) => !showElement);
  }, []);

  const handleOnChangeAllElements = useCallback(() => {
    setShowHeaderMenu(!showAllElements);
    setShowMediaControlOverlay(!showAllElements);
    setShowAllElements((showElements) => !showElements);
  }, [showAllElements]);

  const handleVideoFullscreen = useCallback(() => {
    setIsVideoFullscreen(true);
    window.close();
  }, []);

  return (
    <div className="App">
      {isGloboplayUrl ? (
        <>
          <input
            type="checkbox"
            id="header"
            name="header"
            onChange={handleOnChangeHeaderMenu}
            checked={showHeaderMenu}
          />
          <label htmlFor="header">Header</label>

          <input
            type="checkbox"
            id="overlay"
            name="overlay"
            onChange={handleOnChangeMediaControlOverlay}
            checked={showMediaControlOverlay}
          />
          <label htmlFor="overlay">Overlay</label>

          <input
            type="checkbox"
            id="allElements"
            name="allElements"
            onChange={handleOnChangeAllElements}
            checked={showAllElements}
          />
          <label htmlFor="allElements">Toggle all elements</label>

          <button onClick={handleVideoFullscreen}>Fullscreen</button>
        </>
      ) : (
        <h1>NOPE</h1>
      )}
    </div>
  );
}

export default App;
