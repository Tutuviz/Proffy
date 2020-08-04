export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const totalMinutes = hour * 60 + minutes;
  return totalMinutes;
}
