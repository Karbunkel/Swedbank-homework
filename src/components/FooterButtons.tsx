interface FooterButtonsProps {
  questionToShow: number;
  questionsLength: number;
  nextClickListener: () => void;
  backClickListener: () => void;
  submitClickListener: any;
}

const FooterButtons = ({
  questionToShow,
  questionsLength,
  nextClickListener,
  backClickListener,
  submitClickListener,
}: FooterButtonsProps) => {
  const isLastQuestion = () => {
    return questionToShow === questionsLength - 1;
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
        <button className='btn nextBtn' onClick={submitClickListener}>
          Submit
        </button>
      ) : (
        <button className='btn nextBtn' onClick={nextClickListener}>
          Next
        </button>
      )}
    </div>
  );
};

export default FooterButtons;
