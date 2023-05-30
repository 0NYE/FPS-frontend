import { LighthouseReport } from "@/types/lighthouse";

export interface Problem {
  id: number;
  title: string;
  uploader: string;
  bookmarkCount: number;
  likeCount: number;
  dislikeCount: number;
  successRate: number;
  tags: string[];
  isHTML: boolean;
  isCSS: boolean;
  isJS: boolean;
  detailInfo?: ProblemDetailInformation;
}

export interface ProblemDetailInformation {
  title: string;
  description: string;
  HTML_code: string;
  CSS_code: string;
  JS_code: string;
}

export interface ProblemSubmitApiResult {
  success: boolean;
  report: string;
}

export interface ProblemSubmitResult {
  problem_id: string;
  user_id: string;
  HTML_code: string;
  CSS_code: string;
  JS_code: string;
  submission_date: string;
  success: boolean;
  fail_reason: string;
  similarity: number;
  diff_image_url: string;
  report_url: string;
  lighthouse_report: string;
  parsedLighthouseReport?: LighthouseReport;
}
