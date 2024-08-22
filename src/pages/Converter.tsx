import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  barbellSharp,
  batteryCharging,
  boatSharp,
  bowlingBall,
  bulb,
  bulbOutline,
  carSportSharp,
  cloudUploadSharp,
  create,
  cubeSharp,
  diamondSharp,
  disc,
  fileTrayFullOutline,
  fileTrayFullSharp,
  flash,
  flashOff,
  flashOffOutline,
  flashOutline,
  helpBuoySharp,
  logoElectron,
  logoUsd,
  magnet,
  navigate,
  newspaperSharp,
  nuclear,
  nuclearOutline,
  nuclearSharp,
  planet,
  prismSharp,
  pulseSharp,
  radioSharp,
  receipt,
  repeatSharp,
  speedometerOutline,
  speedometerSharp,
  sunny,
  sunnyOutline,
  thermometerOutline,
  thermometerSharp,
  timeSharp,
  timerSharp,
  waterOutline,
  waterSharp,
} from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";
const Converter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
          <IonButton slot="start" fill="clear">
            <IonBackButton defaultHref="/" color={"secondary"}></IonBackButton>
          </IonButton>
          <IonTitle>Converter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="bigcont">
          <br />
          <IonTitle>Dimension</IonTitle>
          <br />
          <Link to="/Calconvt" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={pulseSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Length</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt1" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={disc} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Area</IonTitle>
            </IonItem>
          </Link>
          <br />
          <Link to="/Calconvt2" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={cubeSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Volume</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Usefull</IonTitle>
          <br />
          <Link to="/Calconvt3" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={logoUsd} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Currency</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt4" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={carSportSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Fuel consumption</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt5" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={timeSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Time</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Mechanics</IonTitle>
          <br />
          <Link to="/Calconvt6" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={logoElectron} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Pressure</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt7" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={barbellSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Weight</IonTitle>
            </IonItem>
            <br />
          </Link>

          <Link to="/Calconvt8" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={prismSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Force</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt9" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={helpBuoySharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Torque</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Motion</IonTitle>
          <br />
          <Link to="/Calconvt10" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={speedometerSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Speed</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt11" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={speedometerOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Accelaration</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt12" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={timerSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Angular speed</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt13" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={boatSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Flow rate</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt14" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={radioSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Frequency</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Chemistry</IonTitle>
          <br />
          <Link to="/Calconvt15" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={bowlingBall} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Density</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt16" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={waterOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Dynamic viscosity</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt17" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={waterSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Kinematic viscosity</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt18" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={diamondSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Mineralization</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Computing</IonTitle>
          <br />
          <Link to="/Calconvt19" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={fileTrayFullSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Data storage (1KB=1000B)</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt20" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={fileTrayFullOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Data storage (1KB=1024B)</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt21" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={cloudUploadSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Data transfer</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Energy</IonTitle>
          <br />
          <Link to="/Calconvt22" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={bulb} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Energy</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt23" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={bulbOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Power</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt24" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={thermometerOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Temperature</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Electricity</IonTitle>
          <br />
          <Link to="/Calconvt25" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={flash} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Electric charge</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt26" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={flashOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Electric current</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt27" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={flashOff} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Electrical resistance</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt28" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={flashOffOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Electric Potential</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt29" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={batteryCharging} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Electric capacitance</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Photometry</IonTitle>
          <br />
          <Link to="/Calconvt30" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={sunny} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Luminance</IonTitle>
            </IonItem>
          </Link>

          <br />
          <Link to="/Calconvt31" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={sunnyOutline} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Illuminance</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Radioactivity</IonTitle>
          <br />
          <Link to="/Calconvt32" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={nuclear} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Radiation</IonTitle>
            </IonItem>
          </Link>
          <br />
          <br />
          <Link to="/Calconvt33" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={nuclearSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Radioactivity</IonTitle>
            </IonItem>
          </Link>
          <br />
          <IonTitle>Magnetism</IonTitle>
          <br />
          <Link to="/Calconvt34" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={magnet} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Magnetic field</IonTitle>
            </IonItem>
          </Link>
          <br />
          <IonTitle>Mathematics</IonTitle>
          <br />
          <Link to="/Calconvt35" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={navigate} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Angle</IonTitle>
            </IonItem>
          </Link>

          <br />

          <Link to="/Calconvt36" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={create} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Units and Fraction</IonTitle>
            </IonItem>
          </Link>

          <br />

          <Link to="/Calconvt37" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={repeatSharp} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>SI prefixes</IonTitle>
            </IonItem>
          </Link>

          <br />

          <Link to="/Calconvt38" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={planet} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Astronomy distance</IonTitle>
            </IonItem>
          </Link>

          <br />
          <IonTitle>Other</IonTitle>
          <br />
          <Link to="/Calconvt39" className="link">
            <IonItem lines="none" className="ionitem" color={"light"}>
              <IonAvatar>
                <IonIcon icon={receipt} size="large"></IonIcon>
              </IonAvatar>
              <IonTitle>Typography</IonTitle>
            </IonItem>
          </Link>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Converter;
