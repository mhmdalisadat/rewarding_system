import { Qa } from "../types";

export const Qas: Qa[] = [
  {
    question: "شمش طلا در کدام بورس معامله میشود؟",
    answer: [
      { content: "بورس کالا", correct: true },
      { content: "بورس اوراق", correct: false },
      { content: "صندوق ها ", correct: false },
    ],
  },
  
  {
    question: "ساعت کاری بازار سهام چه موقع است؟",
    answer: [
      { content: "7_10", correct: false },
      { content: "8:45_12:30", correct: true },
      { content: "11:30 _15", correct: false },
    ],
  },

  {
    question: "صندوق خاتم جزء کدام نوع صندوق است ؟",
    answer: [
      { content: "درآمد ثابت", correct: true },
      { content: "سهامی", correct: false },
      { content: "مختلط", correct: false },
    ],
  },

  {
    question: "صندوق ترمه جزء کدام نوع صندوق است ؟",
    answer: [
      { content: "درآمد ثابت", correct: false },
      { content: "مختلط", correct: false },
      { content: "سهامی", correct: true },
    ],
  },

  {
    question: "سبد گردانی اختصاصی به چه معناست ؟",
    answer: [
      { content: "گردش حساب", correct: false },
      { content: "خرید سهام ", correct: false },
      { content: "مدیریت دارایی ها ", correct: true },
    ],
  },

  {
    question: "نقل و انتقال سهام توسط کدام یک از گزینه های زیر انجام میشود ؟",
    answer: [
      { content: "شرکت سپرده گذاری و تسویه وجه ", correct: true },
      { content: "بورس اوراق بهادار", correct: false },
      { content: "کار گزاری ایساتیس پویا ", correct: false },
    ],
  },

  {
    question: "با کدام یک از ابزار های مالی زیر میتوان سهام را بیمه نمود ؟",
    answer: [
      { content: "اختیار معامله ", correct: true },
      { content: "صندوق سرمایه گزاری", correct: false },
      { content: "شمش طلا ", correct: false },
    ],
  },

  {
    question: "نماد معاملاتی شرکت بیمه زندگی ایساتیس پویا چیست ؟",
    answer: [
      { content: "بیسا", correct: false },
      { content: "بتسا", correct: false },
      { content: "بتیس", correct: true },
    ],
  },

  {
    question: "نماد معاملاتی شرکت سرمایه گزاری ایساتیس پویا چیست ؟",
    answer: [
      { content: "ویسا", correct: true },
      { content: "واتیس", correct: false },
      { content: "پویا", correct: false },
    ],
  },

  {
    question: "نماد معاملاتی شرکت پست پیشگامان باد پا چیست ؟",
    answer: [
      { content: "بازرگان", correct: false },
      { content: "وپست", correct: false },
      { content: "بازرگام", correct: true },
    ],
  },

  {
    question: "کدام یک از نماد های زیر بدون ریسک میباشد ؟",
    answer: [
      { content: "ویسا", correct: false },
      { content: "خاتم", correct: true },
      { content: "ترمه", correct: false },
    ],
  },

  {
    question: "گروه پیشگامان کویر یزد جزو کدام نوع از شرکت ها میباشد ؟",
    answer: [
      { content: "سهامی عام", correct: false },
      { content: "تعاونی عام", correct: false },
      { content: "تعاونی", correct: true },
    ],
  },

  {
    question: "روز های کاری بورس چه روز هایی است ؟",
    answer: [
      { content: "شنبه تا پنجشنبه", correct: false },
      { content: "شنبه تا چهارشنبه", correct: true },
      { content: "یکشنبه تا پنجشنبه", correct: false },
    ],
  },
];
