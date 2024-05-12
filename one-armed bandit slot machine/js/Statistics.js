class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameStats(win, bid) {
    let gameResult = {
      win: win,
      bid: bid,
    };
    this.gameResults.push(gameResult);
  }

  showGameStats() {
    let gamesAmount = this.gameResults.length;
    let winsAmount = this.gameResults.filter(
      (gameResult) => gameResult.win == true
    ).length;
    let lossesAmount = this.gameResults.filter(
      (gameResult) => gameResult.win == false
    ).length;
    return [gamesAmount, winsAmount, lossesAmount];
  }
}
