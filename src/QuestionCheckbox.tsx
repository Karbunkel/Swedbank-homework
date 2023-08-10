const QuestionCheckbox = ({
  option,
  onAnswerChange,
  isChecked = false,
  tooltiptext,
}: {
  option: string;
  onAnswerChange: (answer: boolean) => void;
  isChecked?: boolean;
  tooltiptext: string;
}) => {
  return (
    <>
      <label className='formQuestion'>
        <input
          checked={isChecked}
          onChange={() => onAnswerChange(!isChecked)}
          className='checkbox'
          type='checkbox'
        />
        {option}
      </label>
      <div className='tooltip'>
        ?<span className='tooltiptext'>{tooltiptext}</span>
      </div>
    </>
  );
};

export default QuestionCheckbox;
