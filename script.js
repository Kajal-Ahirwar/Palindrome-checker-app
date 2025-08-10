// Palindrome check logic
const form = document.getElementById("palindromeForm");
const input = document.getElementById("textInput");
const resultOutput = document.getElementById("resultOutput");
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text.length === 0) {
    resultOutput.textContent = "Please enter some text.";
    resultOutput.className = "result-message result-false";
    return;
  }
  if (isPalindrome(text)) {
    resultOutput.textContent = `"${text}" is a palindrome!`;
    resultOutput.className = "result-message result-true";
  } else {
    resultOutput.textContent = `"${text}" is not a palindrome.`;
    resultOutput.className = "result-message result-false";
  }
});
