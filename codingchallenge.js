function fibonacciParseString(n) {
    var a = [];
    for (i = 0; i < n; i++) {
        if (i == 0 || i == 1) {
            a.push(1);
        } else {
            c = a[i - 1] + a[i - 2];
            a.push(c);
        }
    }
    var str = a.toString();
    var arr = str.split(",");
    result = arr.map((i) => i.substring(i.length - 1)).join("");
    return result;
}
fibonacciParseString(13);