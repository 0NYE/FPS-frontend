import { LighthouseReport } from "@/types/lighthouse";

export const lighthouseReportToMetricScoreMap = (report: LighthouseReport) => {
  return Object.keys(report.categories).reduce((object, category) => {
    const categoryInfo =
      report.categories[category as keyof typeof report.categories];
    if (!categoryInfo) return object;

    object[categoryInfo.title] = categoryInfo.score * 100;
    return object;
  }, {} as { [K: string]: number });
};
