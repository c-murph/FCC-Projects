function checkCashRegister(price, cash, cid) {
    let changeReq = cash - price;
    let status = 'OPEN'
    const Vaules = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.0,
        'FIVE': 5.0,
        'TEN': 10.0,
        'TWENTY': 20.0,
        'ONE HUNDRED': 100.0
    };

    let money = checkChange(cid);

    if (money < changeReq) return { status: "INSUFFICIENT_FUNDS", change: [] };

    if (money === changeReq) return { status: "CLOSED", change: cid };

    let change = [];

    for (let i in cid.reverse()) {
        let partChange = getChange(changeReq, cid[i], Vaules);
        //console.log(partChange)
        //console.log(cid[i][1])
        if (partChange[1] > 0) { change.push(partChange) }
        changeReq -= partChange[1];

        money = ((money * 100) - (cid[i][1] * 100)) / 100
        if (changeReq < 0) break;
        //console.log(money)
        //step through notes high to low, get as much change and subtract of owing if notes not taken skip and stop one the change is done
    }
    // Here is your change, ma'am.

    if (changeReq > 0 && money <= 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (changeReq <= 0 && money === 0) status = 'CLOSED';
    return { status: status, change };
}

function checkChange(cid) {
    return cid.reduce((total, curr) => {
        return total += curr[1] * 100;
    }, 0.0) / 100;
}

function getChange(changeReq, cid, curr) {
    if (curr[cid[0]] > changeReq) return [cid[0], 0];

    let numOfCoinsAvl = (cid[1] * 100 / curr[cid[0]] * 100) / 10000;
    let coinsReq = (Math.round(changeReq * 100)) / (curr[cid[0]] * 100);

    return coinsReq <= numOfCoinsAvl ? [cid[0], Math.trunc(coinsReq) * curr[cid[0]]] : [cid[0], numOfCoinsAvl * curr[cid[0]]];




    //if(curr[cid[0]] === changeReq) return [cid[0],changeReq];

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]



console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));