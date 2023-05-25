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
  HTML_code: string;
  CSS_code: string;
  JS_code: string;
}
