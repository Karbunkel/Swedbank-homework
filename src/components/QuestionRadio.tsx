const QuestionRadio = ({
  values,
  onAnswerChange,
  selectedValue,
}: {
  values: Array<string>;
  onAnswerChange: (answer: string) => void;
  selectedValue: string;
}) => {
  return (
    <>
      {values.map((value) => {
        return (
          <label className='formQuestion radioOption' key={value}>
            <input
              type='radio'
              name='otherResp'
              value={value}
              checked={selectedValue === value}
              onChange={(e) => onAnswerChange(e.target.value)}
            />
            {value}
          </label>
        );
      })}
    </>
  );
};

export default QuestionRadio;
