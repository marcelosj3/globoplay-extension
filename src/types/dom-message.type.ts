import { ElementInfo } from "./element-info.type";
import { VideoInfo } from "./video-info.type";

export type DOMMessageResponse = {
  isGloboplayUrl: boolean;
  headerMenu: ElementInfo;
  mediaControlOverlay: ElementInfo;
  video: VideoInfo & ElementInfo;
};
