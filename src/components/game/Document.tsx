import { IonContent, IonItem, IonPage, IonTitle } from "@ionic/react";
import React from "react";
const Document: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <br />

        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> IONIC UI Components</IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.typescriptlang.org/docs/"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> TypeScript Resources</IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://sass-lang.com/documentation"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> SASS Resources</IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.w3schools.com/js/"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> JavaScript Resources</IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.oracle.com/en/java/"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> Java Resources </IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.python.org/3/"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> Python Resources</IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.w3schools.com/html/"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> HTML Resources</IonTitle>
          </IonItem>
        </a>
        <br />
        <br />
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.w3schools.com/css/"
        >
          <IonItem color={"dark"}>
            <IonTitle color={"success"}> CSS Resources</IonTitle>
          </IonItem>
        </a>
      </IonContent>
    </IonPage>
  );
};

export default Document;
