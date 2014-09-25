exports.beerAndFries = function beerAndFries(items) {
    'use strict';

    var beerScores = [],
        friesScores = [],
        currentScore,
        maxSum = 0,
        pairs,
        beers,
        fries,
        i;

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

    beers = beerScores.length;
    fries = friesScores.length;

    // If the amount of beers and fries is not equal, get only the max
    // values of available pairs to score the result and ignore the rest
    pairs = beers < fries ? beers : fries;

    for (i = 0; i < pairs; i += 1) {
        currentScore = beerScores[i] * friesScores[i];
        maxSum += currentScore;
    }

    return maxSum;
};