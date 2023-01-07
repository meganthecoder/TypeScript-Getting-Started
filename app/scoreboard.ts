import * as _ from 'lodash';
import { Result } from './result';

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
    let allCapsName: string = _.upperCase(newResult.playerName);
    console.log(`${allCapsName}: ${newResult.score}`);
  }

  updateScoreboard(): void {
    let output: string = '<h2>Scoreboard</h2>';

    output = this.results.reduce((output, result) => {
      return `${output} <h4>${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor}</h4>`;
    }, output);

    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
  }
}