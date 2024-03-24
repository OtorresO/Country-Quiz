import { useMemo, useState } from 'react'
import { shuffleData } from './helpers/helper'
import { questions } from '../questions.json'
import { QuizInterface } from './interfaces/QuizInterface'
import CheckRoundFill from './components/icons/CheckRoundFill'
import CloseRoundFill from './components/icons/CloseRoundFill'
let quizQuestions = shuffleData(questions)
function App() {
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0)
  const [questionDisplayed, setQuestionsDisplayed] = useState<QuizInterface>(quizQuestions[indexCurrentQuestion])
  const [questionsAnswered, setQuestionsAnswered] = useState<Array<{ id: number, isCorrect: boolean, answer?: string }>>([])

  const changeQuestion = (index: number) => {
    setIndexCurrentQuestion(index)
    setQuestionsDisplayed(quizQuestions[index])
  }
  const verifyAnswer = (option: string, questionId: number) => {
    if (questionsAnswered.find(e => e.id === questionId)) return
    const question = questions.find(question => question.id === questionId);

    if (option === question!.answer) {
      setQuestionsAnswered([...questionsAnswered, {
        id: questionId,
        isCorrect: true
      }])

    } else {
      setQuestionsAnswered([...questionsAnswered, {
        id: questionId,
        isCorrect: false,
        answer: option
      }])
    }

  }

  const ContentButton = ({ text, state = 0 }: { text: string, state?: number }) => {

    const content = text;

    if (state === 1) return <><span>{content}</span> <CheckRoundFill /></>
    if (state === 2) return <><span>{content}</span> <CloseRoundFill /></>

    return <>{content}</>

  }

  const QuizButtons = () => {
    return quizQuestions.map((e, index) => {
      const s = questionsAnswered.find(q => q.id === e.id)
      return <button onClick={() => changeQuestion(index)}
        key={e.id}
        className={`w-8 h-8 rounded-full text-[#E2E4F3]  ${index === indexCurrentQuestion || s
          ? 'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]' : 'bg-[#393F6E]'}`}

      >{index + 1}</button>
    })
  }


  const questionAnswered = useMemo(() => {
    return questionsAnswered.find(e => e.id === questionDisplayed.id)
  }, [questionDisplayed, questionsAnswered])


  const results = useMemo(() => {
    let corrects = 0
    let wrongs = 0
    questionsAnswered.forEach(e => {
      if (e.isCorrect) corrects++
      else wrongs++


    })
    return { corrects, wrongs }
  }, [questionsAnswered])

  const resetQuiz = () => {
    setIndexCurrentQuestion(0);
    setQuestionsAnswered([] as Array<{ id: number, isCorrect: boolean, answer?: string }>)
    quizQuestions = shuffleData(questions)
    setQuestionsDisplayed(quizQuestions[0])
  }

  return (
    quizQuestions.length===questionsAnswered.length?
      <div className='my-28 flex items-center flex-col bg-[#343964] py-12 px-10 rounded-lg text-[#E2E4F3] w-[30%]'>
        <img src="./congrats.png" alt="Congratulations illustration" />
        <h1 className='text-2xl font-medium mt-4 text-center'>Congrats! You completed the quiz.</h1>
        <p className='text-base font-medium mt-4'>You answer {results.corrects}/{quizQuestions.length} correctly.</p>
        <button className='mt-6 flex font-semibold items-center justify-center gap-3 text-base py-5 px-20 rounded-xl bg-gradient-to-r from-[#E65895] to-[#BC6BE8] text-[#E2E4F3] '
          onClick={resetQuiz}
        >Play again</button>
      </div>
      : <div className='my-28 flex items-center flex-col bg-[#343964] pt-10 pb-20 px-24 rounded-lg '>
        <h1 className='text-xs font-extrabold text-[#8B8EAB]'>Country Quiz</h1>
        <div className='flex flex-wrap gap-3 text-sm font-bold mt-3'>
          <QuizButtons />
        </div>
        <div className='mt-6 font-bold text-[#E2E4F3] text-xl'>
          <p>
            {
              questionDisplayed.question
            }
          </p>
          <section className='mt-6 grid grid-cols-2 gap-5'>
            {
              questionDisplayed.options.map(option => {
                const state = questionAnswered ? (option === questionDisplayed.answer ? 1 :
                  !questionAnswered.isCorrect && questionAnswered.answer === option ? 2 : 0) : 0

                return <button key={'option' + option}
                  onClick={() => verifyAnswer(option, questionDisplayed.id)}
                  className='flex font-semibold items-center justify-center gap-3 text-base p-5 bg-[#393F6E] rounded-xl hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'
                >
                  <ContentButton text={option}
                    state={state}
                  />
                </button>
              })

            }

          </section>


        </div>

      </div>
  )
}

export default App
