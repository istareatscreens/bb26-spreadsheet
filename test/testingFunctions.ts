import { expect } from "chai";
import "mocha";
// eslint-disable-next-line no-unused-vars
import { testObject } from "./testingTypes";

/**
 * Provides label for and executes testing functions
 * @param {string} functionName name of function being tested
 * @param {(()=>void)[]} fns testing functions to be executed
 * @return {void} no return
 */
export function describeWraper(
    functionName: string,
    ...fns: (() => void)[]
): void {
    describe("#" + functionName, () => {
        fns.forEach(fn => fn());
    });
}
/**
 *Tests array of inputs and compares to desired outputs
 * @param {testObject[]} arr array of test objects
 * @param {(...args:any)=>any} fn function to be tested
 * @return {()=>void} unexecuted tests
 */
export function inputTest(
    arr: testObject[],
    fn: (...args: any) => any
): () => void {
    return () =>
        arr.forEach(test => {
            context("Input Check for " + test.input, () => {
                it("should return: " + test.result, () => {
                    expect(fn(test.input)).to.equal(test.result);
                });
            });
        });
}

/**
 * Tests array of invalid inputs and determines if error is thrown
 * @param {testObject[]} arr array of test objects
 * @param {(...args:any)=>any} fn function to be tested
 * @return {()=>void} unexecuted tests
 */
export function invalidInputTest(
    arr: testObject[],
    fn: (...args: any) => any
): () => void {
    return () => {
        arr.forEach(test => {
            context("With invalid input of " + test.input, () => {
                it("should throw error: " + test.result, () => {
                    expect(() => {
                        fn(test.input);
                    }).to.throw(test.error, test.result);
                });
            });
        });
    };
}

export default {
    describeWraper,
    inputTest,
    invalidInputTest
};