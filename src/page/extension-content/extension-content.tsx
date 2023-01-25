import React, { useCallback } from "react";
import { Button } from "../../components/button/button";
import { ToggleButton } from "../../components/toggle-button/toggle-button";
import "./extension-content.style.css";

interface ExtensionContentProps {
  setShowHeaderMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showHeaderMenu: boolean;
  hasHeaderMenu: boolean;
  setShowMediaControlOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  showMediaControlOverlay: boolean;
  hasMediaControlOverlay: boolean;
  setShowAllElements: React.Dispatch<React.SetStateAction<boolean>>;
  showAllElements: boolean;
  setIsVideoFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  hasVideo: boolean;
}

export const ExtensionContent = ({
  setShowHeaderMenu,
  showHeaderMenu,
  setShowMediaControlOverlay,
  showMediaControlOverlay,
  setShowAllElements,
  showAllElements,
  setIsVideoFullscreen,
  hasHeaderMenu,
  hasMediaControlOverlay,
  hasVideo,
}: ExtensionContentProps) => {
  const handleOnChangeHeaderMenu = useCallback(() => {
    setShowHeaderMenu((showElement) => !showElement);
  }, [setShowHeaderMenu]);

  const handleOnChangeMediaControlOverlay = useCallback(() => {
    setShowMediaControlOverlay((showElement) => !showElement);
  }, [setShowMediaControlOverlay]);

  const handleOnChangeAllElements = useCallback(() => {
    setShowHeaderMenu(!showAllElements);
    setShowMediaControlOverlay(!showAllElements);
    setShowAllElements((showElements) => !showElements);
  }, [
    showAllElements,
    setShowAllElements,
    setShowHeaderMenu,
    setShowMediaControlOverlay,
  ]);

  const handleVideoFullscreen = useCallback(() => {
    setIsVideoFullscreen(true);
    window.close();
  }, [setIsVideoFullscreen]);

  return (
    <section className="extension-content">
      <section className="toggle-buttons">
        <ToggleButton
          onChange={handleOnChangeHeaderMenu}
          checked={showHeaderMenu}
          disabled={!hasHeaderMenu}
        >
          Header
        </ToggleButton>

        <ToggleButton
          onChange={handleOnChangeMediaControlOverlay}
          checked={showMediaControlOverlay}
          disabled={!hasMediaControlOverlay}
        >
          Overlay
        </ToggleButton>

        <ToggleButton
          onChange={handleOnChangeAllElements}
          checked={showAllElements}
          disabled={!hasHeaderMenu && !hasMediaControlOverlay}
        >
          Toggle all elements
        </ToggleButton>
      </section>

      <Button onClick={handleVideoFullscreen} disabled={!hasVideo}>
        Fullscreen
      </Button>
    </section>
  );
};
