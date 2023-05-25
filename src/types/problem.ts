export interface Problem {
  id: number;
  title: string;
  uploader: string;
  bookmarkCount: number;
  likeCount: number;
  dislikeCount: number;
  successRate: number;
  tags: string[];
  isHtml: boolean;
  isCss: boolean;
  isJs: boolean;
  detailInfo: ProblemDetailInformation;
}

export interface ProblemDetailInformation {
  title: string;
  description: string;
  htmlCode: string;
  csCode: string;
  jsCode: string;
}
