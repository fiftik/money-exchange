module.exports = function makeExchange(currency) {
    let answer = {};
    if(currency > 10000){
        return { error: "You are rich, my friend! We don\'t have so much coins for exchange" };
    } else if (currency <= 0) {
        return answer;
    }

    let countH = currency/50;
    let countQ = (currency - Math.floor(countH)*50)/25;
    let countD = (currency - Math.floor(countH)*50 - Math.floor(countQ)*25)/10;
    let countN = (currency - Math.floor(countH)*50 - Math.floor(countQ)*25 - Math.floor(countD)*10)/5;
    let countP = currency - Math.floor(countH)*50 - Math.floor(countQ)*25 - Math.floor(countD)*10 - Math.floor(countN)*5;

    if(Math.floor(countH) >= 1){
        answer.H = Math.floor(countH);
    }

    if(Math.floor(countQ) >= 1){
        answer.Q = Math.floor(countQ);
    }

    if(Math.floor(countD) >= 1){
        answer.D = Math.floor(countD);
    }

    if(Math.floor(countN) >= 1){
        answer.N = Math.floor(countN);
    }

    if(Math.floor(countP) >= 1){
        answer.P = countP;
    }

    return answer;
}
