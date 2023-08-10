const QuestionTextArea = ({
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
        className='textArea'
        type='text'
        onChange={(e) => onAnswerChange(e.target.value)}
        required
      />
    </>
  );
};

export default QuestionTextArea;
