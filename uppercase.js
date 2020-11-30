function upperCase(string) {
    const arr = string.split(" ");
    const result = arr.map((i) => i.charAt(0).toUpperCase() + i.slice(1));
    return result.join(" ");
}
upperCase("an haha");