export default function Button({ text, onClick }) {
  const buttonStyle = {
    fontSize: '18px',
    padding: '15px 25px',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outline: 'none',
    margin: '20px',
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}
