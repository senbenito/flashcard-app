export async function getHerokuDecks() {
  const response = await fetch('http://localhost:6969/decks');
  // const response = await fetch('https://senbenito-server.herokuapp.com/decks');
  let data = await response.json();
  return data;
}

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
