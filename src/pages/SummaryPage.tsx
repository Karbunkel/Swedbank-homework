import { Link } from 'react-router-dom';
import questions from './../FormQuestions.json';
import './../styles.css';

const SummaryPage = () => {
  const submittedAnswers: Array<any> = JSON.parse(
    localStorage.getItem('Form Answers') ?? ''
  );

  const getAnswerValue = (value: any): string => {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value;
  };

  return (
    <div className='container'>
      <h1 className='title'>Small loan application</h1>
      <p className='introList'>
        We have received all your provided information, you can review it below.
      </p>
      <div className='summaryTable'>
        <h3 className='summaryTableTitle'>Summary</h3>
        {questions.map((question, index) => {
          return (
            <div className='summaryTableRow' key={index}>
              <div className='summaryTableQuestion'>{question.name}</div>
              <div className='summaryTableAnswer'>
                {getAnswerValue(submittedAnswers[index])}
              </div>
            </div>
          );
        })}
      </div>
      <Link to='/'>
        <button className='btn'>Start again</button>
      </Link>
    </div>
  );
};

export default SummaryPage;
