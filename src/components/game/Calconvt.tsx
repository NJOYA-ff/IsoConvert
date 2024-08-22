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
const lengthUnits = [
  "km",
  "hm",
  "dam",
  "m",
  "dm",
  "cm",
  "mm",
  "μm",
  "nm",
  "Å",
  "pm",
  "in",
  "ft",
  "yd",
  "hh",
  "mi",
];
const Calconvt: React.FC = () => {
  const [result, setresult] = useState<string>("");
  const [display, setdisplay] = useState<string>("");
  const [buttontext, setbuttontext] = useState<string>("RAD");
  const [firstUnit, setFirstUnit] = useState<string>("m");
  const [secondUnit, setSecondUnit] = useState<string>("km");
  const [showBlink, setShowBlink] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState(2.3);
  const [isActive, setIsActive] = useState(false);
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

  const convertlenght = () => {
    //meter  convertion to others units
    if (firstUnit === "km" && secondUnit === "m") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "m" && secondUnit === "km") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "hm" && secondUnit === "m") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "m" && secondUnit === "hm") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "dam" && secondUnit === "m") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "m" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "m" && secondUnit === "m") {
      setresult((evaluateExpression(display) * 1).toString());
    } else if (firstUnit === "m" && secondUnit === "m") {
      setresult((evaluateExpression(display) / 1).toString());
    } else if (firstUnit === "dm" && secondUnit === "m") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "m" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "cm" && secondUnit === "m") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "m" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "mm" && secondUnit === "m") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "m" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "μm" && secondUnit === "m") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "m" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "nm" && secondUnit === "m") {
      setresult((evaluateExpression(display) / 1000000000).toString());
    } else if (firstUnit === "m" && secondUnit === "nm") {
      const value = evaluateExpression(display);
      const re = value * 1000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "Å" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value / 10000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "Å") {
      const value = evaluateExpression(display);
      const re = value * 10000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "pm" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value / 1000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "pm") {
      const value = evaluateExpression(display);
      const re = value * 1000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "mi" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value * 1609.344;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "mi") {
      const value = evaluateExpression(display);
      const re = value / 1609.344;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "in" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value * 0.0254;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "in") {
      const value = evaluateExpression(display);
      const re = value / 0.0254;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "ft" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value * 0.3048;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "ft") {
      const value = evaluateExpression(display);
      const re = value / 0.3048;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "yd" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value * 0.9144;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "yd") {
      const value = evaluateExpression(display);
      const re = value / 0.9144;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hh" && secondUnit === "m") {
      const value = evaluateExpression(display);
      const re = value * 0.1016;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "m" && secondUnit === "hh") {
      const value = evaluateExpression(display);
      const re = value / 0.1016;
      const Re = re.toString();
      setresult(Re);
    }
    //km convertion to others units
    if (firstUnit === "hm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 10;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 10;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "dam" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 100;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "dam") {
      const value = evaluateExpression(display);
      const re = value * 100;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value * 1;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 1;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "dm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 10000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "dm") {
      const value = evaluateExpression(display);
      const re = value * 10000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "cm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 100000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "cm") {
      const value = evaluateExpression(display);
      const re = value * 100000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "mm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 1000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "mm") {
      const value = evaluateExpression(display);
      const re = value * 1000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "μm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 1000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "μm") {
      const value = evaluateExpression(display);
      const re = value * 1000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "nm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 1000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "nm") {
      const value = evaluateExpression(display);
      const re = value * 1000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "Å" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 10000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "Å") {
      const value = evaluateExpression(display);
      const re = value * 10000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "pm" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value / 1000000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "pm") {
      const value = evaluateExpression(display);
      const re = value * 1000000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "mi" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value * 1.609344;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "mi") {
      const value = evaluateExpression(display);
      const re = value / 1.609344;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "in" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value * 0.0000254;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "in") {
      const value = evaluateExpression(display);
      const re = value / 0.0000254;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "ft" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value * 0.0003048;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "ft") {
      const value = evaluateExpression(display);
      const re = value / 0.0003048;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "yd" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value * 0.0009144;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "yd") {
      const value = evaluateExpression(display);
      const re = value / 0.0009144;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hh" && secondUnit === "km") {
      const value = evaluateExpression(display);
      const re = value * 0.0001016;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "km" && secondUnit === "hh") {
      const value = evaluateExpression(display);
      const re = value / 0.0001016;
      const Re = re.toString();
      setresult(Re);
    }
    //hm convertion to others units
    if (firstUnit === "dam" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 10;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "dam") {
      const value = evaluateExpression(display);
      const re = value * 10;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 1;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 1;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "dm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 1000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "dm") {
      const value = evaluateExpression(display);
      const re = value * 1000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "cm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 10000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "cm") {
      const value = evaluateExpression(display);
      const re = value * 10000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "mm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 100000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "mm") {
      const value = evaluateExpression(display);
      const re = value * 100000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "μm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 100000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "μm") {
      const value = evaluateExpression(display);
      const re = value * 100000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "nm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 100000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "nm") {
      const value = evaluateExpression(display);
      const re = value * 100000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "Å" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 1000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "Å") {
      const value = evaluateExpression(display);
      const re = value * 1000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "pm" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value / 100000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "pm") {
      const value = evaluateExpression(display);
      const re = value * 100000000000000;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "mi" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 16.09344;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "mi") {
      const value = evaluateExpression(display);
      const re = value / 16.09344;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "in" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 0.000254;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "in") {
      const value = evaluateExpression(display);
      const re = value / 0.000254;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "ft" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 0.003048;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "ft") {
      const value = evaluateExpression(display);
      const re = value / 0.003048;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "yd" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 0.009144;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "yd") {
      const value = evaluateExpression(display);
      const re = value / 0.009144;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hh" && secondUnit === "hm") {
      const value = evaluateExpression(display);
      const re = value * 0.001016;
      const Re = re.toString();
      setresult(Re);
    } else if (firstUnit === "hm" && secondUnit === "hh") {
      const value = evaluateExpression(display);
      const re = value / 0.001016;
      const Re = re.toString();
      setresult(Re);
    }
    //dam convertion to other units
    if (firstUnit === "dam" && secondUnit === "dam") {
      setresult((evaluateExpression(display) * 1).toString());
    } else if (firstUnit === "dam" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 1).toString());
    } else if (firstUnit === "dm" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "dam" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "cm" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "dam" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "mm" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "dam" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "μm" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 10000000).toString());
    } else if (firstUnit === "dam" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 10000000).toString());
    } else if (firstUnit === "nm" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 10000000000).toString());
    } else if (firstUnit === "dam" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 10000000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 100000000000).toString());
    } else if (firstUnit === "dam" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 100000000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "dam") {
      setresult((evaluateExpression(display) / 10000000000000).toString());
    } else if (firstUnit === "dam" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 10000000000000).toString());
    } else if (firstUnit === "mi" && secondUnit === "dam") {
      setresult((evaluateExpression(display) * 160.9344).toString());
    } else if (firstUnit === "dam" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 160.9344).toString());
    } else if (firstUnit === "in" && secondUnit === "dam") {
      setresult((evaluateExpression(display) * 0.00254).toString());
    } else if (firstUnit === "dam" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 0.00254).toString());
    } else if (firstUnit === "ft" && secondUnit === "dam") {
      setresult((evaluateExpression(display) * 0.03048).toString());
    } else if (firstUnit === "dam" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 0.03048).toString());
    } else if (firstUnit === "yd" && secondUnit === "dam") {
      setresult((evaluateExpression(display) * 0.09144).toString());
    } else if (firstUnit === "dam" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 0.09144).toString());
    } else if (firstUnit === "hh" && secondUnit === "dam") {
      setresult((evaluateExpression(display) * 0.01016).toString());
    } else if (firstUnit === "dam" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 0.01016).toString());
    }
    //dm convertion to other units
    if (firstUnit === "dm" && secondUnit === "dm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "dm" && secondUnit === "dm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "cm" && secondUnit === "dm") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "dm" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "mm" && secondUnit === "dm") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "dm" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "μm" && secondUnit === "dm") {
      setresult((evaluateExpression(display) / 100000).toString());
    } else if (firstUnit === "dm" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 100000).toString());
    } else if (firstUnit === "nm" && secondUnit === "dm") {
      setresult((evaluateExpression(display) / 100000000).toString());
    } else if (firstUnit === "dm" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 100000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "dm") {
      setresult((evaluateExpression(display) / 1000000000).toString());
    } else if (firstUnit === "dm" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 1000000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "dm") {
      setresult((evaluateExpression(display) / 100000000000).toString());
    } else if (firstUnit === "dm" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 100000000000).toString());
    } else if (firstUnit === "mi" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 16093.44).toString());
    } else if (firstUnit === "dm" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 16093.44).toString());
    } else if (firstUnit === "in" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 0.254).toString());
    } else if (firstUnit === "dm" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 0.254).toString());
    } else if (firstUnit === "ft" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 3.048).toString());
    } else if (firstUnit === "dm" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 3.048).toString());
    } else if (firstUnit === "yd" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 9.144).toString());
    } else if (firstUnit === "dm" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 9.144).toString());
    } else if (firstUnit === "hh" && secondUnit === "dm") {
      setresult((evaluateExpression(display) * 1.016).toString());
    } else if (firstUnit === "dm" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 1.016).toString());
    }
    //cm convertion to other units
    if (firstUnit === "cm" && secondUnit === "cm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "cm" && secondUnit === "cm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mm" && secondUnit === "cm") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "cm" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "μm" && secondUnit === "cm") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "cm" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "nm" && secondUnit === "cm") {
      setresult((evaluateExpression(display) / 10000000).toString());
    } else if (firstUnit === "cm" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 10000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "cm") {
      setresult((evaluateExpression(display) / 100000000).toString());
    } else if (firstUnit === "cm" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 100000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "cm") {
      setresult((evaluateExpression(display) / 10000000000).toString());
    } else if (firstUnit === "cm" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 10000000000).toString());
    } else if (firstUnit === "mi" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 160934.4).toString());
    } else if (firstUnit === "cm" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 160934.4).toString());
    } else if (firstUnit === "in" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 2.54).toString());
    } else if (firstUnit === "cm" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 2.54).toString());
    } else if (firstUnit === "ft" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 30.48).toString());
    } else if (firstUnit === "cm" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 30.48).toString());
    } else if (firstUnit === "yd" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 91.44).toString());
    } else if (firstUnit === "cm" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 91.44).toString());
    } else if (firstUnit === "hh" && secondUnit === "cm") {
      setresult((evaluateExpression(display) * 10.16).toString());
    } else if (firstUnit === "cm" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 10.16).toString());
    }
    //mm convertion to others units
    if (firstUnit === "mm" && secondUnit === "mm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mm" && secondUnit === "mm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "μm" && secondUnit === "mm") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "mm" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "nm" && secondUnit === "mm") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "mm" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "mm") {
      setresult((evaluateExpression(display) / 10000000).toString());
    } else if (firstUnit === "mm" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 10000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "mm") {
      setresult((evaluateExpression(display) / 1000000000).toString());
    } else if (firstUnit === "mm" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 1000000000).toString());
    } else if (firstUnit === "mi" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 1609344).toString());
    } else if (firstUnit === "mm" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 1609344).toString());
    } else if (firstUnit === "in" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 25.4).toString());
    } else if (firstUnit === "mm" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 25.4).toString());
    } else if (firstUnit === "ft" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 304.8).toString());
    } else if (firstUnit === "mm" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 304.8).toString());
    } else if (firstUnit === "yd" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 914.4).toString());
    } else if (firstUnit === "mm" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 914.4).toString());
    } else if (firstUnit === "hh" && secondUnit === "mm") {
      setresult((evaluateExpression(display) * 101.6).toString());
    } else if (firstUnit === "mm" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 101.6).toString());
    }
    //μm convertion to other units
    if (firstUnit === "μm" && secondUnit === "μm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "μm" && secondUnit === "μm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "nm" && secondUnit === "μm") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "μm" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "Å" && secondUnit === "μm") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "μm" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "pm" && secondUnit === "μm") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "μm" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "mi" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 1609344000).toString());
    } else if (firstUnit === "μm" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 1609344000).toString());
    } else if (firstUnit === "in" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 25400).toString());
    } else if (firstUnit === "μm" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 25400).toString());
    } else if (firstUnit === "ft" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 304800).toString());
    } else if (firstUnit === "μm" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 304800).toString());
    } else if (firstUnit === "yd" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 914400).toString());
    } else if (firstUnit === "μm" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 914400).toString());
    } else if (firstUnit === "hh" && secondUnit === "μm") {
      setresult((evaluateExpression(display) * 101600).toString());
    } else if (firstUnit === "μm" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 101600).toString());
    }
    //nm convertion to other units
    if (firstUnit === "nm" && secondUnit === "nm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "nm" && secondUnit === "nm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "Å" && secondUnit === "nm") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "nm" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "pm" && secondUnit === "nm") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "nm" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "mi" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 1609344000000).toString());
    } else if (firstUnit === "nm" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 1609344000000).toString());
    } else if (firstUnit === "in" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 25400000).toString());
    } else if (firstUnit === "nm" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 25400000).toString());
    } else if (firstUnit === "ft" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 304800000).toString());
    } else if (firstUnit === "nm" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 304800000).toString());
    } else if (firstUnit === "yd" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 914400000).toString());
    } else if (firstUnit === "nm" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 914400000).toString());
    } else if (firstUnit === "hh" && secondUnit === "nm") {
      setresult((evaluateExpression(display) * 101600000).toString());
    } else if (firstUnit === "nm" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 101600000).toString());
    }
    //Å convertion to other units
    if (firstUnit === "Å" && secondUnit === "Å") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "Å" && secondUnit === "Å") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "pm" && secondUnit === "Å") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "Å" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "mi" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 16093440000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 16093440000000).toString());
    } else if (firstUnit === "in" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 254000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 254000000).toString());
    } else if (firstUnit === "ft" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 3048000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 3048000000).toString());
    } else if (firstUnit === "yd" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 9144000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 9144000000).toString());
    } else if (firstUnit === "hh" && secondUnit === "Å") {
      setresult((evaluateExpression(display) * 1016000000).toString());
    } else if (firstUnit === "Å" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 1016000000).toString());
    }
    // pm convertion to other units
    if (firstUnit === "pm" && secondUnit === "pm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "pm" && secondUnit === "pm") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mi" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 1609344000000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "mi") {
      setresult((evaluateExpression(display) / 1609344000000000).toString());
    } else if (firstUnit === "in" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 25400000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 25400000000).toString());
    } else if (firstUnit === "ft" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 304800000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 304800000000).toString());
    } else if (firstUnit === "yd" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 914400000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 914400000000).toString());
    } else if (firstUnit === "hh" && secondUnit === "pm") {
      setresult((evaluateExpression(display) * 101600000000).toString());
    } else if (firstUnit === "pm" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 101600000000).toString());
    }
    // mile convertion to other units
    if (firstUnit === "mi" && secondUnit === "mi") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mi" && secondUnit === "mi") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "in" && secondUnit === "mi") {
      setresult((evaluateExpression(display) * 63360).toString());
    } else if (firstUnit === "mi" && secondUnit === "in") {
      setresult((evaluateExpression(display) / 63360).toString());
    } else if (firstUnit === "ft" && secondUnit === "mi") {
      setresult((evaluateExpression(display) * 5280).toString());
    } else if (firstUnit === "mi" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 5280).toString());
    } else if (firstUnit === "yd" && secondUnit === "mi") {
      setresult((evaluateExpression(display) * 1760).toString());
    } else if (firstUnit === "mi" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 1760).toString());
    } else if (firstUnit === "hh" && secondUnit === "mi") {
      setresult((evaluateExpression(display) * 15840).toString());
    } else if (firstUnit === "mi" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 15840).toString());
    }
    // inch convertion to other units
    if (firstUnit === "in" && secondUnit === "in") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "in" && secondUnit === "in") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ft" && secondUnit === "in") {
      setresult((evaluateExpression(display) * 12).toString());
    } else if (firstUnit === "in" && secondUnit === "ft") {
      setresult((evaluateExpression(display) / 12).toString());
    } else if (firstUnit === "yd" && secondUnit === "in") {
      setresult((evaluateExpression(display) * 36).toString());
    } else if (firstUnit === "in" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 36).toString());
    } else if (firstUnit === "hh" && secondUnit === "in") {
      setresult((evaluateExpression(display) * 4).toString());
    } else if (firstUnit === "in" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 4).toString());
    }
    //foot convertion to other units
    if (firstUnit === "ft" && secondUnit === "ft") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ft" && secondUnit === "ft") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "yd" && secondUnit === "ft") {
      setresult((evaluateExpression(display) * 3).toString());
    } else if (firstUnit === "ft" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 3).toString());
    } else if (firstUnit === "hh" && secondUnit === "ft") {
      setresult((evaluateExpression(display) * 3).toString());
    } else if (firstUnit === "ft" && secondUnit === "hh") {
      setresult((evaluateExpression(display) / 3).toString());
    }
    //yard convertion to other units
    if (firstUnit === "yd" && secondUnit === "yd") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "yd" && secondUnit === "yd") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "hh" && secondUnit === "yd") {
      setresult((evaluateExpression(display) / 9).toString());
    } else if (firstUnit === "yd" && secondUnit === "hh") {
      setresult((evaluateExpression(display) * 9).toString());
    }
    // hand
    if (firstUnit === "hh" && secondUnit === "hh") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "hh" && secondUnit === "hh") {
      setresult(evaluateExpression(display).toString());
    }
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
          <IonTitle>Length</IonTitle>
        </IonToolbar>
        <IonToolbar color={"dark"}>
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
              onIonChange={(e) => setFirstUnit(e.detail.value)}
            >
              {lengthUnits.map((unit) => (
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
              onIonChange={(e) => setSecondUnit(e.detail.value)}
            >
              {lengthUnits.map((unit) => (
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
                style={inputStyle}
                type="text"
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
                id="screen2a"
                style={inputStyle}
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
              <IonButton className="br2" onClick={() => convertlenght()}>
                =
              </IonButton>
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
export default Calconvt;
