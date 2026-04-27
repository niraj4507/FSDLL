function processText() {
    let t = inputText.value;

    reverse.innerText = "Reversed: " + t.split("").reverse().join("");
    upper.innerText = "Uppercase: " + t.toUpperCase();
    lower.innerText = "Lowercase: " + t.toLowerCase();
    length.innerText = "Length: " + t.length;
}