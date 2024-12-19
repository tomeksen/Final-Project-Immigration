type Options = {
  id: number;
  title: string;
  link: string;
};
export const workOptions = (t: (key: string) => string): Options[] => [
  {
    id: 1,
    title: t("option1.title"),
    link: "work-permit",
  },
  {
    id: 2,
    title: t("option2.title"),
    link: "open-work-permit",
  },
  {
    id: 3,
    title: t("option3.title"),
    link: "PGWP",
  },
  {
    id: 4,
    title: t("option4.title"),
    link: "LMIA",
  },
  {
    id: 5,
    title: t("option5.title"),
    link: "SOWP",
  },
];
