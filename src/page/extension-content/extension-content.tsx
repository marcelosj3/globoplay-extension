import React, { useCallback } from "react";
import { Button } from "../../components/button/button";
import { ToggleButton } from "../../components/toggle-button/toggle-button";

interface ExtensionContentProps {
  setIsGloboplayUrl: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHeaderMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showHeaderMenu: boolean;
  setShowMediaControlOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  showMediaControlOverlay: boolean;
  setShowAllElements: React.Dispatch<React.SetStateAction<boolean>>;
  showAllElements: boolean;
  setIsVideoFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExtensionContent = ({
  setShowHeaderMenu,
  showHeaderMenu,
  setShowMediaControlOverlay,
  showMediaControlOverlay,
  setShowAllElements,
  showAllElements,
  setIsVideoFullscreen,
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
    <section className="extension">
      <ToggleButton
        onChange={handleOnChangeHeaderMenu}
        checked={showHeaderMenu}
      >
        Header
      </ToggleButton>

      <ToggleButton
        onChange={handleOnChangeMediaControlOverlay}
        checked={showMediaControlOverlay}
      >
        Overlay
      </ToggleButton>

      <ToggleButton
        onChange={handleOnChangeAllElements}
        checked={showAllElements}
      >
        Toggle all elements
      </ToggleButton>

      <Button onClick={handleVideoFullscreen}>Fullscreen</Button>
    </section>
  );
};
