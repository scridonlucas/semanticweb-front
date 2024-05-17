import Header from './Components/Header';
import Button from './Components/Button';
import Form from './Components/Form';
import FirstTable from './Components/FirstTable';
import scrapingService from './services/scrapingService';
import { useState } from 'react';
import parsers from './utils/parsers';
import rdfService from './services/rdfService';
import jsonServerService from './services/jsonServerService';

function App() {
  const [airportsData, setAirportsData] = useState();
  const [airportsDataRDF, setAirportsDataRDF] = useState();
  const [enableRDF, setEnableRDF] = useState(false);
  const [enableGatherJSONServer, setEnableGatheRJSONServer] = useState(false);
  const [jsonServerData, setJsonServerData] = useState();

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
      console.log(rdfDataResponse);
      setAirportsDataRDF(rdfDataResponse);
    } catch (error) {
      alert(error.message);
    }
  };

  const sendJsonServerData = async () => {
    try {
      const response = await jsonServerService.postData(airportsDataRDF);
      setEnableGatheRJSONServer(true);
      alert(response);
    } catch (error) {
      alert(error.message);
    }
  };

  const gatherJsonServerData = async () => {
    try {
      const jsonServerData = await jsonServerService.gatherData();
      setJsonServerData(jsonServerData);
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
      <Form data={airportsData} setButtonState={setEnableRDF}></Form>
      {enableRDF ? (
        <Button
          text="Gather RDF4J Data!"
          onClick={gatherRDFData}
          disabled={false}
        />
      ) : (
        <Button text="Gather RDF4J Data!" disabled={true} />
      )}
      {airportsDataRDF && (
        <FirstTable
          airportsData={parsers.parseAirportsData(airportsDataRDF)}
          columns={airportTableColumns}
        />
      )}
      <br />
      {airportsDataRDF ? (
        <Button
          text="Send data to JSON Server!"
          onClick={sendJsonServerData}
          disabled={false}
        />
      ) : (
        <Button text="Send data to JSON Server!" disabled={true} />
      )}
      <br />
      {enableGatherJSONServer ? (
        <Button
          text="Gather data from JSON Server!"
          onClick={gatherJsonServerData}
          disabled={false}
        />
      ) : (
        <Button text="Gather data from JSON Server" disabled={true} />
      )}
      {jsonServerData && (
        <FirstTable
          airportsData={parsers.parseAirportsData(jsonServerData)}
          columns={airportTableColumns}
        />
      )}
    </div>
  );
}

export default App;
