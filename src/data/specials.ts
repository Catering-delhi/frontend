// src/data/specials.ts
export type Special = {
  id: string;
  tabKey: string;
  titleKey: string;
  italicKey: string;
  descKey: string;
  image: string;
};

export const specials: Special[] = [
  {
    id: "specials-tab-1",
    tabKey: "specials.tabs.1",
    titleKey: "specials.items.1.title",
    italicKey: "specials.items.1.italic",
    descKey: "specials.items.1.desc",
    image: "/assets/img/specials-1.png",
  },
  {
    id: "specials-tab-2",
    tabKey: "specials.tabs.2",
    titleKey: "specials.items.2.title",
    italicKey: "specials.items.2.italic",
    descKey: "specials.items.2.desc",
    image: "/assets/img/specials-2.png",
  },
  {
    id: "specials-tab-3",
    tabKey: "specials.tabs.3",
    titleKey: "specials.items.3.title",
    italicKey: "specials.items.3.italic",
    descKey: "specials.items.3.desc",
    image: "/assets/img/specials-3.png",
  },
  {
    id: "specials-tab-4",
    tabKey: "specials.tabs.4",
    titleKey: "specials.items.4.title",
    italicKey: "specials.items.4.italic",
    descKey: "specials.items.4.desc",
    image: "/assets/img/specials-4.png",
  },
  {
    id: "specials-tab-5",
    tabKey: "specials.tabs.5",
    titleKey: "specials.items.5.title",
    italicKey: "specials.items.5.italic",
    descKey: "specials.items.5.desc",
    image: "/assets/img/specials-5.png",
  },
];
