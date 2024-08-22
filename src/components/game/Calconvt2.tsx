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
  IonButtons,
} from "@ionic/react";
import { swapHorizontal } from "ionicons/icons";
import React, { useEffect, useState } from "react";
const lengthUnits = [
  "hL",
  "daL",
  "cL",
  "dL",
  "L",
  "mL",
  "bl imp",
  "bbl",
  "bu",
  "bkt",
  "pk",
  "gal U.K",
  "gal U.S l",
  "gal U.S d",
  "qt",
  "pt U.K",
  "pt U.S",
  "cup",
  "gi",
  "fl oz U.K",
  "fl oz U.S",
  "tbsp imp",
  "tbsp mtc",
  "tsp imp",
  "tsp mtc",
  "fl dr",
  "fl s",
  "gtt imp",
  "gtt mtc",
  "min",
  "km³",
  "m³",
  "dm³",
  "cm³",
  "mm³",
  "mi³",
  "yd³",
  "ft³",
  "in³",
];
const Calconvt2: React.FC = () => {
  const [result, setresult] = useState<string>("");
  const [display, setdisplay] = useState<string>("");
  const [buttontext, setbuttontext] = useState<string>("RAD");
  const [firstUnit, setFirstUnit] = useState<string>("hL");
  const [secondUnit, setSecondUnit] = useState<string>("L");
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
  function handlebuttonclick(value: string) {
    setdisplay(display + value);
  }
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

  const convertArea = () => {
    //metersquare  convertion to others units
    if (firstUnit === "km²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "m²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "ha" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "m²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "daa" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 1000).toString());
    } else if (firstUnit === "m²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 1000).toString());
    } else if (firstUnit === "m²" && secondUnit === "a") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "a" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "m²" && secondUnit === "m²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "m²" && secondUnit === "m²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "dm²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "m²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "cm²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "m²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "mm²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "m²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "mi²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 2589988.110336).toString());
    } else if (firstUnit === "m²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 2589988.110336).toString());
    } else if (firstUnit === "ac" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 4046.8564224).toString());
    } else if (firstUnit === "m²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 4046.8564224).toString());
    } else if (firstUnit === "ro" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 1011.7141056).toString());
    } else if (firstUnit === "m²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 1011.7141056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 404.68564224).toString());
    } else if (firstUnit === "m²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 404.68564226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 25.29285264).toString());
    } else if (firstUnit === "m²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 25.29285264).toString());
    } else if (firstUnit === "sq" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 9.290304).toString());
    } else if (firstUnit === "m²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 9.290304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 0.83612736).toString());
    } else if (firstUnit === "m²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 0.83612736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 0.09290304).toString());
    } else if (firstUnit === "m²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 0.09290304).toString());
    } else if (firstUnit === "in²" && secondUnit === "m²") {
      setresult((evaluateExpression(display) * 0.00064516).toString());
    } else if (firstUnit === "m²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 0.00064516).toString());
    }
    //km² convertion to others units
    if (firstUnit === "ha" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.01).toString());
    } else if (firstUnit === "km²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) / 0.01).toString());
    } else if (firstUnit === "daa" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.001).toString());
    } else if (firstUnit === "km²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 0.001).toString());
    } else if (firstUnit === "a" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.0001).toString());
    } else if (firstUnit === "km²" && secondUnit === "a") {
      setresult((evaluateExpression(display) / 0.0001).toString());
    } else if (firstUnit === "km²" && secondUnit === "km²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "km²" && secondUnit === "km²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "dm²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 100000000).toString());
    } else if (firstUnit === "km²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) / 100000000).toString());
    } else if (firstUnit === "cm²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 10000000000).toString());
    } else if (firstUnit === "km²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) / 10000000000).toString());
    } else if (firstUnit === "mm²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 1000000000000).toString());
    } else if (firstUnit === "km²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) / 1000000000000).toString());
    } else if (firstUnit === "mi²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 2.589988110336).toString());
    } else if (firstUnit === "km²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 2.589988110336).toString());
    } else if (firstUnit === "ac" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.0040468564224).toString());
    } else if (firstUnit === "km²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 0.0040468564224).toString());
    } else if (firstUnit === "ro" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.0010117141056).toString());
    } else if (firstUnit === "km²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 0.0010117141056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.00040468564224).toString());
    } else if (firstUnit === "km²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 0.00040468564226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.00002529285264).toString());
    } else if (firstUnit === "km²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 0.00002529285264).toString());
    } else if (firstUnit === "sq" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.000009290304).toString());
    } else if (firstUnit === "km²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 0.000009290304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.00000083612736).toString());
    } else if (firstUnit === "km²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 0.00000083612736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.00000009290304).toString());
    } else if (firstUnit === "km²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 0.00000009290304).toString());
    } else if (firstUnit === "in²" && secondUnit === "km²") {
      setresult((evaluateExpression(display) * 0.00000000064516).toString());
    } else if (firstUnit === "km²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 0.00000000064516).toString());
    }
    //ha convertion to others units
    if (firstUnit === "daa" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.1).toString());
    } else if (firstUnit === "ha" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 0.1).toString());
    } else if (firstUnit === "a" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.01).toString());
    } else if (firstUnit === "ha" && secondUnit === "a") {
      setresult((evaluateExpression(display) / 0.01).toString());
    } else if (firstUnit === "ha" && secondUnit === "ha") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ha" && secondUnit === "ha") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "dm²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "ha" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "cm²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) / 100000000).toString());
    } else if (firstUnit === "ha" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 100000000).toString());
    } else if (firstUnit === "mm²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) / 10000000000).toString());
    } else if (firstUnit === "ha" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 10000000000).toString());
    } else if (firstUnit === "mi²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 258.9988110336).toString());
    } else if (firstUnit === "ha" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 258.9988110336).toString());
    } else if (firstUnit === "ac" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.40468564224).toString());
    } else if (firstUnit === "ha" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 0.40468564224).toString());
    } else if (firstUnit === "ro" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.10117141056).toString());
    } else if (firstUnit === "ha" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 0.10117141056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.040468564224).toString());
    } else if (firstUnit === "ha" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 0.040468564226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.002529285264).toString());
    } else if (firstUnit === "ha" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 0.002529285264).toString());
    } else if (firstUnit === "sq" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.0009290304).toString());
    } else if (firstUnit === "ha" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 0.0009290304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.000083612736).toString());
    } else if (firstUnit === "ha" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 0.000083612736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.000009290304).toString());
    } else if (firstUnit === "ha" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 0.000009290304).toString());
    } else if (firstUnit === "in²" && secondUnit === "ha") {
      setresult((evaluateExpression(display) * 0.000000064516).toString());
    } else if (firstUnit === "ha" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 0.000000064516).toString());
    }
    //daa convertion to other units
    if (firstUnit === "daa" && secondUnit === "daa") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "daa" && secondUnit === "daa") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "a" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "daa" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "dm²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 100000).toString());
    } else if (firstUnit === "daa" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 100000).toString());
    } else if (firstUnit === "cm²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 10000000).toString());
    } else if (firstUnit === "daa" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 10000000).toString());
    } else if (firstUnit === "mm²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) / 1000000000).toString());
    } else if (firstUnit === "daa" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 1000000000).toString());
    } else if (firstUnit === "mi²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 2589.988110336).toString());
    } else if (firstUnit === "daa" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 2589.988110336).toString());
    } else if (firstUnit === "ac" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 4.0468564224).toString());
    } else if (firstUnit === "daa" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 4.0468564224).toString());
    } else if (firstUnit === "ro" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 1.0117141056).toString());
    } else if (firstUnit === "daa" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 1.0117141056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 0.40468564224).toString());
    } else if (firstUnit === "daa" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 0.40468564226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 0.02529285264).toString());
    } else if (firstUnit === "daa" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 0.02529285264).toString());
    } else if (firstUnit === "sq" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 0.009290304).toString());
    } else if (firstUnit === "daa" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 0.009290304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 0.00083612736).toString());
    } else if (firstUnit === "daa" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 0.00083612736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 0.00009290304).toString());
    } else if (firstUnit === "daa" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 0.00009290304).toString());
    } else if (firstUnit === "in²" && secondUnit === "daa") {
      setresult((evaluateExpression(display) * 0.00000064516).toString());
    } else if (firstUnit === "daa" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 0.00000064516).toString());
    }
    //a convertion to other units
    if (firstUnit === "a" && secondUnit === "a") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "a" && secondUnit === "a") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "dm²" && secondUnit === "a") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "a" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "cm²" && secondUnit === "a") {
      setresult((evaluateExpression(display) / 1000000).toString());
    } else if (firstUnit === "a" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 1000000).toString());
    } else if (firstUnit === "mm²" && secondUnit === "a") {
      setresult((evaluateExpression(display) / 100000000).toString());
    } else if (firstUnit === "a" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 100000000).toString());
    } else if (firstUnit === "mi²" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 25899.88110336).toString());
    } else if (firstUnit === "a" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 25899.88110336).toString());
    } else if (firstUnit === "ac" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 40.468564224).toString());
    } else if (firstUnit === "a" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 40.468564224).toString());
    } else if (firstUnit === "ro" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 10.117141056).toString());
    } else if (firstUnit === "a" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 10.117141056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 4.0468564224).toString());
    } else if (firstUnit === "a" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 4.0468564226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 0.2529285264).toString());
    } else if (firstUnit === "a" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 0.2529285264).toString());
    } else if (firstUnit === "sq" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 0.09290304).toString());
    } else if (firstUnit === "a" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 0.09290304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 0.0083612736).toString());
    } else if (firstUnit === "a" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 0.0083612736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 0.0009290304).toString());
    } else if (firstUnit === "a" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 0.0009290304).toString());
    } else if (firstUnit === "in²" && secondUnit === "a") {
      setresult((evaluateExpression(display) * 0.0000064516).toString());
    } else if (firstUnit === "a" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 0.0000064516).toString());
    }
    //dm² convertion to other units
    if (firstUnit === "dm²" && secondUnit === "dm²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "dm²" && secondUnit === "dm²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "cm²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "dm²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "mm²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) / 10000).toString());
    } else if (firstUnit === "dm²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 10000).toString());
    } else if (firstUnit === "mi²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 25899881.10336).toString());
    } else if (firstUnit === "dm²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 25899881.10336).toString());
    } else if (firstUnit === "ac" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 404685.64224).toString());
    } else if (firstUnit === "dm²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 404685.64224).toString());
    } else if (firstUnit === "ro" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 101171.41056).toString());
    } else if (firstUnit === "dm²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 101171.41056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 40468.564224).toString());
    } else if (firstUnit === "dm²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 40468.564226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 2529.285264).toString());
    } else if (firstUnit === "dm²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 2529.285264).toString());
    } else if (firstUnit === "sq" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 929.0304).toString());
    } else if (firstUnit === "dm²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 929.0304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 83.612736).toString());
    } else if (firstUnit === "dm²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 83.612736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 9.290304).toString());
    } else if (firstUnit === "dm²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 9.290304).toString());
    } else if (firstUnit === "in²" && secondUnit === "dm²") {
      setresult((evaluateExpression(display) * 0.64516).toString());
    } else if (firstUnit === "dm²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 0.64516).toString());
    }
    //cm² convertion to others units
    if (firstUnit === "cm²" && secondUnit === "cm²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "cm²" && secondUnit === "cm²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mm²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "cm²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "mi²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 25899881103.36).toString());
    } else if (firstUnit === "cm²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 25899881103.36).toString());
    } else if (firstUnit === "ac" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 40468564.224).toString());
    } else if (firstUnit === "cm²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 40468564.224).toString());
    } else if (firstUnit === "ro" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 10117141.056).toString());
    } else if (firstUnit === "cm²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 10117141.056).toString());
    } else if (firstUnit === "ch²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 4046856.4224).toString());
    } else if (firstUnit === "cm²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 4046856.4226).toString());
    } else if (firstUnit === "rd²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 252928.5264).toString());
    } else if (firstUnit === "cm²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 252928.5264).toString());
    } else if (firstUnit === "sq" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 92903.04).toString());
    } else if (firstUnit === "cm²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 92903.04).toString());
    } else if (firstUnit === "yd²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 8361.2736).toString());
    } else if (firstUnit === "cm²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 8361.2736).toString());
    } else if (firstUnit === "ft²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 929.0304).toString());
    } else if (firstUnit === "cm²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 929.0304).toString());
    } else if (firstUnit === "in²" && secondUnit === "cm²") {
      setresult((evaluateExpression(display) * 6.4516).toString());
    } else if (firstUnit === "cm²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 6.4516).toString());
    }
    //mm² convertion to other units
    if (firstUnit === "mm²" && secondUnit === "mm²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mm²" && secondUnit === "mm²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mi²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 2589988110336).toString());
    } else if (firstUnit === "mm²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 2589988110336).toString());
    } else if (firstUnit === "ac" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 4046856422.4).toString());
    } else if (firstUnit === "mm²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 4046856422.4).toString());
    } else if (firstUnit === "ro" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 1011714105.6).toString());
    } else if (firstUnit === "mm²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 1011714105.6).toString());
    } else if (firstUnit === "ch²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 404685642.24).toString());
    } else if (firstUnit === "mm²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 404685642.24).toString());
    } else if (firstUnit === "rd²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 25292852.64).toString());
    } else if (firstUnit === "mm²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 25292852.64).toString());
    } else if (firstUnit === "sq" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 9290304).toString());
    } else if (firstUnit === "mm²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 9290304).toString());
    } else if (firstUnit === "yd²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 836127.36).toString());
    } else if (firstUnit === "mm²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 836127.36).toString());
    } else if (firstUnit === "ft²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 92903.04).toString());
    } else if (firstUnit === "mm²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 92903.04).toString());
    } else if (firstUnit === "in²" && secondUnit === "mm²") {
      setresult((evaluateExpression(display) * 645.16).toString());
    } else if (firstUnit === "mm²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) / 645.16).toString());
    }
    //mi² convertion to other units
    if (firstUnit === "mi²" && secondUnit === "mi²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "mi²" && secondUnit === "mi²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ac" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 640).toString());
    } else if (firstUnit === "mi²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) * 640).toString());
    } else if (firstUnit === "ro" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 2560).toString());
    } else if (firstUnit === "mi²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) * 2560).toString());
    } else if (firstUnit === "ch²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 6400).toString());
    } else if (firstUnit === "mi²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) * 6400).toString());
    } else if (firstUnit === "rd²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 102400).toString());
    } else if (firstUnit === "mi²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) * 102400).toString());
    } else if (firstUnit === "sq" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 278784).toString());
    } else if (firstUnit === "mi²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) * 278784).toString());
    } else if (firstUnit === "yd²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 3097600).toString());
    } else if (firstUnit === "mi²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) * 3097600).toString());
    } else if (firstUnit === "ft²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 27878400).toString());
    } else if (firstUnit === "mi²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 27878400).toString());
    } else if (firstUnit === "in²" && secondUnit === "mi²") {
      setresult((evaluateExpression(display) / 4014489600).toString());
    } else if (firstUnit === "mi²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 4014489600).toString());
    }
    //ac convertion to other units
    if (firstUnit === "ac" && secondUnit === "ac") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ac" && secondUnit === "ac") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ro" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 4).toString());
    } else if (firstUnit === "ac" && secondUnit === "ro") {
      setresult((evaluateExpression(display) * 4).toString());
    } else if (firstUnit === "ch²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 10).toString());
    } else if (firstUnit === "ac" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) * 10).toString());
    } else if (firstUnit === "rd²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 160).toString());
    } else if (firstUnit === "ac" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) * 160).toString());
    } else if (firstUnit === "sq" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 435.6).toString());
    } else if (firstUnit === "ac" && secondUnit === "sq") {
      setresult((evaluateExpression(display) * 435.6).toString());
    } else if (firstUnit === "yd²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 4840).toString());
    } else if (firstUnit === "ac" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) * 4840).toString());
    } else if (firstUnit === "ft²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 43560).toString());
    } else if (firstUnit === "ac" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 43560).toString());
    } else if (firstUnit === "in²" && secondUnit === "ac") {
      setresult((evaluateExpression(display) / 6272640).toString());
    } else if (firstUnit === "ac" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 6272640).toString());
    }
    // ro convertion to other units
    if (firstUnit === "ro" && secondUnit === "ro") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ro" && secondUnit === "ro") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ch²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 2.5).toString());
    } else if (firstUnit === "ro" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) * 2.5).toString());
    } else if (firstUnit === "rd²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 40).toString());
    } else if (firstUnit === "ro" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) * 40).toString());
    } else if (firstUnit === "sq" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 108.9).toString());
    } else if (firstUnit === "ro" && secondUnit === "sq") {
      setresult((evaluateExpression(display) * 108.9).toString());
    } else if (firstUnit === "yd²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 1210).toString());
    } else if (firstUnit === "ro" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) * 1210).toString());
    } else if (firstUnit === "ft²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 10890).toString());
    } else if (firstUnit === "ro" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 10890).toString());
    } else if (firstUnit === "in²" && secondUnit === "ro") {
      setresult((evaluateExpression(display) / 1568160).toString());
    } else if (firstUnit === "ro" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 1568160).toString());
    }
    // ch² convertion to other units
    if (firstUnit === "ch²" && secondUnit === "ch²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ch²" && secondUnit === "ch²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "rd²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 16).toString());
    } else if (firstUnit === "ch²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) * 16).toString());
    } else if (firstUnit === "sq" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 43.56).toString());
    } else if (firstUnit === "ch²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) * 43.56).toString());
    } else if (firstUnit === "yd²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 484).toString());
    } else if (firstUnit === "ch²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) * 484).toString());
    } else if (firstUnit === "ft²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 4356).toString());
    } else if (firstUnit === "ch²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 4356).toString());
    } else if (firstUnit === "in²" && secondUnit === "ch²") {
      setresult((evaluateExpression(display) / 627264).toString());
    } else if (firstUnit === "ch²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 627264).toString());
    }
    // rd² convertion to other units
    if (firstUnit === "rd²" && secondUnit === "rd²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "rd²" && secondUnit === "rd²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "sq" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 2.7225).toString());
    } else if (firstUnit === "rd²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) * 2.7225).toString());
    } else if (firstUnit === "yd²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 30.25).toString());
    } else if (firstUnit === "rd²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) * 30.25).toString());
    } else if (firstUnit === "ft²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 272.25).toString());
    } else if (firstUnit === "rd²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 272.25).toString());
    } else if (firstUnit === "in²" && secondUnit === "rd²") {
      setresult((evaluateExpression(display) / 39204).toString());
    } else if (firstUnit === "rd²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 39204).toString());
    }
    //sq convertion to other units
    if (firstUnit === "sq" && secondUnit === "sq") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "sq" && secondUnit === "sq") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "yd²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 11.11111).toString());
    } else if (firstUnit === "sq" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) * 11.11111).toString());
    } else if (firstUnit === "ft²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 100).toString());
    } else if (firstUnit === "sq" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 100).toString());
    } else if (firstUnit === "in²" && secondUnit === "sq") {
      setresult((evaluateExpression(display) / 14400).toString());
    } else if (firstUnit === "sq" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 14400).toString());
    }
    //yd² convertion to other units
    if (firstUnit === "yd²" && secondUnit === "yd²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "yd²" && secondUnit === "yd²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ft²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 9).toString());
    } else if (firstUnit === "yd²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) * 9).toString());
    } else if (firstUnit === "in²" && secondUnit === "yd²") {
      setresult((evaluateExpression(display) / 1296).toString());
    } else if (firstUnit === "yd²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 1296).toString());
    }
    // ft² convertion to other units
    if (firstUnit === "ft²" && secondUnit === "ft²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "ft²" && secondUnit === "ft²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "in²" && secondUnit === "ft²") {
      setresult((evaluateExpression(display) / 144).toString());
    } else if (firstUnit === "ft²" && secondUnit === "in²") {
      setresult((evaluateExpression(display) * 144).toString());
    }
    //in²
    if (firstUnit === "in²" && secondUnit === "in²") {
      setresult(evaluateExpression(display).toString());
    } else if (firstUnit === "in²" && secondUnit === "in²") {
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
          <IonTitle>Volume</IonTitle>
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
              style={{ color: "white" }}
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
                type="text"
                id="screen1a"
                style={inputStyle}
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
              <IonButton className="br2" onClick={() => convertArea()}>
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
export default Calconvt2;
