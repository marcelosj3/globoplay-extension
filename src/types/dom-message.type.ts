import { VideoInfo } from "./video-info.type";

export type DOMMessageResponse = {
  isGloboplayUrl: boolean;
  video: VideoInfo;
};
