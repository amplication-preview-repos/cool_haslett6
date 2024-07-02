import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { YouTubeService } from "./youtube.service";
import { CreateVideoDto } from "../video/CreateVideoDto";

@swagger.ApiTags("youTubes")
@common.Controller("youTubes")
export class YouTubeController {
  constructor(protected readonly service: YouTubeService) {}

  @common.Post("/youtube/upload")
  @swagger.ApiOkResponse({
    type: CreateVideoDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadVideoToYouTube(
    @common.Body()
    body: CreateVideoDto
  ): Promise<CreateVideoDto> {
        return this.service.UploadVideoToYouTube(body);
      }
}
