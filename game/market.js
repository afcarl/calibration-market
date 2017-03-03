class Market {
  constructor(prop, timeout, b0) {
    this.prop = prop;
    this.timeout = timeout;
    this.bets = [];
    this.bets.push({player: null, bet: b0});
    this.n_bets = 1;
    this.players = new Map();
    this.open = true;
  }

  make_bet(player,b) {
    if (!this.open) {
      throw "This market is now closed.";
    }

    if (this.bets[this.n_bets].player == player) {
      throw "Can't bet twice m8.";
    }

    if (b >= 1 || b <= 0) {
      throw "Bets must be in the open interval (0,1).";
    }

    this.bets.push({player: player, bet: bet});
    this.n_bets++;
  }

  score(P) {
    scores = new Map();
    for (let i = 1; i < this.n_bets; i++) {
      let b = this.bets[i];
      let a = this.bets[i-1];
      let s = 100;
      if (P) {
        s *= Math.log2(b/a);
      } else {
        s *= Math.log2((1-b)/(1-a))
      }
      pid = this.bets[i].id;
      current_score = scores[pid];
      if (!current_score) {
        scores[pid] = s;
      } else {
        scores[pid] += s;
      }
    }

  }
}
