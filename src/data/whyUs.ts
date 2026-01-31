// src/data/whyUs.ts
export type WhyCard = {
  number: string;
  titleKey: string;
  descKey: string;
};

export const whyCards: WhyCard[] = [
  { number: "01", titleKey: "why.cards.1.title", descKey: "why.cards.1.desc" },
  { number: "02", titleKey: "why.cards.2.title", descKey: "why.cards.2.desc" },
  { number: "03", titleKey: "why.cards.3.title", descKey: "why.cards.3.desc" },
];
