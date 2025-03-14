export type Project = {
  name: string;
  company: string;
  year: number;
  role: string;
  platforms: string;
  stack: string;
  description: string;
  thumbAspectRatio?: number;
  thumbImgUrl: string;
  thumbVideoUrl: string | null;
  thumbGifUrl: string | null;
  behanceUrl: string | null;
  videoUrl: string | null;
  githubUrl: string | null;
  liveDemoUrl: string | null;
}