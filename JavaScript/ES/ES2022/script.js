const arr = [100, 200, 400, 50000, 10];

// Old
arr[arr.length - 2]; // 50000

// New
arr.at(-2); // 50000
arr.at(0); // 100
arr.at(1); // 200
arr.at(-1); // 10