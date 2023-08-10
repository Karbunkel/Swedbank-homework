import { Link } from 'react-router-dom';
import questions from './../FormQuestions.json';

const SummaryPage = () => {
  const submittedAnswers: Array<any> = JSON.parse(
    localStorage.getItem('Form Answers') ?? ''
  );

  return (
    <div>
      <h1 className='title'>Small loan application</h1>
      <p className='introList'>
        We have received all your provided information, you can review it below.
      </p>
      <div className='summaryTable'>
        {' '}
        <h3>Summary</h3>
        {questions.map((question, index) => {
          return (
            <div>
              {question.name}
              <div>{submittedAnswers[index]}</div>
            </div>
          );
        })}
      </div>
      <Link to='/landing'>
        <button className='btn'>Start again</button>
      </Link>
    </div>
  );
};

export default SummaryPage;
