let fNum = document.querySelector('.number-one');
let sNum = document.querySelector('.number-two');
let res = document.querySelector('.res');

const resetNums = () => {
  fNum.value = null;
  sNum.value = null;
};

const concat = () => {
  const a = Number(fNum.value);
  const b = Number(sNum.value);
  res.value = a + b;
  resetNums();
}

const substract = () => {
  const a = Number(fNum.value);
  const b = Number(sNum.value);
  res.value = a - b;
  resetNums();
}

const mult = () => {
  const a = Number(fNum.value);
  const b = Number(sNum.value);
  res.value = a * b;
  resetNums();
}

const division = () => {
  const a = Number(fNum.value);
  const b = Number(sNum.value);
  res.value = a / b;
  resetNums();
}