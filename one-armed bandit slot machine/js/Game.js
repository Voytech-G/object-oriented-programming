class Game {
  constructor(startScore) {
    this.stats = new Statistics();
    this.wallet = new Wallet(startScore);
    document
      .getElementById("play__start")
      .addEventListener("click", () => this.startGame());
    this.colorBoards = [...document.querySelectorAll(".game__color")];
    this.infopanelWallet = document.querySelector(".infopanel__wallet");
    this.playBid = document.getElementById("play__bid");
    this.scoreResult = document.querySelector(".score__result");
    this.scoreNumber = document.querySelector(".score__number");
    this.scoreWin = document.querySelector(".score__win");
    this.scoreLoss = document.querySelector(".score__loss");
    this.render();
  }
  render(
    colors = ["gray", "gray", "gray"],
    money = this.wallet.getWalletValue(),
    result = "",
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.colorBoards.forEach((board, idx) => {
      board.style.backgroundColor = colors[idx];
    });
    this.infopanelWallet.textContent = money;
    if (result) {
      result = `You've won ${wonMoney}$.`;
    } else if (!result && result !== "") {
      result = `You've lost ${bid}$.`;
    }
    this.scoreResult.textContent = result;
    this.scoreNumber.textContent = stats[0];
    this.scoreWin.textContent = stats[1];
    this.scoreLoss.textContent = stats[2];
    this.playBid.value = "";
  }
  startGame() {
    if (this.playBid.value < 1) return alert("Please, provide a higher bid!");
    const bid = Math.floor(this.playBid.value);

    if (!this.wallet.checkCanPlay(bid)) {
      return alert("Invalid bid amount or you've run out of coins!");
    }

    this.wallet.changeWallet(bid, "-");
    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.checkWin(colors);
    const wonMoney = Result.moneyWinInGame(win, bid);
    this.wallet.changeWallet(wonMoney, "+");
    this.stats.addGameStats(win, bid);
    console.log(
      colors,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameStats(),
      this.playBid.value,
      wonMoney
    );
    this.render(
      colors,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameStats(),
      this.playBid.value,
      wonMoney
    );
  }
}

const game = new Game(200);
