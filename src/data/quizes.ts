// Dummy data

import { quizType } from "./types";

const quizes: Array<quizType> = [
  {
    id: 1,
    name: "Capitols in europe",
    description: "q",
    questions: [
      {
        number: 1,
        heading: "What is the capitol of France",
        alternatives: [
          {
            text: "Paris",
          },
          {
            text: "Prague",
          },
          {
            text: "Madrid"
          }
        ],
        correct: 0,
      },
      {
        number: 2,
        heading: "What is the capitol of Croatia?",
        alternatives: [
          { text: "Prague" },
          { text: "Sarajevo" },
          { text: "Stockholm" },
        ],
        correct: 1,
      },
      {
        number: 3,
        heading: "What is the capitol of Denmark?",
        alternatives: [
          { text: "Copenhagen", },
          { text: "Stockholm", },
          { text: "Oslo" },
        ],
        correct: 0,
      },
    ],
  }
];
export default quizes;