function getElementWidth(content, padding, border) {
    const num1 = parseInt(content);
    const num2 = parseInt(padding);
    const num3 = parseFloat(border);

    return num1 + (2 * num2) + (2 * num3);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200