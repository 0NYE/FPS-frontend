export interface LighthouseReport {
  audits: {
    [K: string]: Audit;
  };
  categories: {
    performance?: Category;
    accessibility?: Category;
    "best-practices"?: Category;
    seo?: Category;
  };
}

interface Audit {
  id: string;
  title: string;
  description: string;
  score: number | null;
  scoreDisplayMode: AuditScoreDisplayMode;
  details?: AuditDetail;
}

type AuditScoreDisplayMode = "binary" | "informative" | "notApplicable";

interface AuditDetail {
  type: AuditDetailType;
  headings: AuditDetailHeading[];
  items: AuditDetailItems[];
}

type AuditDetailType = "table";

interface AuditDetailHeading {
  key: string;
  valueType: string;
  label: string;
}

interface AuditDetailItems {
  snippet: string;
  nodeLabel: string;
}

interface Category {
  id: string;
  title: string;
  score: number;
  description: string;
  manualDescription?: string;
  auditRefs: AuditRef[];
}

interface AuditRef {
  id: string;
  weight: number;
  group: string;
}
