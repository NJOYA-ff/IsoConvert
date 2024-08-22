import {
  IonBackButton,
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import { useState } from "react";
import { useLocation } from "react-router";
interface Routestate {
  state: string;
}
const History: React.FC = () => {
  const [update, setupdate] = useState<
    { card: JSX.Element; createdAt: Date }[]
  >([]);
  const handleclear = () => {
    setupdate([]);
    localStorage.clear();
    console.clear();
  };
  const deleteitem = (key: string) => {
    localStorage.removeItem(key);
  };
  const handleclearone = (createdAt: Date) => {
    const updated = update.filter((card) => card.createdAt !== createdAt);
    setupdate(updated);
    deleteitem(state.message);
    deleteitem(state.Message);
  };
  const Recentmessage = (limit: number): string[] => {
    const storedDisplay = localStorage.getItem("calculationDisplay");
    if (storedDisplay) {
      const parseMessages: string[] = JSON.parse(storedDisplay);
      return parseMessages.slice(-limit);
    }
    return [];
  };
  const recentmessage = Recentmessage(1);
  const handleUpdateHistory = () => {
    const currentDate = new Date();

    const newupdate = (
      <IonItem key={update.length} color={"tertiary"}>
        <IonGrid>
          <h3 style={{ color: "white" }}>Operation: {state.Message}</h3>
          <h3 style={{ color: "white" }}>Result: {state.message} </h3>
          <p style={{ color: "white" }}> {currentDate.toLocaleString()} </p>
        </IonGrid>

        <IonIcon
          onClick={() => handleclearone(currentDate)}
          icon={trash}
          size="large"
          color="danger"
        ></IonIcon>
      </IonItem>
    );
    setupdate([...update, { card: newupdate, createdAt: currentDate }]);
  };
  const location = useLocation();
  const stateString = (location.state as Routestate)?.state;
  const state = stateString ? JSON.parse(stateString) : {};

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar color={"tertiary"} className="hist">
            <IonButton slot="start" fill="clear">
              <IonBackButton
                defaultHref="/"
                color={"secondary"}
              ></IonBackButton>
            </IonButton>
            <IonTitle color={"medium"}>History</IonTitle>
          </IonToolbar>
          <IonButton className="update" onClick={handleUpdateHistory}>
            <IonTitle>Update History</IonTitle>
          </IonButton>
        </IonHeader>

        <IonGrid className="history">
          <IonTitle
            className="clearhist"
            color={"danger"}
            onClick={handleclear}
          >
            Clear History
          </IonTitle>

          {update.map(({ card }, index) => (
            <div key={index}>
              {card}
              <br />
              <br />
            </div>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default History;
