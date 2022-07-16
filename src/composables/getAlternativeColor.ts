// Determine coloring of alternative container
export function useGetAlternativeColor() {
  const getAlternativeColor = (
    alternativeIndex: number,
    alternativeCorrect: boolean,
    answeredAlternative: number
  ): string => {

    if(alternativeIndex === null) return '';
    
    let correctCheck = alternativeCorrect === true;
    
    // Return single qoute to be compiled properly inside v-bind :class=""
    if((correctCheck && answeredAlternative === alternativeIndex) || correctCheck === true) {
        return 'right-question';
    } else if(alternativeIndex === answeredAlternative) {
        return 'wrong-question';
    } else {
        return '';
    }
  };

  return {
    getAlternativeColor,
  };
}
