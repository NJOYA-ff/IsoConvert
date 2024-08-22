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
import Consol from "../components/game/Console";
import Edit from "../components/game/Editor";
import Docum from "../components/game/Document";
const Console: React.FC = () => {
  const [selectedsegment, setselectedsegment] = useState<
    "Editor" | "Console" | "Document"
  >("Editor");

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
          color={"primary"}
          onIonChange={(e) =>
            setselectedsegment(
              e.detail.value as "Editor" | "Console" | "Document"
            )
          }
        >
          <IonSegmentButton value="Editor">
            <IonLabel color={"success"}>Editor</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Console">
            <IonLabel color={"danger"}>Console</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Document">
            <IonLabel color={"secondary"}>Document</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>

      <IonContent>
        {selectedsegment === "Editor" && <Edit />}
        {selectedsegment === "Console" && <Consol />}
        {selectedsegment === "Document" && <Docum />}
      </IonContent>
    </IonPage>
  );
};

export default Console;
