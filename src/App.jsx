import Header from './Components/Header';
import Button from './Components/Button';
function App() {
  const sendReq = () => {
    console.log('test');
  };
  return (
    <div style={{ minHeight: '100%' }}>
      <Header text="Proiect Web Semantic - Scridon Lucas, Timandi Sabin" />
      <br />

      <Button text="Web Scraping" onClick={sendReq} />
    </div>
  );
}

export default App;
