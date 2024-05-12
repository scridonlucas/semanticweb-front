import Header from './Components/Header';
import Button from './Components/Button';
import scrapingService from './services/scrapingService';

function App() {
  return (
    <div style={{ minHeight: '100%' }}>
      <Header text="Proiect Web Semantic - Scridon Lucas, Timandi Sabin" />
      <br />

      <Button text="Web Scraping" onClick={scrapingService.getData} />
    </div>
  );
}

export default App;
