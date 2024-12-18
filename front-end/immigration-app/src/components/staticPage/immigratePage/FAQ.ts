type FAQ = {
  id: string;
  title: string;
  description: string;
};

export const FAQ = (t: (key: string) => string): FAQ[] => [
  {
    id: "1",
    title: t("questions.question1.title"),
    description: t("questions.question1.answer"),
  },
  {
    id: "2",
    title: t("questions.question2.title"),
    description: t("questions.question2.answer"),
  },
  {
    id: "3",
    title: t("questions.question3.title"),
    description: t("questions.question3.answer"),
  },
  {
    id: "4",
    title: t("questions.question4.title"),
    description: t("questions.question4.answer"),
  },
  {
    id: "5",
    title: t("questions.question5.title"),
    description: t("questions.question5.answer"),
  },
];
