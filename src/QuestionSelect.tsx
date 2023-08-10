const QuestionSelect = ({
  options,
  onSelect,
  tooltiptext,
  selectedValue,
}: {
  options: Array<string>;
  onSelect: (e: string) => void;
  tooltiptext: string;
  selectedValue: string;
}) => {
  return (
    <div>
      <select
        className='select'
        onChange={(e) => onSelect(e.target.value)}
        value={selectedValue}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='tooltip'>
        ?<span className='tooltiptext'>{tooltiptext}</span>
      </div>
    </div>
  );
};

export default QuestionSelect;
