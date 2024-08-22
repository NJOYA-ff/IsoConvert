import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import ConsoleEmulator from "react-console-emulator";
import { useLocation } from "react-router";
interface Routestate {
  state: string;
}
const Console: React.FC = () => {
  const location = useLocation();

  const commands = {
    echo: {
      description: "Echo the input",
      fn: (arg1: string, arg2: string) => `${arg1} ${arg2}`,
    },
    greet: {
      description: "Greet the User",
      options: [{ name: "Njoya", description: "your name" }],
      fn: (opts: { name: string }) => `Hello, ${opts.name}!`,
    },
  };
  const descriptions = {
    clear: "clear",
  };
  return (
    <IonPage>
      <h1> </h1>
      <IonContent>
        <ConsoleEmulator
          commands={commands}
          promptLabel={`>>user/console:$`}
          autoFocus={true}
          Defaults={true}
          execOnInt={true}
          History={true}
          className="custom"
          AutoScroll={true}
          style={{
            height: "100%",
            width: "100%",
            fontWeight: "bold",
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Console;
