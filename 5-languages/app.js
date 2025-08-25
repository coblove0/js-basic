const language = prompt('Введите свой язык (de, en, ru)');

switch (language.toLowerCase()) {
    case 'de': 'Gutten tag!';
                break;
    case 'en': 'Good Morning!';
                break;
    case 'ru':
    default:    'Добрый день!';
}