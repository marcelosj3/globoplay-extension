import { ElementInfo } from "./element-info.type";

export type DOMMessageResponse = {
  isGloboplayUrl: boolean;
  headerMenu?: ElementInfo;
  mediaControlOverlay?: ElementInfo;
};
