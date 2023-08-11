import { useEffect, useState } from 'react';
import QuestionTextArea from '../components/QuestionTextArea';
import QuestionRadio from '../components/QuestionRadio';
import QuestionCheckbox from '../components/QuestionCheckbox';
import FooterButtons from '../components/FooterButtons';
import QuestionSelect from '../components/QuestionSelect';
import { useNavigate } from 'react-router-dom';
import questions from './../FormQuestions.json';
import ErrorMessage from '../components/ErrorMessage';
import QuestionNumberInput from '../components/QuestionNumberInput';
import './../styles.css';

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
    setShowAlert(false);
  };

  const handleBackClick = () => {
    setQuestionToShow(questionToShow - 1);
  };

  const handleSubmitClick = () => {
    if (isError) {
      setShowAlert(true);
      return;
    }
    navigate('/summary');
  };

  const handleSelect = (value: string) => {
    onAnswerChange(value);
  };

  return (
    <div className='container'>
      <h1 className='title'>Small loan application</h1>
      <p>All questions are mandatory to answer</p>
      <h3 className='formQuestion'>{currentQuestion.name}</h3>
      {currentQuestion.type === 'number' ? (
        <QuestionNumberInput
          onAnswerChange={onAnswerChange}
          value={formAnswers[questionToShow] as string}
        />
      ) : currentQuestion.type === 'text' ? (
        <QuestionTextArea
          onAnswerChange={onAnswerChange}
          value={formAnswers[questionToShow] as string}
        />
      ) : currentQuestion.type === 'radio' ? (
        <QuestionRadio
          onAnswerChange={onAnswerChange}
          values={currentQuestion.options as Array<string>}
          selectedValue={formAnswers[questionToShow] as string}
        />
      ) : currentQuestion.type === 'select' ? (
        <QuestionSelect
          options={currentQuestion.options as Array<string>}
          onSelect={handleSelect}
          selectedValue={formAnswers[questionToShow] as string}
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
      {showAlert ? (
        <ErrorMessage errorText='Please answer the question before procceeding' />
      ) : (
        ''
      )}

      <FooterButtons
        questionToShow={questionToShow}
        questionsLength={questions.length}
        nextClickListener={handleNextClick}
        backClickListener={handleBackClick}
        submitClickListener={handleSubmitClick}
      />
    </div>
  );
};

export default FormPage;
