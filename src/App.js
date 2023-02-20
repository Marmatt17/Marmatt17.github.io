import './App.css';
import React from 'react';
const questions = [
  {
    title: 'Сколько мне лет?',
    variants: ['20', '25', '26','такой старый, что даже и не вспомнить'],
    correct: 1,
  },
  {
    title: 'Цвет моих глаз?',
    variants: ['голубой', 'цвета глаза', 'серо-голубой', 'коричнево-зеленый'],
    correct: 3,
  },
  {
    title: 'Мое отчество?',
    variants: [
      'Алексеевич',
      'Дмитриевич',
      'Цыганович',
      'Игоревич'
    ],
    correct: 0,
  },
  {
    title: 'Мой любимый десерт?',
    variants: [
      'Морковный торт',
      'Безэ',
      'Медовик',
      'Манник'
    ],
    correct: 2,
  },
  {
    title: 'Мой любимый фильм?',
    variants: [
      'Зеленая миля',
      'Пипец-2',
      'Ла-Ла-Лэнд',
      'Друзья с привилегиями'
    ],
    correct: 2,
  },
  {
    title: 'Для чего мне нужен аскорутин?',
    variants: [
      'Для проблем со зрением',
      'Для укрепления сосудов носа, а то кровь часто идет',
      'Да просто так, ну нравится мне ширяться таблетками',
      'Это не мое, мне подсунули'
    ],
    correct: 1,
  },
  {
    title: 'Как зовут мое комнатное растение?',
    variants: [
      'Тамаки',
      'Куми',
      'Ноя',
      'Хлоя'
    ],
    correct: 1,
  },
  {
    title: 'Мой любимый вид спорта?',
    variants: [
      'Футбол',
      'Водное поло',
      'Шахматы',
      'Баскетбол'
    ],
    correct: 3,
  },
  {
    title: 'Мой любимый герой из комиксов?',
    variants: [
      'Бэтмен',
      'Человек-паук',
      'Соник',
      'Скрудж Макдак'
    ],
    correct: 1,
  },
  {
    title: 'Мой мечта стать?',
    variants: [
      'Экономистом',
      'Программистом',
      'Ботанистом',
      'Тестировщиком матрасов'
    ],
    correct: 1,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ты отгадала {correct} ответов из {questions.length}!</h2>
      < a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const persentage = Math.round ((step/questions.length * 100))
 console.log (persentage)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>{question.variants.map((text, index) =>
      <li onClick ={() => onClickVariant(index)}  key={text}>{text}
      </li>
      )}
        
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
const onClickVariant = (index) => {
  console.log(step, index);
  setStep(step+1)
  if (index === question.correct) {
    setCorrect (correct+1)
  }
}

  return (
    <div className="App">
      {
        step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
          <Result correct={correct}/>
        )}
    
    </div>
  );
}

export default App;