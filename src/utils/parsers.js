const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString('ro-RO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  });
};

const parseAirportsData = (data) => {
  let parsedData = [];
  data.forEach(
    (airport) =>
      (parsedData = parsedData.concat(
        ...airport.flights.map((flight) => ({
          name: airport.name,
          iataCode: airport.iataCode,
          location: `${airport.address.locality}, ${airport.address.country}`,
          flightNumber: flight.flightNumber,
          destination: flight.destination,
          departureTime: formatDate(flight.departureTime),
        }))
      ))
  );
  return parsedData;
};

export default { parseAirportsData };
