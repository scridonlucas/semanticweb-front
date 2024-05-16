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

const gatherAirportKeys = (data) => {
  const keys = data.map((airport) => ({
    key: airport.id,
  }));
  return keys;
};

function formatDateString(dateString, time = '00:00:00', offset = '+02:00') {
  let date = new Date(dateString);

  if (dateString.length === 10) {
    dateString += `T${time}`;
    date = new Date(dateString);
  }
  const formattedDate =
    date.toISOString().slice(0, 19).replace('T', 'T') + offset;

  return formattedDate;
}

export default { parseAirportsData, gatherAirportKeys, formatDateString };
