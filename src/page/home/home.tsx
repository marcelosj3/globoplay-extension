import { useEffect, useState } from "react";
import { ReactComponent as GloboplayLogo } from "../../assets/logo/globoplay.svg";
import { CloseButton } from "../../components/close-button/close-button";
import { DOMMessage, DOMMessageResponse } from "../../types";
import { AccessDenied } from "../access-denied/access-denied";
import { ExtensionContent } from "../extension-content/extension-content";
import "./home.style.css";

export const Home = () => {
  const [isGloboplayUrl, setIsGloboplayUrl] = useState<boolean>(false);
  const [showHeaderMenu, setShowHeaderMenu] = useState<boolean>(false);
  const [showMediaControlOverlay, setShowMediaControlOverlay] =
    useState<boolean>(false);
  const [showAllElements, setShowAllElements] = useState<boolean>(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState<boolean>(false);
  const [hasHeaderMenu, setHasHeaderMenu] = useState<boolean>(false);
  const [hasMediaControlOverlay, setHasMediaControlOverlay] =
    useState<boolean>(false);
  const [hasVideo, setHasVideo] = useState<boolean>(false);

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
              setHasHeaderMenu(!!response.headerMenu.hasElement);
              setHasMediaControlOverlay(
                !!response.mediaControlOverlay.hasElement
              );
              setHasVideo(!!response.video.hasElement);
            }
          );
        }
      );
  }, [isVideoFullscreen, showHeaderMenu, showMediaControlOverlay]);

  useEffect(() => {
    if (
      showHeaderMenu !== showAllElements &&
      showMediaControlOverlay !== showAllElements
    )
      setShowAllElements((showElements) => !showElements);
  }, [showAllElements, showHeaderMenu, showMediaControlOverlay]);

  return (
    <main className="home">
      <CloseButton />

      <GloboplayLogo className="logo" />

      {!isGloboplayUrl ? (
        <ExtensionContent
          setShowHeaderMenu={setShowHeaderMenu}
          setIsVideoFullscreen={setIsVideoFullscreen}
          setShowAllElements={setShowAllElements}
          setShowMediaControlOverlay={setShowMediaControlOverlay}
          showAllElements={showAllElements}
          showHeaderMenu={showHeaderMenu}
          showMediaControlOverlay={showMediaControlOverlay}
          hasHeaderMenu={hasHeaderMenu}
          hasMediaControlOverlay={hasMediaControlOverlay}
          hasVideo={hasVideo}
        />
      ) : (
        <AccessDenied />
      )}
    </main>
  );
};
