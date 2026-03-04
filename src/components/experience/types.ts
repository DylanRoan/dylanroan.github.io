export type ExperienceItem = {
  title: string;
  sub: string;

  company: string;
  description: string | string[];

  logo?: string;
  link?: string;

  startDate: string;
  endDate?: string;

  ongoing: boolean;
};
