import { useEffect, useState } from 'react';
import QuestionTextArea from '../QuestionTextArea';
import QuestionRadio from '../QuestionRadio';
import QuestionCheckbox from '../QuestionCheckbox';
import FooterButtons from '../FooterButtons';
import QuestionSelect from '../QuestionSelect';
import { useNavigate } from 'react-router-dom';
import questions from './../FormQuestions.json';
import Alert from '../Alert';

const FormPage = () => {
  const [formAnswers, setFormAnswers] = useState<
    Array<string | boolean | undefined>
  >(() => {
    const localValue = localStorage.getItem('Form Answers');
    if (!localValue) return [];
    return JSON.parse(localValue!);
  });

  const [questionToShow, setQuestionToShow] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const currentQuestion = questions[questionToShow];
  const navigate = useNavigate();

  const onAnswerChange = (answer: any) => {
    if (questionToShow + 1 > formAnswers.length) {
      setFormAnswers([...formAnswers, answer]);
    } else
      setFormAnswers(
        formAnswers.map((currentAnswer, index) => {
          if (index === questionToShow) {
            return answer;
          }
          return currentAnswer;
        })
      );
  };

  useEffect(() => {
    localStorage.setItem('Form Answers', JSON.stringify(formAnswers));
  }, [formAnswers]);

  const isCurrentQuestionAnswered = !!formAnswers[questionToShow];
  const isError = !isCurrentQuestionAnswered;

  const handleNextClick = () => {
    if (isError) {
      setShowAlert(true);
      return;
    }
    setQuestionToShow(questionToShow + 1);
  };

  const handleBackClick = () => {
    setQuestionToShow(questionToShow - 1);
  };

  const handleSubmitClick = () => {
    navigate('/summary');
  };

  const handleSelect = (value: string) => {
    onAnswerChange(value);
  };

  console.log('error', showAlert);

  return (
    <div className='container'>
      <h1 className='title'>Small loan application</h1>
      <p>All questions are mandatory to answer</p>
      <h3 className='formQuestion'>{currentQuestion.name}</h3>
      {currentQuestion.type === 'text' ? (
        <QuestionTextArea
          onAnswerChange={onAnswerChange}
          value={formAnswers[questionToShow] as string}
        />
      ) : currentQuestion.type === 'radio' ? (
        <QuestionRadio
          onAnswerChange={onAnswerChange}
          values={currentQuestion.options as Array<string>}
        />
      ) : currentQuestion.type === 'select' ? (
        <QuestionSelect
          options={currentQuestion.options as Array<string>}
          onSelect={handleSelect}
          tooltiptext={currentQuestion.tooltiptext as string}
        />
      ) : currentQuestion.type === 'checkbox' ? (
        <QuestionCheckbox
          isChecked={formAnswers[questionToShow] as boolean}
          onAnswerChange={onAnswerChange}
          option={currentQuestion.options as string}
          tooltiptext={currentQuestion.tooltiptext as string}
        />
      ) : null}
      {showAlert == true ? <Alert /> : ''}

      <FooterButtons
        questionToShow={questionToShow}
        questionsLength={questions.length}
        nextClickListener={handleNextClick}
        backClickListener={handleBackClick}
        submitClickListener={handleSubmitClick}
        isCurrentQuestionAnswered={isCurrentQuestionAnswered}
      />
    </div>
  );
};

export default FormPage;
