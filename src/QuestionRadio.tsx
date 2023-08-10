const QuestionRadio = ({
  values,
  onAnswerChange,
}: {
  values: Array<string>;
  onAnswerChange: (answer: string) => void;
}) => {
  return (
    <>
      {values.map((value) => {
        return (
          <form>
            <label className='formQuestion' key={value}>
              <input
                type='radio'
                name='otherResp'
                value={value}
                onChange={(e) => onAnswerChange(e.target.value)}
                required
              />
              {value}
            </label>
          </form>
        );
      })}
    </>
  );
};

export default QuestionRadio;
