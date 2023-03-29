function upcaseIfLongerThan10(string) {
    if (string.length > 10) {
        return string.toUpperCase();
    } else {
        return string;
    }
}


console.log(upcaseIfLongerThan10('hello world'));
console.log(upcaseIfLongerThan10('goodbye'));