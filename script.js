document.getElementById("generateBtn").addEventListener("click", function () {
    const length = document.getElementById("passwordLength").value;
    const includeSymbols = document.getElementById("passwordType").checked;
    
    const password = generatePassword(length, includeSymbols);
    document.getElementById("password").value = password;
});

document.getElementById("copyBtn").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the input
    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert("Password copied to clipboard!");
    }, (err) => {
        alert("Failed to copy password: " + err);
    });
});

function generatePassword(length, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characters = lowercaseChars + uppercaseChars + numericChars;
    if (includeSymbols) {
        characters += symbolChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
