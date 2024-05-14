import Header from './Components/Header';
import Button from './Components/Button';
import Form from './Components/Form';
import FirstTable from './Components/FirstTable';
import scrapingService from './services/scrapingService';
import { useState } from 'react';
import parsers from './utils/parsers';
function App() {
  const [airportsData, setAirportsData] = useState();

  const airportTableColumns = [
    'Nume aeroport',
    'IATA',
    'Locatie',
    'Numar zbor',
    'Destinatie',
    'Data decolare',
  ];

  const gatherJsonLdData = async () => {
    try {
      const airportsDataResponse = await scrapingService.getData();
      setAirportsData(airportsDataResponse);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div style={{ minHeight: '100%' }}>
      <Header text="Proiect Web Semantic - Scridon Lucas, Timandi Sabin" />
      <br />
      <Button text="Web Scraping" onClick={gatherJsonLdData} />
      {airportsData && (
        <FirstTable
          airportsData={parsers.parseAirportsData(airportsData)}
          columns={airportTableColumns}
        />
      )}
      <br />
      <Form data={airportsData}></Form>
    </div>
  );
}

export default App;
