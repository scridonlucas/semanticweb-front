export default function FirstTable({ airportsData, columns }) {
  const tableContainerStyle = {
    margin: '20px',
    width: '80%',
  };
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '15px',
    textAlign: 'left',
    backgroundColor: '#2196F3',
    color: 'white',
    fontSize: '18px',
  };

  const tdStyle = {
    padding: '15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
  };
  console.log('test');
  console.log(airportsData);
  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} style={thStyle}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {airportsData.map((flight, index) => (
            <tr key={index}>
              <td style={tdStyle}>{flight.name}</td>
              <td style={tdStyle}>{flight.iataCode}</td>
              <td style={tdStyle}>{flight.location}</td>
              <td style={tdStyle}>{flight.flightNumber}</td>
              <td style={tdStyle}>{flight.arrivalAirport}</td>
              <td style={tdStyle}>{flight.departureTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
