import { useNavigate } from 'react-router-dom';
import './../styles.css';

const TitlePage = () => {
  const navigate = useNavigate();

  const onFillApplicationClicked = () => {
    localStorage.setItem('Form Answers', '');
    navigate('/form');
  };
  return (
    <div className='container'>
      <h1 className='title'>Small loan application</h1>
      <h1 className='introQuestion'>Need more money for bigger purchases?</h1>
      <ul className='introList'>
        <li>Loan from €300 to €20 000.</li>
        <li>No monthly service fees.</li>
        <li>Option for early repayment of loan without any additional fees.</li>
        <li>Interest rate from 9,9%.</li>
      </ul>
      <button className='btn' onClick={onFillApplicationClicked}>
        Fill in application
      </button>
    </div>
  );
};

export default TitlePage;
