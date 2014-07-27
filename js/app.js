var _ = require('underscore'),
    teams = require('./teams.js'),
    findChampion = require('./findChampionWorldCup.js');
 
if (findChampion(teams())) {
    document.write('Achamos o campeão!');
} else {
    document.write('Não achamos o campeão :(');
}