const initialData = {
  Addition: {
    title: 'Addition',
    questions: [
      {
        question: '4 + 5',
        answer: 9
      },
      {
        question: '6 + 2',
        answer: 8
      }
    ]
  },
  Subtraction: {
    title: 'Subtraction',
    questions: [
      {
        question: '9 - 5',
        answer: 4
      },
      {
        question: '8 - 2',
        answer: 6
      }
    ]
  }
};

export const getData = () => {
  return initialData;
};

export function saveDeckTitle(title){
  return fetch('https://senbenito-server.herokuapp.com/decks', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  });
}
