// eslint-disable-next-line no-unused-vars
import { testObjectsType } from "./testingTypes";

const bb26toDecimalEM = "Input string may only contain upper case letters";

//stores testing inputs/outputs
const testObjects: testObjectsType = {
    bb26toDecimalInputTest: [
        {
            input: "C",
            result: 3
        },
        {
            input: "E",
            result: 5
        },
        {
            input: "S",
            result: 19
        },
        {
            input: "CE",
            result: 83
        },
        {
            input: "SC",
            result: 497
        },
        {
            input: "ZZ",
            result: 702
        },
        {
            input: "AAZ",
            result: 728
        },
        {
            input: "ABC",
            result: 731
        },
        {
            input: "ZZA",
            result: 18253
        },
        {
            input: "SSSS",
            result: 347301
        },
        {
            input: "AZAZA",
            result: 915305
        },
        {
            input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            result: 2.5609457453661776e35
        }
    ],
    bb26toDecimalInvalidInputTest: [
        {
            input: "123",
            result: bb26toDecimalEM,
            error: TypeError
        },
        {
            input: "AbC",
            result: bb26toDecimalEM,
            error: TypeError
        },
        {
            input: 123,
            result: bb26toDecimalEM,
            error: TypeError
        },
        {
            input: "A b C",
            result: bb26toDecimalEM,
            error: TypeError
        },
        {
            input: "AB C",
            result: bb26toDecimalEM,
            error: TypeError
        }
    ]
};

export const {
    bb26toDecimalInputTest,
    bb26toDecimalInvalidInputTest
} = testObjects;
