export default function Header({ text }) {
  const headerStyle = {
    backgroundColor: '#2196F3',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };
  return <div style={headerStyle}>{text}</div>;
}
