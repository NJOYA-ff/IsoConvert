import {
  IonBackButton,
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Plot from "react-plotly.js";
const Graphic: React.FC = () => {
  const [Data, setData] = useState("");
  const [X, setX] = useState<Number[]>([]);
  const [Y, setY] = useState<Number[]>([]);
  const functions = [
    "cos(x)",
    "sin(x)",
    "tan(x)",
    "cosh(x)",
    "sinh(x)",
    "tanh(x)",
    "cos(x)⁻¹",
    "sin(x)⁻¹",
    "tan(x)⁻¹",
    "cosh(x)⁻¹",
    "sinh(x)⁻¹",
    "tanh(x)⁻¹",
    "x",
    "x²",
    "x³",
    "x⁻¹",
    "√x",
    "ln(x)",
    "ln(x)⁻¹",
    "e",
    "e⁻ⁿ",
    "eⁿ",
    "cosh(eⁿ)",
    "sinh(eⁿ)",
    "tanh(eⁿ)",
  ];
  const handledraw = () => {
    if (Data === "cos(x)") {
    }
    const xData = Array.from({ length: 100 }, (_, i) => i / 10 - 5);
    const yData = xData.map((x) => {
      if (Data === "x") {
        return eval(Data.replace(/x/, `${x}`));
      } else if (Data === "cos(x)") {
        return eval(Data.replace("cos(x)", `${Math.cos(x)}`));
      } else if (Data === "sin(x)") {
        return eval(Data.replace("sin(x)", `${Math.sin(x)}`));
      } else if (Data === "tan(x)") {
        return eval(Data.replace("tan(x)", `${Math.tan(x)}`));
      } else if (Data === "cosh(x)") {
        return eval(Data.replace("cosh(x)", `${Math.cosh(x)}`));
      } else if (Data === "sinh(x)") {
        return eval(Data.replace("sinh(x)", `${Math.sinh(x)}`));
      } else if (Data === "tanh(x)") {
        return eval(Data.replace("tanh(x)", `${Math.tanh(x)}`));
      } else if (Data === "cos(x)⁻¹") {
        return eval(Data.replace("cos(x)⁻¹", `${1 / Math.cos(x)}`));
      } else if (Data === "sin(x)⁻¹") {
        return eval(Data.replace("sin(x)⁻¹", `${1 / Math.sin(x)}`));
      } else if (Data === "tan(x)⁻¹") {
        return eval(Data.replace("tan(x)⁻¹", `${1 / Math.tan(x)}`));
      } else if (Data === "cosh(x)⁻¹") {
        return eval(Data.replace("cosh(x)⁻¹", `${1 / Math.cosh(x)}`));
      } else if (Data === "sinh(x)⁻¹") {
        return eval(Data.replace("sinh(x)⁻¹", `${1 / Math.sinh(x)}`));
      } else if (Data === "tanh(x)⁻¹") {
        return eval(Data.replace("tanh(x)⁻¹", `${1 / Math.tanh(x)}`));
      } else if (Data === "ln(x)⁻¹") {
        return eval(Data.replace("ln(x)⁻¹", `${1 / Math.log(x)}`));
      } else if (Data === "ln(x)") {
        return eval(Data.replace("ln(x)", `${Math.log(x)}`));
      } else if (Data === "x²") {
        return eval(Data.replace(/x²/, `${x * x}`));
      } else if (Data === "x³") {
        return eval(Data.replace(/x³/, `${x * x * x}`));
      } else if (Data === "√x") {
        return eval(Data.replace(/√x/, `${Math.sqrt(x)}`));
      } else if (Data === "x⁻¹") {
        return eval(Data.replace(/x⁻¹/, `${1 / x}`));
      } else if (Data === "y") {
        return eval(Data.replace(/y/, `${0}`));
      } else if (Data === "cos(x²)") {
        return eval(Data.replace("cos(x²)", `${Math.cos(x * x)}`));
      } else if (Data === "cos(x³)") {
        return eval(Data.replace("cos(x³)", `${Math.cos(x * x * x)}`));
      } else if (Data === "sin(x²)") {
        return eval(Data.replace("sin(x²)", `${Math.sin(x * x)}`));
      } else if (Data === "sin(x³)") {
        return eval(Data.replace("sin(x³)", `${Math.sin(x * x * x)}`));
      } else if (Data === "tan(x²)") {
        return eval(Data.replace("tan(x²)", `${Math.tan(x * x)}`));
      } else if (Data === "tan(x³)") {
        return eval(Data.replace("tan(x³)", `${Math.tan(x * x * x)}`));
      } else if (Data === "e") {
        return eval(Data.replace("e", `${Math.E}`));
      } else if (Data === "e²") {
        return eval(Data.replace("e²", `${Math.E * Math.E}`));
      } else if (Data === "e³") {
        return eval(Data.replace("e³", `${Math.E * Math.E * Math.E}`));
      } else if (Data === "eⁿ") {
        return eval(Data.replace("eⁿ", `${Math.exp(x)}`));
      } else if (Data === "e⁻ⁿ") {
        return eval(Data.replace("e⁻ⁿ", `${Math.exp(-x)}`));
      } else if (Data === "cos(eⁿ)") {
        return eval(Data.replace("cos(eⁿ)", `${Math.cos(Math.exp(x))}`));
      } else if (Data === "sin(eⁿ)") {
        return eval(Data.replace("sin(eⁿ)", `${Math.sin(Math.exp(x))}`));
      } else if (Data === "tan(eⁿ)") {
        return eval(Data.replace("tan(eⁿ)", `${Math.tan(Math.exp(x))}`));
      } else if (Data === "cosh(eⁿ)") {
        return eval(Data.replace("cosh(eⁿ)", `${Math.cosh(Math.exp(x))}`));
      } else if (Data === "sinh(eⁿ)") {
        return eval(Data.replace("sinh(eⁿ)", `${Math.sinh(Math.exp(x))}`));
      } else if (Data === "tanh(eⁿ)") {
        return eval(Data.replace("tanh(eⁿ)", `${Math.tanh(Math.exp(x))}`));
      } else if (Data === "ln(eⁿ)") {
        return eval(Data.replace("ln(eⁿ)", `${Math.log(Math.exp(x))}`));
      } else if (Data === "ln(e⁻ⁿ)") {
        return eval(Data.replace("ln(e⁻ⁿ)", `${Math.log(Math.exp(-x))}`));
      } else if (Data === "ln(e)") {
        return eval(Data.replace("ln(e)", `${Math.log(Math.E)}`));
      } else if (Data === "√eⁿ") {
        return eval(Data.replace(/√eⁿ/, `${Math.sqrt(Math.exp(x))}`));
      } else if (Data === "√e⁻ⁿ") {
        return eval(Data.replace(/√e⁻ⁿ/, `${Math.sqrt(Math.exp(-x))}`));
      } else if (Data === "xⁿ") {
        return eval(Data.replace(/xⁿ/, `${x ^ Math.exp(x)}`));
      } else if (Data === "x⁻ⁿ") {
        return eval(Data.replace(/x⁻ⁿ/, `${x ^ Math.exp(-x)}`));
      } else if (Data === "x²ⁿ") {
        return eval(Data.replace(/x²ⁿ/, `${x ^ (2 * Math.exp(x))}`));
      } else if (Data === "x⁻²ⁿ") {
        return eval(Data.replace(/x⁻²ⁿ/, `${x ^ (2 * Math.exp(-x))}`));
      } else if (Data === "x³ⁿ") {
        return eval(Data.replace(/x³ⁿ/, `${x ^ (3 * Math.exp(x))}`));
      } else if (Data === "x⁻³ⁿ") {
        return eval(Data.replace(/x⁻³ⁿ/, `${x ^ (3 * Math.exp(-x))}`));
      }
    });
    setX(xData);
    setY(yData);
  };

  const handleDatachange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };
  const input = (value: string) => {
    setData(Data + value);
  };
  const clear = () => {
    setData("");
  };

  const data = [
    {
      x: X,
      y: Y,
      type: "scatter",
      mode: "lines + markers",
      marker: { color: [1, 2, 3, 4, 5], colorscale: "Viridis" },
    },
  ];
  const layout = {
    width: 420,
    height: 800,
    marginBottom: 0,
    title: `Graph of ${Data}`,
    plot_bgcolor: "rgba(141, 137, 137,0.25)",
    paper_bgcolor: "rgb(7,5,2)",

    yaxis: {
      title: "y",
      range: [-Infinity, Infinity],
    },
    xaxis: {
      title: "x",
      range: [-Infinity, Infinity],
    },
  };
  const backspacehandlebutton = () => {
    setData(Data.slice(0, -1));
    if (Data === "cos(") {
      setData(Data.slice(0, -4));
    } else if (Data === "sin(") {
      setData(Data.slice(0, -4));
    } else if (Data === "ln(") {
      setData(Data.slice(0, -3));
    } else if (Data === "tan(") {
      setData(Data.slice(0, -4));
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonSelect
          interface="popover"
          labelPlacement="floating"
          fill="solid"
          onIonChange={(e) => setData(e.detail.value)}
        >
          {functions.map((funct) => (
            <IonSelectOption key={funct} value={funct} className="option">
              {funct}
            </IonSelectOption>
          ))}
        </IonSelect>
        <input
          className="inpdata"
          value={Data}
          placeholder="f(x)= "
          onChange={handleDatachange}
        />
        <IonGrid className="Row">
          <div className="subRow">
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("sin(")}
            >
              Sin
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("cos(")}
            >
              Cos
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("tan(")}
            >
              Tan
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("ln(")}
            >
              Ln
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("²")}
            >
              x²
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("³")}
            >
              x³
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("x")}
            >
              x
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("ⁿ")}
            >
              x<sup>x</sup>
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("y")}
            >
              y
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("e")}
            >
              <i>e</i>
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("⁻")}
            >
              x <sup>-</sup>
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("(")}
            >
              &#40;
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input(")")}
            >
              &#41;
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={() => input("√")}
            >
              &#8730;
            </IonButton>
            <IonButton
              className="br1b"
              color={"secondary"}
              onClick={handledraw}
            >
              =
            </IonButton>
            <IonButton
              color={"warning"}
              className="br1b"
              onClick={backspacehandlebutton}
            >
              D
            </IonButton>
            <IonButton color={"danger"} className="br1b" onClick={clear}>
              C
            </IonButton>
          </div>
        </IonGrid>
        <Plot data={data} layout={layout} />
      </IonContent>
    </IonPage>
  );
};

export default Graphic;
