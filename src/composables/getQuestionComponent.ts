import { QuestionComponent } from "../types/QuestionComponents";

// Determine question component based on question type
export function useGetQuestionComponent() {
  const getQuestionComponent = (questionType: string): string => {
    let componentName;
    switch (questionType) {
      case "text":
        componentName = QuestionComponent.text;
        break;
      default:
        componentName = QuestionComponent.text;
        break;
    }
    return componentName;
  };

  return {
    getQuestionComponent,
  };
}
