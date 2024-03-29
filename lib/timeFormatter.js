export function millisecondsAsMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);

  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds > 9 ? "" : "0") + seconds;
}
