import { useEffect, useState } from "react";
import "./ExploreContainer.css";
import Game from "./game/game";
import { timer } from "ionicons/icons";
import { IonGrid } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [count, setcount] = useState(0);
  const [isrunning, setisrunning] = useState(false);

  useEffect(() => {
    if (count < 20)
      setTimeout(() => {
        setcount((count) => count + 1);
      }, 1000);
  }, [count]);
  return (
    <div id="container">
      <strong>{name}</strong>
      <p>
        Explore
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <h1> I've rendered {count} times!</h1>
      <IonGrid>
        <Game />
      </IonGrid>
    </div>
  );
};

export default ExploreContainer;
