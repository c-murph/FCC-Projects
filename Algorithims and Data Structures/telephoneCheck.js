function telephoneCheck(str) {
    // Good luck!
    if (!/\d|-| |[(]|[)]/g.test(str)) return false; //check invalid chars
    if (!(/^\d|[(]/.test(str))) return false; //check if the first char is valid

    let numCount = str.split('').reduce((count, ele) => {
        return /\d/.test(ele) ? count += 1 : count;
    }, 0); //count numbers


    if (numCount < 10 || numCount > 11 || (numCount === 11 && str[0] !== '1')) return false; //check count and area code

    let cleaned = str.split('').map(ele => {
        return /\d|[()]/.test(ele) ? ele : '';
    }).join(''); //cleaned number for ease of checking



    if (numCount === 10) {
        if (!(/([(]\d{3}[)])\d{7}/.test(cleaned) || (/\d{10}/.test(cleaned) && !/\D/.test(cleaned)))) return false;
    }; //check 10 dig format

    if (numCount === 11) {
        if (!(/1[(]\d{3}[)]\d{7}/.test(cleaned) || (/1\d{10}/.test(cleaned) && !/\D/.test(cleaned)))) return false;
    }; //check 11 dig format  



    return true;
}