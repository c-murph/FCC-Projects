function palindrome(str) {
    let forward = str.toLowerCase().split('').map(ele => {
        return /\W|_/.test(ele) ? '' : ele;
    }).join('');
    let backward = forward.split('').reverse().join('');
    // Good luck!
    return forward === backward;
}