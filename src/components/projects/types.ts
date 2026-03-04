export type ProjectItemType = {
  title: string;
  description: string;

  info?: { title?: string; description: string }[];

  skills?: {
    icon: string;
    name: string;
    iconify?: string;
  }[];

  logo?: string;
  image: string;
  link?: string;
};
