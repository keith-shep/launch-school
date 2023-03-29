function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(n) {
    if (n < 2) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
// fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
// fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
// fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
// fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8
// fibonacci(7) = fibonacci(6) + fibonacci(5) = 8 + 5 = 13