const language = prompt('Введите свой язык (de, en, ru)');

switch (language.toLowerCase()) {
    case 'de': console.log('Gutten tag!');
                break;
    case 'en':  console.log('Good Morning!');
                break;
    case 'ru':
    default:    console.log('Добрый день!');
}