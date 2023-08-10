const QuestionCheckbox = ({
  option,
  onAnswerChange,
  isChecked = false,
  tooltiptext,
}: {
  option: string;
  onAnswerChange: (answer: string) => void;
  isChecked?: boolean;
  tooltiptext: string;
}) => {
  return (
    <>
      <label className='formQuestion'>
        <input
          checked={isChecked}
          onChange={(e) => onAnswerChange(e.target.value)}
          className='checkbox'
          type='checkbox'
          required
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
