export const initials = (text: string): string => {
    const splitText = text.split(" ");
    const wordOne = splitText[0];
    const wordTwo = splitText.reverse()[0];
    return wordOne[0] + wordTwo[0];
  };
  