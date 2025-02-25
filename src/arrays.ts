/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // Base case, if empty return empty
    if (numbers.length === 0) {
        return numbers;
    // Base case, if list is length 1 then return that twice
    }else if (numbers.length === 1) {
        return [numbers[0], numbers[0]]
    }
    // returns the first and last element from the numbers list
        return [numbers[0], numbers[numbers.length-1]]
    
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // maps the numbers and multiples by 3 to all nums elements
    let tripled = numbers.map((nums: number) => nums*3)
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // maps the list and if the string can convert to number then do it, else make it 0
    let strToNums = numbers.map((str: string) => (!isNaN(Number(str))) ? Number(str) : 0)
    return strToNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // Make a new list that maps amounts and if the str has a "$" in the front, then it will get removed
    let nums = amounts.map((str: string) => (str[0] === "$") ? str.slice(1) : str)
    // Use previous function to chnage the strings into numbers
    let result = stringsToIntegers(nums)
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // First I use filter to keep all of the messages that don't have "?" at the end
    let questionMark: string[] = messages.filter((str: string) => ((str[str.length-1] !== "?")))
    // Then I map through questMark to uppercase the message if it contains "!" at the end
    let exclamation: string[] = questionMark.map((str: string) => (str[str.length-1] === "!") ? str.toUpperCase(): str)
    /*
    WRONG!
    // Map the messages list and first ckech if last element is "?" and if so it will slice the last part
    let exclamation = messages.map((str: string) => (str[str.length-1] == "?") ? str.slice(0, -1)
    // else if (last element is "1"){make message uppercase, else do nothing}
    : (str[str.length-1] === "!") ? str.toUpperCase(): str)
    */
    return exclamation;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // filtering the words with words of length less than 4
    let shortWords = words.filter((str: string) => str.length < 4)
    // return the length of the new list which contains words less than 4
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    let result = colors.every((color: string) => color === "red" || color === "green" || color === "blue")
    return result;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    // First I find the sum 
    let sum = addends.reduce((sum: number, num: number) => sum + num, 0)
    // I use the reduce to update the message, if the message is new only add num
    let equation = addends.reduce((message: string, num: number) =>  (message.length === 0) ? message + num.toString()
    // Else add the num to the message with "+" in front
    : message + "+" + num.toString(), "")
    // console.log(equation);
    return sum + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {

    // First find the first negative number if it has one
    let index = values.findIndex((value:number) => value < 0)
    // console.log("Index: ", index);

    // if there is a negative number:
    if (index !== -1) {
        // create a new list without the negative value
        let negative = values.slice(0, index);
        // sum all of the values in the list, since negative value is not included
        let neg_sum = negative.reduce((sum: number, num:number) => sum+num, 0)
        // now that we have the sum, we want to copy the main list again
        let neg_result = [...values];
        // now that we have copy of whole list, now we insert the neg_sum after the index of the first negative number
        neg_result.splice(index+1, 0, neg_sum);
        return neg_result;
    }
    let sum = values.reduce((sum:number, num:number) => sum+num, 0)
    let result = [...values];
    result.splice(result.length, 0, sum);
    return result    
}
