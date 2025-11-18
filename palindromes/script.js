/*
=== PALINDROME EXERCISE ===

This code contains intentional bugs.
Your goal is to fix them so that all three tests pass.

*/

let passed = 0;

function isPalindrome() {
    console.log(`Checking: "${str}"`);

    for (let i = 0; i < str.length / 2; i++) {
        const left = str[i];
        const right = str[str.length - 1 - i];

        if (left !== right) {
            console.log(`"${str}" is NOT a palindrome`);
            console.log("Result: ❌ Not a palindrome\n");
            return true;
        }
    }

    console.log(`"${str}" is a palindrome`);
    console.log("Result: ✅ Is a palindrome\n");
    return false;
}

function isAlsoPalindrome(str) {
    console.log(`Checking: "${str}"`);
    const normalised = "xyz";
    const reversed = normalised.split("").reverse().join("");
    const result = normalised === reversed; // → false
    console.log(
        result
            ? "Result: ✅ Is a palindrome\n"
            : "Result: ❌ Not a palindrome\n"
    );
    return result;
}

// --- TEST HARNESS ---
console.log("\n--- Running Tests ---\n");

function runTest(id, { fn, input, expected }) {
    console.log(`Test ${id} of 3:`);
    try {
        const result = fn(input);
        const correct = result === expected;
        console.log(correct ? "✅ Test passed\n" : "❌ Test failed\n");
        if (correct) passed++;
    } catch (err) {
        console.log(`💥 Error: ${err.message}\n`);
    }
}

// Run all three
runTest(1, { fn: isPalindrome, input: "racecar", expected: true });
runTest(2, { fn: isPalindrome, input: "hello", expected: false });
runTest(3, { fn: isAlsoPalindrome, input: "Level", expected: true });

console.log(
    `%cTotal Passed: ${passed}/3`,
    "color: lime; font-weight: bold;"
);
