interface FooterButtonsProps {
  questionToShow: number;
  questionsLength: number;
  nextClickListener: () => void;
  backClickListener: () => void;
  submitClickListener: any;
  isCurrentQuestionAnswered: boolean;
}

const FooterButtons = ({
  questionToShow,
  questionsLength,
  nextClickListener,
  backClickListener,
  submitClickListener,
  isCurrentQuestionAnswered,
}: FooterButtonsProps) => {
  const isLastQuestion = () => {
    return questionToShow === questionsLength - 1;
  };

  const handleNextClick = () => {
    if (!isCurrentQuestionAnswered) {
      alert('Please answer the question before proceeding.');
      return;
    }

    nextClickListener();
  };

  return (
    <div className='buttonFooterRow'>
      {questionToShow !== 0 ? (
        <button className='btn backBtn' onClick={backClickListener}>
          Back
        </button>
      ) : (
        ''
      )}
      {isLastQuestion() ? (
        <button
          className='btn nextBtn'
          onClick={submitClickListener}
          disabled={!isCurrentQuestionAnswered}
        >
          Submit
        </button>
      ) : (
        <button
          className='btn nextBtn'
          onClick={handleNextClick}
          //disabled={!isCurrentQuestionAnswered}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default FooterButtons;
