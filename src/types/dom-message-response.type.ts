import { ElementInfo } from "./element-info.type";
import { VideoInfo } from "./video-info.type";

export type DOMMessage = {
  type: "GET_DOM";
  headerMenuInfo: ElementInfo;
  mediaControlOverlayInfo: ElementInfo;
  videoInfo: VideoInfo;
};
