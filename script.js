// script.js
document.getElementById("textInput").addEventListener("input", function () {
  const text = this.value.trim();
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  document.getElementById("wordCount").textContent = words.length;
});
