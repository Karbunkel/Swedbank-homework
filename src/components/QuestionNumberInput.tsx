const QuestionNumberInput = ({
  value = '',
  onAnswerChange,
}: {
  value: string;
  onAnswerChange: (answer: string) => void;
}) => {
  return (
    <>
      <input
        value={value}
        className='numberInput'
        type='number'
        onChange={(e) => onAnswerChange(e.target.value)}
      />
    </>
  );
};

export default QuestionNumberInput;
