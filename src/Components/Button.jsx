export default function Button({ text, disabled, onClick }) {
  const buttonStyle = {
    fontSize: '18px',
    padding: '15px 25px',
    color: 'white',
    backgroundColor: '#2196F3',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outline: 'none',
    margin: '20px',
  };

  const disabledButtonStyle = {
    fontSize: '18px',
    padding: '15px 25px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outline: 'none',
    margin: '20px',
  };

  return disabled === true ? (
    <button style={disabledButtonStyle} disabled>
      {text}
    </button>
  ) : (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}
