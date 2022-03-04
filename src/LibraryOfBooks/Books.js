import recomendImg1 from "../assets/images/recomendImg1.png";
import recomendImg2 from "../assets/images/recomendImg2.png";
import recomendImg3 from "../assets/images/recomendImg3.png";
import recomendImg4 from "../assets/images/recomendImg4.png";
import recomendImg5 from "../assets/images/recomendImg5.png";

import xitsImg1 from "../assets/images/xitsImg1.png";
import xitsImg2 from "../assets/images/xitsImg2.png";
import xitsImg3 from "../assets/images/recomendImg3.png";
import xitsImg4 from "../assets/images/recomendImg4.png";
import xitsImg5 from "../assets/images/recomendImg2.png";

export const books = [
  {
    id: "1",
    author: "Мария Метлицкая",
    img: recomendImg1,
    title: "Цветы и птицы",
    price: "1 222 230 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "2",
    author: "Макс Глебов",
    img: recomendImg2,
    title: "Асиметричный",
    price: "1 222 230 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "3",
    author: "Татьяна Устинова",
    img: recomendImg3,
    title: "Пляжный детектив",
    price: "1 222 230 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "4",
    author: "Эрика Адамс",
    img: recomendImg4,
    title: "Похищенная для монстра",
    price: "1 222 230 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "5",
    author: "Анастасия Маркова",
    img: recomendImg5,
    title: "Черная вдова ищет мужа",
    price: "1 230 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "6",
    author: "Татьяна Устинова",
    img: recomendImg3,
    title: "Пляжный детектив",
    price: "1 222 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "7",
    author: "Макс Глебов",
    img: recomendImg2,
    title: "Асиметричный",
    price: "14 479 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "9",
    author: "Эрика Адамс",
    img: recomendImg4,
    title: "Похищенная для монстра",
    price: "1 222 230 UZS",
    category: "recomendation",
    saved: false,
  },
  {
    id: "10",
    author: "Марк Мэнсон",
    title: "Тонкое искусство пофигизма",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    img: xitsImg1,
    price: "11 230 UZS",
    category: "xits",
    saved: false,
  },
  {
    id: "11",
    author: "Андрей Курпатов",
    title: "Красная таблетка. Посмотри правде в глаза!",
    description:
      "Книга простым языком объясняет читателю, каким образом работает человеческий мозг. Без сложной терминологии автор говорит о самой природе сознания – емко, просто и с долей юмора. ",
    img: xitsImg2,
    price: "11 230 UZS",
    category: "xits",
    saved: false,
  },
  {
    id: "12",
    author: "Татьяна Устинова",
    title: "Пляжный детектив",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    img: xitsImg3,
    price: "11 230 UZS",
    category: "xits",
    saved: false,
  },
  {
    id: "13",
    author: "Эрика Адамс",
    title: "Похищенная для монстра",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    img: xitsImg4,
    price: "11 230 UZS",
    category: "xits",
    saved: false,
  },
  {
    id: "14",
    author: "Марк Мэнсон",
    title: "Тонкое искусство пофигизма",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    img: xitsImg5,
    price: "11 230 UZS",
    category: "xits",
    saved: false,
  },
];

export function getBooks() {
  return books;
}
