function multiplicationTable(input) {
        let num = Number(input[0]);

        for(let i = 1; i <= 10; i++) {
            let currentNumber = i;
            let sum = currentNumber * num;
            console.log(`${currentNumber} * ${num} = ${sum}`);
        }
}
multiplicationTable(["5"]);