import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "B WON" : "A WON"}</span>}
      {draw && <span className="win-text">Draw</span>}

      <span className="win-history">
        A's WINS: {winCount.A}
        <br />
        B's WINS: {winCount.B}
      </span>
    <p>
      the loser has to start the next round
    </p>
      <button className="btn" onClick={restartGame}>
        Resatrt Game
      </button>
      <button className="btn" onClick={clearHistory}>
        Clear History
      </button>
    </div>
  );
}

export default EndGame;
