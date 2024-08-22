import {
  IonBackButton,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect } from "react";
import OK4 from "../asset/image/OK4.png";
import ima1 from "../asset/MathFormula/ima (1).jpg";
import ima2 from "../asset/MathFormula/ima (2).jpg";
import ima3 from "../asset/MathFormula/ima (3).jpg";
import ima4 from "../asset/MathFormula/ima (4).jpg";
import ima5 from "../asset/MathFormula/ima (5).jpg";
import ima6 from "../asset/MathFormula/ima (6).jpg";
import ima7 from "../asset/MathFormula/ima (7).jpg";
import ima8 from "../asset/MathFormula/ima (8).jpg";
import ima9 from "../asset/MathFormula/ima (9).jpg";
import ima10 from "../asset/MathFormula/ima (10).jpg";
import ima11 from "../asset/MathFormula/ima (11).jpg";
import ima12 from "../asset/MathFormula/ima (12).jpg";
import ima13 from "../asset/MathFormula/ima (13).jpg";
import ima14 from "../asset/MathFormula/ima (14).jpg";
import ima15 from "../asset/MathFormula/ima (15).jpg";
import ima16 from "../asset/MathFormula/ima (16).jpg";
import ima17 from "../asset/MathFormula/ima (17).jpg";
import ima18 from "../asset/MathFormula/ima (18).jpg";
import ima19 from "../asset/MathFormula/ima (19).jpg";
import ima20 from "../asset/MathFormula/ima (20).jpg";
import ima21 from "../asset/MathFormula/ima (21).jpg";
import ima22 from "../asset/MathFormula/ima (22).jpg";
import ima23 from "../asset/MathFormula/ima (23).jpg";
import ima24 from "../asset/MathFormula/ima (24).jpg";
import ima25 from "../asset/MathFormula/ima (25).jpg";
import ima26 from "../asset/MathFormula/ima (26).jpg";
import ima27 from "../asset/MathFormula/ima (27).jpg";
import ima28 from "../asset/MathFormula/ima (28).jpg";
import ima29 from "../asset/MathFormula/ima (29).jpg";
import ima30 from "../asset/MathFormula/ima (30).jpg";
const images = [
  ima2,
  ima3,
  ima4,
  ima5,
  ima6,
  ima7,
  ima8,
  ima9,
  ima10,
  ima11,
  ima12,
  ima13,
  ima14,
  ima15,
  ima16,
  ima17,
  ima18,
  ima19,
  ima20,
  ima21,
  ima22,
  ima23,
  ima24,
  ima25,
  ima26,
  ima27,
  ima28,
  ima29,
  ima30,
];
const MathFormulars: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {images.map((img) => (
          <IonCard key={img} color={"medium"}>
            <IonImg className="imo" src={img}></IonImg>
            <IonItem color={"success"}></IonItem>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default MathFormulars;
