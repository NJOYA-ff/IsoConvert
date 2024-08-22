import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import OK2 from "../asset/image/OK2.jpg";
import React, { useEffect, useState } from "react";
import "./calcostyle.scss";

import { settingsOutline, swapHorizontalOutline } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
const Calco: React.FC = () => {
  const [result, setresult] = useState<string>("");
  const [display, setdisplay] = useState<string>("");
  const [buttontext, setbuttontext] = useState<string>("RAD");
  const [fontSize, setFontSize] = useState(2.3);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showBlink, setShowBlink] = useState<boolean>(true);
  const [Message, setMessage] = useState("");
  const [message, setmessage] = useState("");

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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

          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);
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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
          const modifiedSubExpression = subExpression
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E");
          const subExpressionValue = eval(modifiedSubExpression);

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
        const modifiedSubExpression = subExpression
          .replace(/π/g, "Math.PI")
          .replace(/e/g, "Math.E");
        const subExpressionValue = eval(modifiedSubExpression);

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
        const modifiedSubExpression = subExpression
          .replace(/π/g, "Math.PI")
          .replace(/e/g, "Math.E");
        const subExpressionValue = eval(modifiedSubExpression);

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
        const modifiedSubExpression = subExpression
          .replace(/π/g, "Math.PI")
          .replace(/e/g, "Math.E");
        const subExpressionValue = eval(modifiedSubExpression);

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
  const History = useHistory();

  const handlebuttonclickequal = (value: string) => {
    if (value === "=") {
      let result = "";
      try {
        result = evaluateExpression(display).toString();
      } catch (error) {
        result = "syntax Error";
      }
      setresult(result);
    } else {
      setdisplay(display + value);
    }
    const resultstring: string = JSON.stringify(result);
    localStorage.setItem("calculationResult", resultstring);
    const storesultString = localStorage.getItem("calculationResult");
    if (storesultString) {
      const storedResult = eval(storesultString);
      console.log(storedResult);
      setmessage(storedResult);
    } else {
      console.log("No stored result found");
    }
    const diplaystring: string = JSON.stringify(display);
    localStorage.setItem("calculationDisplay", diplaystring);
    const storedisplayString = localStorage.getItem("calculationDisplay");
    if (storedisplayString) {
      const storedDisplay = eval(storedisplayString);
      console.log(storedDisplay);
      setMessage(storedDisplay);
    } else {
      console.log("No stored display found");
    }
  };

  const handlehist = () => {
    const State = { Message, message };
    const stateString = JSON.stringify(State);
    History.push("/History", { state: stateString });
  };

  const handleAns = (value: string) => {
    const storesultString = localStorage.getItem("calculationResult");
    if (display === "Ans" && storesultString) {
      const storedResult = eval(storesultString);
      setresult(storedResult.toString());
    } else {
      setdisplay(display + value);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBlink((prevState) => !prevState);
    }, 500);

    return () => clearInterval(interval);
  }, []);
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
    } else if (display === "Ans") {
      setdisplay(display.slice(0, -4));
    }

    setresult("");
  };

  const handleChange = () => {
    const value = parseFloat(result);

    switch (buttontext) {
      case "RAD":
        setbuttontext("GRA");
        setresult((value * (180 / Math.PI)).toString());
        break;
      case "GRA":
        setbuttontext("DEG");
        setresult((value * (Math.PI / 180) * (10 / 9)).toString());
        break;
      case "DEG":
        setbuttontext("RAD");
        setresult((value * (Math.PI / 180)).toString());
        break;
      default:
        setbuttontext("RAD");
        setresult(result);
        break;
    }
  };
  const increasefontsize = () => {
    setFontSize(fontSize + 0.1);
  };
  const decreasefontsize = () => {
    setFontSize(fontSize - 0.1);
  };
  const inputStyle = {
    fontSize: `${fontSize}em`,
  };

  function handlecleare() {
    console.clear();
    localStorage.clear();
  }
  return (
    <>
      <>
        <IonGrid class="bigcontainer">
          <IonGrid className="backscreen">
            <IonInput style={inputStyle} type="text" id="screen1" readonly>
              {display}
              {showBlink ? "|" : ""}
            </IonInput>
            <IonInput
              style={inputStyle}
              type="text"
              id="screen2"
              value={result}
              readonly
            />
          </IonGrid>
          <div className="container">
            <IonRow>
              <IonMenuButton color={"medium"}></IonMenuButton>
              <Link to="/MathFormulars">
                <button className="sizebutton">Σ</button>
              </Link>

              <Link to="/Setting">
                <button className="sizebutton">
                  <IonIcon className="stt" icon={settingsOutline}></IonIcon>
                </button>
              </Link>

              <button onClick={increasefontsize} className="sizebutton">
                +
              </button>
              <button onClick={decreasefontsize} className="sizebutton">
                <h1 className="dt">_</h1>
              </button>
              <IonButton
                className="brad"
                onClick={handleChange}
                color={"medium"}
                fill="outline"
              >
                {buttontext}
              </IonButton>
            </IonRow>

            <div className="row">
              <IonButton className="br" color={"dark"}>
                shi
              </IonButton>
              <IonButton className="br" color={"dark"}>
                Al
              </IonButton>
              <IonButton className="br1">&#8882;</IonButton>
              <IonButton className="br1">&#8883;</IonButton>
              <IonButton className="br1" onClick={handlehist}>
                hist
              </IonButton>
              <IonButton className="br1" onClick={handlecleare}>
                <i>2nd</i>
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br1" onClick={() => handlebuttonclick("/")}>
                <sup>&#8718;</sup>&frasl;<sub>&#8718;</sub>
              </IonButton>
              <IonButton
                className="br1"
                color={""}
                onClick={() => handlebuttonclick("³√")}
              >
                <sup>3</sup> &#8730;
              </IonButton>
              <IonButton className="br1" onClick={() => handlebuttonclick("^")}>
                <p>
                  x<sup>&#8718;</sup>
                </p>
              </IonButton>
              <IonButton className="br1" onClick={() => handlebuttonclick("!")}>
                <h3> !</h3>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("⁻¹")}
              >
                <p>
                  x<sup>-1</sup>
                </p>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("ln(")}
              >
                Ln
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br1" onClick={() => handlebuttonclick("³")}>
                x <sup>3</sup>
              </IonButton>
              <IonButton className="br1" onClick={() => handlebuttonclick(`²`)}>
                x <sup>2</sup>
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("cos(")}
              >
                Cos
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("sin(")}
              >
                Sin
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("tan(")}
              >
                Tan
              </IonButton>
              <IonButton
                className="br1"
                onClick={() => handlebuttonclick("log(")}
              >
                Log
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br2" onClick={() => handlebuttonclick("√")}>
                &#8730;
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick("(")}>
                &#40;
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick(")")}>
                &#41;
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
              <IonButton className="br2" onClick={() => handlebuttonclick("-")}>
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

              <IonButton
                className="br2"
                onClick={() => handlebuttonclickequal("=")}
              >
                =
              </IonButton>

              <IonButton className="br2" onClick={() => handleAns("Ans")}>
                An
              </IonButton>
            </div>
            <div className="row">
              <IonButton className="br3" onClick={() => handlebuttonclick("0")}>
                0
              </IonButton>
              <IonButton
                id="pibutton"
                className="br3"
                onClick={() => handlebuttonclick("π")}
              >
                &pi;
              </IonButton>
              <IonButton className="br3">s</IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick("e")}>
                <i>e</i>
              </IonButton>
              <IonButton className="br2" onClick={() => handlebuttonclick(".")}>
                <h1 className="dot">.</h1>
              </IonButton>
            </div>
          </div>
        </IonGrid>
      </>
    </>
  );
};
export default Calco;
