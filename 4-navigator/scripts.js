const addressLat = 10;
const addressLong = 10;
const positionLat = 20;
const positionLong  = 30;

const result = Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2);
console.log(`Расстояние = ${result}`);
