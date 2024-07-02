import { Module } from "@nestjs/common";
import { YouTubeService } from "./youtube.service";
import { YouTubeController } from "./youtube.controller";
import { YouTubeResolver } from "./youtube.resolver";

@Module({
  controllers: [YouTubeController],
  providers: [YouTubeService, YouTubeResolver],
  exports: [YouTubeService],
})
export class YouTubeModule {}
