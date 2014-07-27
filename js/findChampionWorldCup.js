var _ = require('underscore');

module.exports = function (values) {

    findChampion = false;
 
    _.find(values, function(championTeam) {
        if (championTeam === 'Alemanha') {
            console.log('Esta é a seleção campeã');
            findChampion = true;
        } else {
            console.log('Esta não é seleção campeã :(');
        }
    });

    return findChampion;

}