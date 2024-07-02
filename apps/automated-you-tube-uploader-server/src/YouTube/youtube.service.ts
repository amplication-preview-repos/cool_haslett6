import { Injectable } from "@nestjs/common";
import { CreateVideoDto } from "../video/CreateVideoDto";

@Injectable()
export class YouTubeService {
  constructor() {}
  async UploadVideoToYouTube(args: CreateVideoDto): Promise<CreateVideoDto> {
    throw new Error("Not implemented");
  }
}
