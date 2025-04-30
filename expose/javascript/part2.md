1. Variable i is declared using var so it exists outside of the for loop. When the for loops ends, i = 3 since then it is no longer less than prices.length = 3, so '3' is printed
2. Same as above for discountedPrice, the last value it is assigned is prices[2]x0.5 = 150 before the for loop ends, so '150' is printed.
3. Variable finalPrice is declared outside of the for loop anyway, and the last value it is assigned is 150 before the for loop ends, so '150' is printed.
4. The function returns [50, 100, 150] because each value in prices = [100, 200, 300] are halved, rounded to the nearest hundrenth, and appended to dicounted, which is initially empty. Then discounted is returned.
5. An error occurs because i does not exist outside of the for loop as it is declared using let.
6. An error occurs because discountedPrice does not exist outside of the for loop as it is declared using let.
7. '150' is printed because it is the last value assigned to finalPrice, whose scope is the entire function, before the for loop ends.
8. The function returns [50, 100, 150] because each value in prices = [100, 200, 300] are halved, rounded to the nearest hundrenth, and appended to dicounted, which is initially empty, all within the scope in which they are declared. Then discounted is returned.
9. An error occurs because i does not exist outside of the for loop as it is declared using let.
10. '3' is printed because thats the length of prices and it doesnt change.
11. The function returns [50, 100, 150] because each value in prices = [100, 200, 300] are halved, and appended to dicounted, which is initially empty, all within the scope in which they are declared. Also, discounted being declared with const does not stop its contents from being able to be changed. Then discounted is returned.
12. A. student["name"]
    B. student["Grad Year"]
    C. student.greeting();
    D. student["Favorite Teacher"]["name"]
    E. student["courseload"][0]
13. A. + does string concatenation when one operand is a string so 2 is converted to a      string and '3' + '2' = '32'
    B. - forces operands to be numbers and subtracts them so 3 is converted to a number and 3 - 2 = 1
    C. 3 because null converts to 0
    D. '3null' because null is converted to a string 'null'
    E. 4 because true is converted to 1, 1 + 3 = 4
    F. 0 because both false and null convert to 0
    G. '3undefined' because undefined converts to string 'undefined' and is concatenated with string '3'
    H. NaN because both '3' and undefined are converted to their numeric values, 3 and NaN, and 3 - NaN = NaN
14. A. true, '2' is converted to 2 and 2 > 1
    B. false, '2' and '12' remain strings and '12' < '2' because '1' comes before '2'
    C. true because == checks for value not type, so '2' is converted to 2 and 2 == 2
    D. false, because === checks for type as well as value and 2 is a number, '2' is a string
    E. false, true is converted to 1 and 1 != 2
    F. true because Boolean(2) = true because its not Boolean(0) or ("") true and true are the same type and value.
15. == compares values after converting one operand to match the other while === compares both type and value.
17. newArr is initially empty, then for every item in [1, 2, 3], the output of the function doSomething (with the value of the item as input) is pushed onto newArr. doSomething returns the input value multiplied by 2, so 1x2 = 2 is pushed onto newArr, then 2x2 = 4, then 3x2 = 6, so when the for loop ends, newArr = [2, 4, 6] and that's what's returned.
19. 
1
4
3
2