import * as graphql from "@nestjs/graphql";
import { CreateVideoDto } from "../video/CreateVideoDto";
import { YouTubeService } from "./youtube.service";

export class YouTubeResolver {
  constructor(protected readonly service: YouTubeService) {}

  @graphql.Mutation(() => CreateVideoDto)
  async UploadVideoToYouTube(
    @graphql.Args()
    args: CreateVideoDto
  ): Promise<CreateVideoDto> {
    return this.service.UploadVideoToYouTube(args);
  }
}
