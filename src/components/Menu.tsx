import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import OK2 from "../asset/image/OK2.jpg";

import { useLocation } from "react-router-dom";
import {
  funnel,
  gameControllerOutline,
  homeOutline,
  settingsOutline,
  swapHorizontalOutline,
  terminalOutline,
  trendingUpOutline,
} from "ionicons/icons";
import "./Menu.css";
import { useRef, useState } from "react";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}
const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/",
    iosIcon: homeOutline,
    mdIcon: homeOutline,
  },

  {
    title: "Units Converter",
    url: "/Converter",
    iosIcon: swapHorizontalOutline,
    mdIcon: swapHorizontalOutline,
  },
  {
    title: "Graphical [Pro]",
    url: "/Toll",
    iosIcon: funnel,
    mdIcon: trendingUpOutline,
  },
  {
    title: "Programming [Pro]",
    url: "/Terminal",
    iosIcon: terminalOutline,
    mdIcon: terminalOutline,
  },

  {
    title: "Setting",
    url: "/Setting",
    iosIcon: settingsOutline,
    mdIcon: settingsOutline,
  },

  {
    title: "Game",
    url: "/folder/Inbox",
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const [expanded, setexpanded] = useState(false);
  const toggAccordion = () => {
    setexpanded(!expanded);
  };

  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const toggleAccordion = () => {
    if (!accordionGroup.current) {
      return;
    }
    const nativeEl = accordionGroup.current;

    if (nativeEl.value === "second") {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = "second";
    }
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <img src={OK2} className="mimg"></img>IsoConvert
          </IonListHeader>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? "selected" : ""}
                routerLink={appPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon
                  aria-hidden="true"
                  slot="start"
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
        <br />
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
