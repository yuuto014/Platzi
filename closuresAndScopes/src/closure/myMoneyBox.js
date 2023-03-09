// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins; 
//     console.log(`MoneyBox: $${saveCoins}`);

// }

// moneyBox(5);
// moneyBox(3);

//Haciendolo con closures

function moneyBox(){
    let saveCoins = 0;

    function addCoins(coins){
        saveCoins +=coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return addCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(3);
myMoneyBox(17);

const AnasMoneyBox = moneyBox();
AnasMoneyBox(2);
AnasMoneyBox(4);
AnasMoneyBox(8);
AnasMoneyBox(16);