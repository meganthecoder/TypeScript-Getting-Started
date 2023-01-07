"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        output = this.results.reduce(function (output, result) {
            return output + " <h4>" + result.playerName + ": " + result.score + " / " + result.problemCount + " for factor " + result.factor + "</h4>";
        }, output);
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map