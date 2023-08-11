const QuestionTextArea = ({
  value = '',
  onAnswerChange,
}: {
  value: string;
  onAnswerChange: (answer: string) => void;
}) => {
  return (
    <>
      <textarea
        value={value}
        className='textArea'
        onChange={(e) => onAnswerChange(e.target.value)}
        cols={50}
        maxLength={500}
      />
    </>
  );
};

export default QuestionTextArea;
