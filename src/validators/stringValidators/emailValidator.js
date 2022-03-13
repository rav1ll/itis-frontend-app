const emailRegExp = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/

export default function emailValidator(value) {
    return value === "" || emailRegExp.test(value) ? '' : 'Wrong email format';
}