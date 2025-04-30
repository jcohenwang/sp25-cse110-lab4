1. num1 and num2 were recorded as strings so string concatenation was used to sum them
2. I would convert them to numbers before taking their sum by changing the line:
```
    // old: let result = num1 + num2
    let result = parseInt(num1) + parseInt(num2)
```