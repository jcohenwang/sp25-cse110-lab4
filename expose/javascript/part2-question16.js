let statistic = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    raceCars: 2
};

for (const property in statistic) {
    if ((property[0] == 'r') || ((statistic[property] % 2) == 1)) {
        console.log(`${statistic[property]} `);
    }
}