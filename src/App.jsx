import Header from './Components/Header';
import Button from './Components/Button';
import Form from './Components/Form';
import FirstTable from './Components/FirstTable';
import scrapingService from './services/scrapingService';
import { useState } from 'react';
import parsers from './utils/parsers';
import rdfService from './services/rdfService';
function App() {
  const [airportsData, setAirportsData] = useState();
  const [rdfData, setRdfData] = useState();

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

  const gatherRDFData = async () => {
    try {
      const rdfDataResponse = await rdfService.gatherData();
      setRdfData(rdfDataResponse);
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(rdfData);
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
      <Button text="Gather RDF4J Data!" onClick={gatherRDFData}></Button>
    </div>
  );
}

export default App;
