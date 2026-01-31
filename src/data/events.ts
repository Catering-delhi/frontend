// src/data/events.ts
export type EventSlide = {
  id: string;
  titleKey: string;
  price: string;
  italicKey: string;
  bulletsKeyBase: string;
  descKey: string;
  image: string;
};

export const eventSlides: EventSlide[] = [
  {
    id: "birthday",
    titleKey: "events.items.birthday.title",
    price: "$189",
    italicKey: "events.items.birthday.italic",
    bulletsKeyBase: "events.items.birthday.bullets",
    descKey: "events.items.birthday.desc",
    image: "/assets/img/events-slider/events-slider-1.jpg",
  },
  {
    id: "private",
    titleKey: "events.items.private.title",
    price: "$290",
    italicKey: "events.items.private.italic",
    bulletsKeyBase: "events.items.private.bullets",
    descKey: "events.items.private.desc",
    image: "/assets/img/events-slider/events-slider-2.jpg",
  },
  {
    id: "custom",
    titleKey: "events.items.custom.title",
    price: "$99",
    italicKey: "events.items.custom.italic",
    bulletsKeyBase: "events.items.custom.bullets",
    descKey: "events.items.custom.desc",
    image: "/assets/img/events-slider/events-slider-3.jpg",
  },
];
