let password = 'password';

function crypto (password) {
    if (password.length < 3) {
        console.log('password length is 3 symbols min.');
        return -1;
    }
    const passArray = password.split('');
    const begin = passArray.slice(0, passArray.length / 2).join('');
    const end = passArray.slice(passArray.length / 2).join('');
    console.log(end+begin);
    return end + begin;
}

function check (chekingPass, secretPass) {
    if (crypto(secretPass) === chekingPass) {
        console.log('Password is correct!');
        return true;
    } else {
        console.log('Password is incorrect!');
        return false;
    }
}

const secretPass = crypto(password);
const chekingPass = prompt('Enter password.');
check(chekingPass, secretPass);