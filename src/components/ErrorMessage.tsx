const ErrorMessage = ({ errorText }: { errorText: string }) => {
  return (
    <div>
      <p style={{ color: 'red' }}>{errorText}</p>
    </div>
  );
};

export default ErrorMessage;
