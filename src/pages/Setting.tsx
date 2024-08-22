import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "../theme/variables.css";
const Setting: React.FC = () => {
  const [language, setlanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const darkModeStore = localStorage.getItem(`darkMode`);
    if (darkMode) {
      if (darkModeStore != null) setDarkMode(JSON.parse(darkModeStore));
      document.body.classList.add("dark");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(`darkMode`, JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" fill="clear">
              <IonBackButton
                defaultHref="/"
                color={"secondary"}
              ></IonBackButton>
            </IonButton>
            <IonTitle color={"secondary"}>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Languages</IonLabel>
          <IonSelect value={language}></IonSelect>
        </IonItem>

        <IonItem className="dark-mode-toggle">
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle
            name="darkmode"
            slot="end"
            onIonChange={toggleDarkMode}
          ></IonToggle>
        </IonItem>

        <IonItem>
          <IonLabel>Change font size</IonLabel>
          <IonRange
            aria-label="vlume"
            style={{ margin: "10px" }}
            color={"secondary"}
          ></IonRange>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Setting;
