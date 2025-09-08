const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
console.log(`Исходный массив: ${dates}`);

function RealDates (datesArray) {
  const result = [];
  let tmpResult = datesArray.filter(date => date.split('').find(val => val === '/' || val === '-'));
  for (const date of tmpResult) {
    const charDate = date.split('');
    if (charDate.find(val => val ==='/')) {
      const dateStringArray = date.split('/');
      if (dateStringArray.length === 3 
          && (dateStringArray[0] > 0 && dateStringArray[0] <= 12)
          && (dateStringArray[1] > 0 &&dateStringArray[1] < 31)
          && (dateStringArray[2] > 0 && dateStringArray[2] < 2060)) {
            result.push(`${dateStringArray[1]}-${dateStringArray[0]}-${dateStringArray[2]}`);
      }
    } else if (charDate.find(val => val ==='-')) {
      const dateStringArray = date.split('-');
      if (dateStringArray.length === 3 
          && (dateStringArray[0] > 0 && dateStringArray[0] <= 31)
          && (dateStringArray[1] > 0 &&dateStringArray[1] < 12)
          && (dateStringArray[2] > 0 && dateStringArray[2] < 2060)) {
            result.push(date);
      }
    }
  }
  return result;
}

console.log(RealDates(dates));