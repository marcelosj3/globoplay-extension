import { ElementInfo } from "./element-info.type";

export type DOMMessage = {
  type: "GET_DOM";
  headerMenuInfo: ElementInfo;
  mediaControlOverlayInfo: ElementInfo;
};
