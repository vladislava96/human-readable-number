module.exports = function toReadable(number) {
    let stringNumber = number.toString();

    let units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    //125890
    let start = stringNumber.length; // 6
    let chunks = []; //890, 125
    while (start > 0) {
        //6>0, 3>0
        let end = start; //6, 3
        // 6 - 3 = 3, 3 - 3 = 0
        // 890, 125
        chunks.push(stringNumber.slice((start = Math.max(0, start - 3)), end));
    }

    //890, 125
    let numberWords = [];
    for (let i = 0; i < chunks.length; i++) {
        // i < 2
        let chunk = parseInt(chunks[i]); // i = 0 => 890

        if (chunk) {
            let ints = chunks[i]
                .split("")
                .reverse()
                .map((n) => parseInt(n)); // [0,9,8] [5,2,1]

            if (ints[1] === 1) {
                ints[0] += 10;
            }

            if (units[ints[0]]) {
                //  units[0] => ''; "five"
                numberWords.push(units[ints[0]]);
            }

            if (tens[ints[1]]) {
                //  units[9] => "ninety"; "twenty"
                numberWords.push(tens[ints[1]]);
            }

            if (units[ints[2]]) {
                numberWords.push(units[ints[2]] + " hundred"); // units[8] => "eight hundred"; "one hundred"
            }
            // ['', "ninety", "eight hundred", "five", "twenty", "one hundred"]
        } else {
            return "zero";
        }
    }

    return numberWords.reverse().join(" ");
};
