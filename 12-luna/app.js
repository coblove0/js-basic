const card = '4561-2612-1234-5464';

function IsCorrectCard (card) {
 card = card.replaceAll('-','').split('');
 for (let i = 0; i < card.length; i++) {
  if (isNaN(card[i])) {
    return [];
  }
  card[i] = Number(card[i]);
  if ((i + 1) % 2 !== 0) {
    card[i] = card[i] * 2 > 9 ? card[i] * 2 - 9 : card[i] * 2;
  }
 }
 const result = card.reduce((acc, val) => acc += val, 0);

 return result % 10 === 0 ? true : false;
}

console.log(IsCorrectCard(card));