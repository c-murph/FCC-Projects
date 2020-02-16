function rot13(str) { // LBH QVQ VG!
    let uniA = 'A'.charCodeAt(0);

    let codedChars = str.split('');
    let uncodedChars = codedChars.map(char => {
        if (/[A-Z]/.test(char)) {
            let charCode = char.charCodeAt(0);
            let decode = (charCode - 13 - uniA);
            return decode > 0 ? String.fromCharCode((decode % 26) + uniA) : String.fromCharCode(((26 + decode) % 26) + uniA);
        } else {
            return char;
        }

    })
    return uncodedChars.join('');
}