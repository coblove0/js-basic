const RUB_TO_USD_CURRENCY = 90;
const RUB_TO_EUR_CURRENCY = 100;
const EUR_TO_USD_CURRENCY = 1.16;

rubToUsd = sum => sum / RUB_TO_USD_CURRENCY;
usdToRub = sum => sum * RUB_TO_USD_CURRENCY;
rubToEur = sum => sum / RUB_TO_EUR_CURRENCY;
eurToRub = sum => sum * RUB_TO_EUR_CURRENCY;
usdToEur = sum => sum / EUR_TO_USD_CURRENCY;
eurToUsd = sum => sum * EUR_TO_USD_CURRENCY;

function converter (current, result, amount) {
    if (current === 'rub') {
        switch (result) {
            case 'eur': return rubToEur(amount);
            case 'usd': return rubToUsd(amount);
            default: return null;
        }
    } else if (current === 'eur') {
        switch (result) {
            case 'rub': return eurToRub(amount);
            case 'usd': return eurToUsd(amount);
            default: return null;
        }
    } else if (current === 'usd') {
        switch (result) {
            case 'eur': return usdToEur(amount);
            case 'rub': return usdToRub(amount);
            default: return null;
        }
    } else {
        return null;
    }
}

console.log(converter('rub', 'eur', 100));
console.log(converter('eur', 'usd', 100));
console.log(converter('usd', 'rub', 100));
console.log(converter('yen', 'rub', 100));
console.log(converter('usd', 'yen', 100));