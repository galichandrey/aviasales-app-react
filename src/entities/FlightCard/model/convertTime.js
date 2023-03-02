const convertMinToHours = (time) => {
  const hour = Math.floor(time / 60);
  const min = Number(time) - Number(hour * 60);
  return [hour, min];
};

const arrivalTime = (startTime, duration) => {
  const startTimeParsed = Date.parse(startTime);

  const durationConverted = duration * 60;

  const arriveSeconds = startTimeParsed + durationConverted;

  const arriveHour = ("0" + new Date(arriveSeconds).getHours()).slice(-2);

  const arriveMinutes = ("0" + new Date(arriveSeconds).getMinutes()).slice(-2);

  return [arriveHour, arriveMinutes];
};

export { convertMinToHours, arrivalTime };
