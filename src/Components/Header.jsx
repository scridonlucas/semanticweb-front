export default function Header({ text }) {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };
  return <div style={headerStyle}>{text}</div>;
}
