// Dummy data
import { Quiz } from "../types/Quiz";

const quizes: Quiz[] = [
  {
    id: 1,
    name: "Capitols in europe",
    description: "q",
    questions: [
      {
        number: 1,
        heading: "What is the capitol of France",
        type: "text",
        alternatives: [
          {
            id: 1,
            content: "Paris",
            correct: true,
          },
          {
            id: 2,
            content: "Prague",
            correct: false,
          },
          {
            id: 3,
            content: "Madrid",
            correct: false,
          },
        ],
        answeredAlternative: undefined,
      },
      {
        number: 2,
        heading: "What is the capitol of Croatia?",
        type: "text",
        alternatives: [
          {
            id: 1,
            content: "Prague",
            correct: false,
          },
          {
            id: 2,
            content: "Zagreb",
            correct: true,
          },
          {
            id: 3,
            content: "Stockholm",
            correct: false,
          },
        ],
        answeredAlternative: undefined,
      },
      {
        number: 3,
        heading: "What is the capitol of Denmark?",
        type: "text",
        alternatives: [
          {
            id: 1,
            content: "Copenhagen",
            correct: true,
          },
          {
            id: 2,
            content: "Stockholm",
            correct: false,
          },
          {
            id: 3,
            content: "Oslo",
            correct: false,
          },
        ],
        answeredAlternative: undefined,
      },
    ],
  },
];
export default quizes;