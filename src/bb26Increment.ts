import { checkIfValidbb26 as check } from "./isValidbb26";
/**
 * Increases a bijective base-26 number by 1
 * @param input {string} string containing only uppercase letters
 * @returns {string} Bijective base-26 input + 1
 * @Example bb26Decrement("A") //"B"
 * @Example bb26Decrement("Z") //"AA"
 */
export function bb26Increment(input: string): string {
  check(input);
  return bb26IncrementNoCheck(input);
}

export function bb26IncrementNoCheck(input: string): string {
  let temp: string = "";
  for (let i = input.length - 1; i > -1; i--) {
    if (input[i] !== "Z") {
      temp = String.fromCharCode(input.charCodeAt(i) + 1) + temp;
      input = input.slice(0, i) + temp;
      return input;
    }
    temp += "A";
  }
  return temp + "A";
}
