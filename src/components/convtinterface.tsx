import convert from "convert-units";

// Define an interface for the API response
interface ConversionResult {
  value: number;
  unit: string;
}

// Define a function to perform the conversion
export function convertUnits(
  value: number,
  from: string,
  to: string
): ConversionResult {
  const result = convert(value).from("km").to("m");
  return {
    value: result,
    unit: to,
  };
}
