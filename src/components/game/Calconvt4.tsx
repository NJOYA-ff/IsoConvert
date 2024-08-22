import {
  IonGrid,
  IonInput,
  IonCol,
  IonRow,
  IonButton,
  IonToolbar,
  IonBackButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonTitle,
} from "@ionic/react";
import { swapHorizontal } from "ionicons/icons";
import React, { useEffect, useState } from "react";
const FuelUnits = [
  "L/100km",
  "km/L",
  "L/100mi",
  "mi/L",
  "gal/100miUS",
  "mpgUS",
  "gal/100miUK",
  "mpgUk",
];
const Calconvt4: React.FC = () => {
  const [result, setresult] = useState<string>("");
  const [display, setdisplay] = useState<string>("");
  const [buttontext, setbuttontext] = useState<string>("RAD");
  const [firstUnit, setFirstUnit] = useState<string>("L/100km");
  const [secondUnit, setSecondUnit] = useState<string>("km/L");
  const [showBlink, setShowBlink] = useState<boolean>(true);
  const [isActive, setIsActive] = useState(false);
  const [fontSize, setFontSize] = useState(2.3);
  const increasefontsize = () => {
    setFontSize(fontSize + 0.1);
  };
  const decreasefontsize = () => {
    setFontSize(fontSize - 0.1);
  };
  const inputStyle = {
    fontSize: `${fontSize}em`,
  };
  const handlebuttonclick = (value: string) => {
    setdisplay(display + value);
  };
  const evaluateExpression = (expression: string): number => {
    if (expression.includes("(") && expression.includes(")")) {
      let result = 0;
      if (expression.startsWith("sin(")) {
        // Process cosine expressions
        const cosRegex = /cos\(([^()]+)\)/g;
        let cosMatch = cosRegex.exec(expression);

        while (cosMatch !== null) {
          const subExpression = cosMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const cosExpression = `cos(${subExpression})`;
          expression = expression.replace(
            cosExpression,
            Math.cos(subExpressionValue).toString()
          );

          cosMatch = cosRegex.exec(expression);
        }
        // Process tangent expressions
        const tanRegex = /tan\(([^()]+)\)/g;
        let tanMatch = tanRegex.exec(expression);

        while (tanMatch !== null) {
          const subExpression = tanMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const tanExpression = `tan(${subExpression})`;
          expression = expression.replace(
            tanExpression,
            Math.tan(subExpressionValue).toString()
          );

          tanMatch = tanRegex.exec(expression);
        }

        // Process sine expressions
        const sinRegex = /sin\(([^()]+)\)/g;
        let sinMatch = sinRegex.exec(expression);

        while (sinMatch !== null) {
          const subExpression = sinMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const sinExpression = `sin(${subExpression})`;
          expression = expression.replace(
            sinExpression,
            Math.sin(subExpressionValue).toString()
          );

          sinMatch = sinRegex.exec(expression);
        }
      } else if (expression.startsWith("tan(")) {
        // Process sine expressions
        const sinRegex = /sin\(([^()]+)\)/g;
        let sinMatch = sinRegex.exec(expression);

        while (sinMatch !== null) {
          const subExpression = sinMatch[1];

          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const sinExpression = `sin(${subExpression})`;
          expression = expression.replace(
            sinExpression,
            Math.sin(subExpressionValue).toString()
          );

          sinMatch = sinRegex.exec(expression);
        }
        // Process cosine expressions
        const cosRegex = /cos\(([^()]+)\)/g;
        let cosMatch = cosRegex.exec(expression);

        while (cosMatch !== null) {
          const subExpression = cosMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);
          const cosExpression = `cos(${subExpression})`;
          expression = expression.replace(
            cosExpression,
            Math.cos(subExpressionValue).toString()
          );

          cosMatch = cosRegex.exec(expression);
        }

        // Process tangent expressions
        const tanRegex = /tan\(([^()]+)\)/g;
        let tanMatch = tanRegex.exec(expression);

        while (tanMatch !== null) {
          const subExpression = tanMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const tanExpression = `tan(${subExpression})`;
          expression = expression.replace(
            tanExpression,
            Math.tan(subExpressionValue).toString()
          );

          tanMatch = tanRegex.exec(expression);
        }
      } else if (expression.startsWith("cos(")) {
        // Process tangent expressions
        const tanRegex = /tan\(([^()]+)\)/g;
        let tanMatch = tanRegex.exec(expression);

        while (tanMatch !== null) {
          const subExpression = tanMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const tanExpression = `tan(${subExpression})`;
          expression = expression.replace(
            tanExpression,
            Math.tan(subExpressionValue).toString()
          );

          tanMatch = tanRegex.exec(expression);
        }
        // Process sine expressions
        const sinRegex = /sin\(([^()]+)\)/g;
        let sinMatch = sinRegex.exec(expression);

        while (sinMatch !== null) {
          const subExpression = sinMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const sinExpression = `sin(${subExpression})`;
          expression = expression.replace(
            sinExpression,
            Math.sin(subExpressionValue).toString()
          );

          sinMatch = sinRegex.exec(expression);
        }
        // Process cosine expressions
        const cosRegex = /cos\(([^()]+)\)/g;
        let cosMatch = cosRegex.exec(expression);

        while (cosMatch !== null) {
          const subExpression = cosMatch[1];
          const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
          const subExpressionValue = JSON.parse(modifiedSubExpression);

          const cosExpression = `cos(${subExpression})`;
          expression = expression.replace(
            cosExpression,
            Math.cos(subExpressionValue).toString()
          );

          cosMatch = cosRegex.exec(expression);
        }
      }
      // Process sine expressions
      const sinRegex = /sin\(([^()]+)\)/g;
      let sinMatch = sinRegex.exec(expression);

      while (sinMatch !== null) {
        const subExpression = sinMatch[1];
        const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
        const subExpressionValue = JSON.parse(modifiedSubExpression);

        const sinExpression = `sin(${subExpression})`;
        expression = expression.replace(
          sinExpression,
          Math.sin(subExpressionValue).toString()
        );

        sinMatch = sinRegex.exec(expression);
      }
      // Process logarithm expressions
      const logRegex = /log\(([^()]+)\)/g;
      let logMatch = logRegex.exec(expression);

      while (logMatch !== null) {
        const subExpression = logMatch[1];
        const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
        const subExpressionValue = JSON.parse(modifiedSubExpression);

        const logExpression = `log(${subExpression})`;
        expression = expression.replace(
          logExpression,
          Math.log10(subExpressionValue).toString()
        );

        logMatch = logRegex.exec(expression);
      }

      // Process natural logarithm expressions
      const lnRegex = /ln\(([^()]+)\)/g;
      let lnMatch = lnRegex.exec(expression);

      while (lnMatch !== null) {
        const subExpression = lnMatch[1];
        const modifiedSubExpression = subExpression.replace(/π/g, "Math.PI");
        const subExpressionValue = JSON.parse(modifiedSubExpression);

        const lnExpression = `ln(${subExpression})`;
        expression = expression.replace(
          lnExpression,
          Math.log(subExpressionValue).toString()
        );

        lnMatch = lnRegex.exec(expression);
      }

      // Process parentheses expressions
      const regex = /\(([^()]+)\)/g;
      let match = regex.exec(expression);

      while (match !== null) {
        const subExpression = match[1];
        const subExpressionValue = evaluateExpression(subExpression);
        expression = expression.replace(
          `(${subExpression})`,
          subExpressionValue.toString()
        );
        match = regex.exec(expression);
      }

      result = evaluateExpression(expression);
      return result;
    }

    if (
      expression.includes("+") ||
      expression.includes("-") ||
      expression.includes("×") ||
      expression.includes("÷") ||
      expression.includes("/")
    ) {
      const parts = expression.split(/([-+×÷/])/);
      let result = Number(parts[0]);

      for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i].trim();
        const operand = Number(parts[i + 1]);

        switch (operator) {
          case "+":
            result += operand;
            break;
          case "-":
            result -= operand;
            break;
          case "×":
            result *= operand;
            break;
          case "÷":
          case "/":
            result /= operand;
            break;
          default:
            throw new Error("Syntax error.");
        }
      }

      return result;
    } else if (expression.startsWith("cos(")) {
      const innerExpression = expression.substring(4, expression.length - 1);
      const innerResult = evaluateExpression(innerExpression);
      return Math.cos(innerResult);
    } else if (expression.startsWith("sin(")) {
      const innerExpression = expression.substring(4, expression.length - 1);
      const innerResult = evaluateExpression(innerExpression);
      return Math.sin(innerResult);
    } else if (expression.startsWith("tan(")) {
      const innerExpression = expression.substring(4, expression.length - 1);
      const innerResult = evaluateExpression(innerExpression);
      return Math.tan(innerResult);
    } else if (expression.startsWith("ln(")) {
      const innerExpression = expression.substring(3, expression.length - 1);
      const innerResult = evaluateExpression(innerExpression);
      return Math.log(innerResult);
    } else if (expression.startsWith("log(")) {
      const innerExpression = expression.substring(4, expression.length - 1);
      const innerResult = evaluateExpression(innerExpression);
      return Math.log10(innerResult);
    } else if (expression.startsWith("√")) {
      const innerExpression = expression.substring(1);
      const innerResult = evaluateExpression(innerExpression);
      return Math.sqrt(innerResult);
    } else if (expression.startsWith("³√")) {
      const innerExpression = expression.substring(2);
      const innerResult = evaluateExpression(innerExpression);
      return Math.cbrt(innerResult);
    } else if (expression.includes("^")) {
      const [base, exponent] = expression.split("^");
      const evaluatedBase = evaluateExpression(base);
      const evaluatedExponent = evaluateExpression(exponent);
      return Math.pow(evaluatedBase, evaluatedExponent);
    } else if (expression.endsWith("²")) {
      const innerExpression = expression.slice(0, -1);
      const innerResult = evaluateExpression(innerExpression);
      return innerResult * innerResult;
    } else if (expression.endsWith("³")) {
      const innerExpression = expression.slice(0, -1);
      const innerResult = evaluateExpression(innerExpression);
      return innerResult * innerResult * innerResult;
    } else if (expression.includes("π")) {
      const innerExpression = expression.slice(0, -1);
      let innerResult = evaluateExpression(innerExpression);
      return (innerResult = Math.PI);
    } else if (expression.includes("e")) {
      const innerExpression = expression.slice(0, -1);
      let innerResult = evaluateExpression(innerExpression);
      return (innerResult = Math.E);
    } else if (expression.includes("⁻¹")) {
      const innerExpression = expression.slice(0, -1);
      const innerResult = evaluateExpression(innerExpression);
      return 1 / innerResult;
    } else if (expression.includes("!")) {
      const innerExpression = expression.substring(0, expression.length - 1);
      const innerResult = evaluateExpression(innerExpression);
      let factorial = 1;
      for (let i = 2; i <= innerResult; i++) {
        factorial *= i;
      }
      return factorial;
    } else {
      return parseFloat(expression);
    }
  };

  const handlebuttonclickEqual = (value: string) => {
    if (value === "=") {
      let result = "";
      try {
        result = evaluateExpression(display).toString();
      } catch (error) {
        result = "Error";
      }
      setresult(result);
    } else {
      setdisplay(display + value);
    }
  };
  const handleclear = () => {
    setdisplay("");
    setresult("");
  };

  const backspacehandlebutton = () => {
    setdisplay(display.slice(0, -1));
    if (display === "cos(") {
      setdisplay(display.slice(0, -4));
    } else if (display === "sin(") {
      setdisplay(display.slice(0, -4));
    } else if (display === "log(") {
      setdisplay(display.slice(0, -4));
    } else if (display === "ln(") {
      setdisplay(display.slice(0, -3));
    } else if (display === "cos(") {
      setdisplay(display.slice(0, -4));
    } else if (display === "tan(") {
      setdisplay(display.slice(0, -4));
    } else if (display === "³√") {
      setdisplay(display.slice(0, -3));
    }

    setresult("");
  };

  const handlechanged = () => {
    const value = parseFloat(result);

    switch (buttontext) {
      case "RAD":
        setbuttontext("GRA");
        break;
      case "GRA":
        setbuttontext("DEG");
        break;
      case "DEG":
        setbuttontext("RAD");
        break;
      default:
        setbuttontext("RAD");
    }
    if (buttontext === "RAD") {
      setresult(result);
    } else if (buttontext === "DEG") {
      const deg = parseFloat(result) * (Math.PI / 180);
      setresult(deg.toString());
    } else if (buttontext === "GRA") {
      let deg = parseFloat(result) * (Math.PI / 180);
      const gra = deg * (9 / 10);
      setresult(gra.toString());
    }
  };

  const switchValue = () => {
    setIsActive(!isActive);
    const tempValue = firstUnit;
    setFirstUnit(secondUnit);
    setSecondUnit(tempValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBlink((prevState) => !prevState);
    }, 600);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <>
        <IonToolbar color={"tertiary"}>
          <IonButton slot="start" fill="clear">
            <IonBackButton
              defaultHref="/Converter"
              color={"secondary"}
            ></IonBackButton>
          </IonButton>
          <IonTitle> Fuel Consumption</IonTitle>
        </IonToolbar>
        <IonToolbar style={{ display: "flex" }} color={"dark"}>
          <IonItem
            style={{ width: "50%" }}
            className="popover"
            slot="start"
            color={"primary"}
          >
            <IonLabel></IonLabel>
            <IonSelect
              slot="start"
              value={firstUnit}
              interface="popover"
              labelPlacement="floating"
              fill="solid"
              style={{ color: "white" }}
              onIonChange={(e) => setFirstUnit(e.detail.value)}
            >
              {FuelUnits.map((unit) => (
                <IonSelectOption key={unit} value={unit} className="option">
                  {unit}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonButton
            color={"warning"}
            onClick={switchValue}
            style={{ marginLeft: "15px" }}
            className={isActive ? "pivot-button active" : "pivot-button"}
          >
            <IonIcon icon={swapHorizontal} className="swap"></IonIcon>
          </IonButton>
          <IonItem
            style={{ width: "50%" }}
            className="popover1"
            slot="end"
            color={"primary"}
          >
            <IonLabel></IonLabel>
            <IonSelect
              value={secondUnit}
              interface="popover"
              labelPlacement="floating"
              fill="solid"
              style={{ color: "white" }}
              onIonChange={(e) => setSecondUnit(e.detail.value)}
            >
              {FuelUnits.map((unit) => (
                <IonSelectOption key={unit} value={unit} className="option">
                  {unit}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonToolbar>
        <IonGrid class="bigcontainer">
          <IonGrid className="backscreen">
            <IonGrid className="c1">
              <IonInput
                type="text"
                style={inputStyle}
                id="screen1a"
                onIonChange={(e) => setdisplay(e.detail.value!)}
              >
                {display}
                {showBlink ? "|" : ""}
              </IonInput>

              <IonLabel className="u1">{firstUnit}</IonLabel>
            </IonGrid>
            <IonGrid className="c2">
              <IonInput
                type="text"
                style={inputStyle}
                id="screen2a"
                value={result}
                readonly
              />
              <IonLabel className="u2">{secondUnit}</IonLabel>
            </IonGrid>
          </IonGrid>
          <div className="container2">
            <IonRow>
              <IonButton
                className="brad"
                onClick={handlechanged}
                color={"medium"}
                fill="outline"
              >
                {buttontext}
              </IonButton>
              <button onClick={increasefontsize} className="sizebutton">
                +
              </button>
              <button onClick={decreasefontsize} className="sizebutton">
                -
              </button>
            </IonRow>

            <div className="row">
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("/")}
              >
                <sup>&#8718;</sup>&frasl;<sub>&#8718;</sub>
              </IonButton>
              <IonButton className="br1"></IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("³√")}
              >
                <sup>3</sup> &#8730;
              </IonButton>
              <IonButton className="br1" onClick={() => handlebuttonclick("^")}>
                <p>
                  x<sup>&#8718;</sup>
                </p>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("⁻¹")}
              >
                <p>
                  x<sup>-1</sup>
                </p>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("ln(")}
              >
                ln
              </IonButton>
            </div>
            <div className="row">
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("³")}
              >
                x<sup>3</sup>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual(`²`)}
              >
                <p>
                  x<sup>2</sup>
                </p>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("cos(")}
              >
                cos
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("sin(")}
              >
                sin
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclickEqual("tan(")}
              >
                tan
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("log(")}
              >
                Log
              </IonButton>
            </div>
            <div className="row">
              <IonButton
                className="br2"
                onClick={() => handlebuttonclickEqual("√")}
              >
                &#8730;
              </IonButton>
              <IonButton
                id="pibutton"
                className="br2"
                onClick={() => handlebuttonclick("π")}
              >
                &#960;
              </IonButton>
              <IonButton
                className="br2"
                onClick={() => handlebuttonclickEqual("!")}
              >
                !
              </IonButton>
              <IonButton
                onClick={backspacehandlebutton}
                className="br1"
                id="delbutton"
                color={"warning"}
              >
                del
              </IonButton>
              <IonButton
                className="br1"
                onClick={handleclear}
                id="acbutton"
                color={"danger"}
              >
                ac
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br3" onClick={() => handlebuttonclick("7")}>
                7
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("8")}>
                8
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("9")}>
                9
              </IonButton>
              <IonButton
                className="br2"
                onClick={() => handlebuttonclickEqual("-")}
              >
                -
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick("×")}>
                &times;
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br3" onClick={() => handlebuttonclick("4")}>
                4
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("5")}>
                5
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("6")}>
                6
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick("+")}>
                +
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick("÷")}>
                &#247;
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br3" onClick={() => handlebuttonclick("1")}>
                1
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("2")}>
                2
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("3")}>
                3
              </IonButton>
              <IonButton className="br2">=</IonButton>
              <IonButton
                className="br2"
                onClick={() => handlebuttonclick("Ans")}
              >
                An
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br3" onClick={() => handlebuttonclick("0")}>
                0
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick("(")}>
                &#40;
              </IonButton>
              <IonButton className="br3" onClick={() => handlebuttonclick(")")}>
                &#41;
              </IonButton>
              <IonButton
                className="br2"
                onClick={() => handlebuttonclickEqual("e")}
              >
                <i>e</i>
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick(".")}>
                .
              </IonButton>
            </div>
          </div>
        </IonGrid>
      </>
    </>
  );
};
export default Calconvt4;
