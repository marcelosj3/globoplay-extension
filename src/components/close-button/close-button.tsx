import { useCallback } from "react";
import "./close-button.style.css";

export const CloseButton = () => {
  const handleClosePopup = useCallback(() => {
    window.close();
  }, []);

  return (
    <>
      <button
        className="close-button"
        onClick={handleClosePopup}
        title="Close popup"
      >
        X
      </button>
      <div className="modal" />
    </>
  );
};
