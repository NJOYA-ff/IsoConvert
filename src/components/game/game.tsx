import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
const Game = () => {
  const [player1score, setplayer1score] = useState(0);
  const [player2score, setplayer2score] = useState(0);
  const [gameover, setgameover] = useState(false);

  const checkGameOver = () => {
    if (player1score === 19 || player2score === 19) {
      setgameover(true);
    }
  };

  const handleplayer1click = () => {
    if (!gameover) {
      setplayer1score(player1score + 1);
      checkGameOver();
    }
  };

  const handleplayer2click = () => {
    if (!gameover) {
      setplayer2score(player2score + 1);
      checkGameOver();
    }
  };

  const checkGamestate = () => {
    if (player1score === player2score && player1score > 0 && player2score > 0) {
      return "the game is at the tie ";
    } else if (player1score === 20 && player1score > player2score) {
      return "KYLLIAN wins";
    } else if (player2score === 20 && player2score > player1score) {
      return "ERLING wins";
    } else if (player1score <= 20 && player1score > player2score) {
      return (
        <IonTitle>
          KYLLIAN is leading by {player1score - player2score} points
        </IonTitle>
      );
    } else if (player2score <= 20 && player2score > player1score) {
      return (
        <IonTitle>
          ERLING is leading by {player2score - player1score} points
        </IonTitle>
      );
    }
  };

  const restartgame = () => {
    setplayer1score(0);
    setplayer2score(0);
    setgameover(false);
  };
  return (
    <>
      <>
        <IonGrid>
          <IonTitle>Game</IonTitle>
          <h1>KYLLIAN MBAPPE: {player1score}</h1>
          <IonButton onClick={handleplayer1click} disabled={gameover}>
            player 1
          </IonButton>
          <h1>ERLING HAALAN: {player2score}</h1>
          <IonButton onClick={handleplayer2click} disabled={gameover}>
            player 2
          </IonButton>
          <IonTitle>{checkGamestate()}</IonTitle>
          {gameover && (
            <IonGrid>
              <IonTitle>Game over</IonTitle>
              <IonButton onClick={restartgame}>new Game</IonButton>
            </IonGrid>
          )}
        </IonGrid>
      </>
    </>
  );
};

export default Game;
