import Button from './Button';
import parsers from '../utils/parsers';
import stlyes from '../utils/styles';
import { useEffect, useState } from 'react';

export default function Form({ data }) {
  const [airportKey, setAirportKey] = useState('');
  const [options, setOptions] = useState([]);
  const [flightNumber, setFlightNumber] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureTime, setDepartureTime] = useState('2024-06-16T14:45');

  useEffect(() => {
    data ? setOptions(parsers.gatherAirportKeys(data)) : [];
  }, [data]);

  const onAirportChange = (e) => {
    setAirportKey(e.target.value);
  };

  const onFlightNumberChange = (e) => {
    setFlightNumber(e.target.value);
  };

  const onArrivalAirportChange = (e) => {
    setArrivalAirport(e.target.value);
  };

  const onDepartureTimeChange = (e) => {
    setDepartureTime(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('as');
  };

  return (
    <div style={stlyes.formContainerStyle}>
      <header style={stlyes.hStyle}>Send data to RDF - Form</header>
      <br />
      <form>
        <div style={stlyes.inputsContainer}>
          <label style={stlyes.pStyle}>Cheie</label>
          {options.length === 0 ? (
            <select style={stlyes.selectStyleDisabled} disabled></select>
          ) : (
            <select
              value={airportKey}
              onChange={onAirportChange}
              style={stlyes.selectStyle}
            >
              {options.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.key}
                </option>
              ))}
            </select>
          )}
          <label>Numar Zbor</label>
          <input
            style={stlyes.inputStyle}
            value={flightNumber}
            onChange={onFlightNumberChange}
            type="text"
          />
          <label>Locatie destinatie</label>
          <input
            style={stlyes.inputStyle}
            value={arrivalAirport}
            onChange={onArrivalAirportChange}
            type="text"
          />
          <label>Data decolare</label>
          <input
            style={stlyes.inputStyle}
            value={departureTime}
            onChange={onDepartureTimeChange}
            type="datetime-local"
          />
          <Button onClick={onFormSubmit} text="Send data!" color="white" />
        </div>
      </form>
    </div>
  );
}
