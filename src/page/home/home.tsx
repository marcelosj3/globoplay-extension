import { useEffect, useState } from "react";
import { DOMMessage, DOMMessageResponse } from "../../types";
import { AccessDenied } from "../access-denied/access-denied";
import { ExtensionContent } from "../extension-content/extension-content";

export const Home = () => {
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
    setIsGloboplayUrl,
    showHeaderMenu,
    showMediaControlOverlay,
    showAllElements,
    isVideoFullscreen,
  ]);

  return (
    <div className="App">
      {isGloboplayUrl ? (
        <ExtensionContent
          setIsGloboplayUrl={setIsGloboplayUrl}
          setShowHeaderMenu={setShowHeaderMenu}
          setIsVideoFullscreen={setIsVideoFullscreen}
          setShowAllElements={setShowAllElements}
          setShowMediaControlOverlay={setShowMediaControlOverlay}
          showAllElements={showAllElements}
          showHeaderMenu={showHeaderMenu}
          showMediaControlOverlay={showMediaControlOverlay}
        />
      ) : (
        <AccessDenied />
      )}
    </div>
  );
};
