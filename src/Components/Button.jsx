export default function Button({ text, onClick }) {
  const buttonStyle = {
    fontSize: '16px',
    padding: '10px 20px',
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
