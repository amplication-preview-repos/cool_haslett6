/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Video as PrismaVideo } from "@prisma/client";
import { CreateVideoDto } from "../CreateVideoDto";

export class VideoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VideoCountArgs, "select">): Promise<number> {
    return this.prisma.video.count(args);
  }

  async videos(args: Prisma.VideoFindManyArgs): Promise<PrismaVideo[]> {
    return this.prisma.video.findMany(args);
  }
  async video(args: Prisma.VideoFindUniqueArgs): Promise<PrismaVideo | null> {
    return this.prisma.video.findUnique(args);
  }
  async createVideo(args: Prisma.VideoCreateArgs): Promise<PrismaVideo> {
    return this.prisma.video.create(args);
  }
  async updateVideo(args: Prisma.VideoUpdateArgs): Promise<PrismaVideo> {
    return this.prisma.video.update(args);
  }
  async deleteVideo(args: Prisma.VideoDeleteArgs): Promise<PrismaVideo> {
    return this.prisma.video.delete(args);
  }
  async GetAllVideos(args: string): Promise<CreateVideoDto[]> {
    throw new Error("Not implemented");
  }
  async GetVideoById(args: string): Promise<CreateVideoDto> {
    throw new Error("Not implemented");
  }
  async UploadVideo(args: CreateVideoDto): Promise<CreateVideoDto> {
    throw new Error("Not implemented");
  }
}
