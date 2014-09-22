(function () {
    function beerAndFries(items) {
        var beerScores = [],
            friesScores = [],
            pairs = items.length / 2, i,
            currentScore,
            maxSum = 0;

        items.sort(function (a, b) {
            return b.score - a.score;
        });

        items.forEach(function (item) {
            if (item.type === 'beer') {
                beerScores.push(item.score);
            } else {
                friesScores.push(item.score);
            }
        });

        for (i = 0; i < pairs; i += 1) {
            currentScore = beerScores[i] * friesScores[i];
            maxSum += currentScore;
        }

        return maxSum;
    }

    var testData = [
        {
            type: "beer",
            score: 10
        },
        {
            type: "beer",
            score: 11
        },
        {
            type: "fries",
            score: 1
        },
        {
            type: "fries",
            score: 5
        }
    ];

    console.log(beerAndFries(testData));

}());