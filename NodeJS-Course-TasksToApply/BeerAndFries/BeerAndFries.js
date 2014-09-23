function beerAndFries(items) {
    var beerScores = [],
        friesScores = [],
        pairs, i,
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

    pairs = items.length / 2;
    for (i = 0; i < pairs; i += 1) {
        currentScore = beerScores[i] * friesScores[i];
        maxSum += currentScore;
    }

    return maxSum;
}
