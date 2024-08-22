import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Graphicl from "../components/game/Graphic";
import MathFormular from "../components/MathFormulars";

const Toll: React.FC = () => {
  const [selectedsegment, setselectedsegment] = useState<
    "Graphic" | "MathFormular"
  >("Graphic");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" slot="start">
            <IonBackButton defaultHref="/" color={"secondary"}></IonBackButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonToolbar>
        <IonSegment
          value={selectedsegment}
          color={"secondary"}
          onIonChange={(e) =>
            setselectedsegment(e.detail.value as "Graphic" | "MathFormular")
          }
        >
          <IonSegmentButton value="Graphic">
            <IonLabel color={"--ion-color-light-tint"}>Graphic</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="MathFormular">
            <IonLabel color={"--ion-color-light-tint"}>MathFormular</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>

      <IonContent>
        {selectedsegment === "Graphic" && <Graphicl />}
        {selectedsegment === "MathFormular" && <MathFormular />}
      </IonContent>
    </IonPage>
  );
};

export default Toll;
