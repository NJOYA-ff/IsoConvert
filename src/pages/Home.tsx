import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Calco from "../components/Calco";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Calco />
      </IonContent>
    </IonPage>
  );
};

export default Home;
