// Toast helper
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}

// Section 1: Button-based reverse
const input1 = document.getElementById("inputString1");
const btn = document.getElementById("reverseBtn");
const output1 = document.getElementById("outputString1");
const copyBtn1 = document.getElementById("copyBtn1");
const clearBtn1 = document.getElementById("clearBtn1");

input1.addEventListener("input", () => {
  if (input1.value.length > 0) {
    clearBtn1.style.display = "inline-block";
  } else {
    clearBtn1.style.display = "none";
  }

  if (input1.value.length >= 3) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
    output1.textContent = "";
    copyBtn1.disabled = true;
  }
});

btn.addEventListener("click", () => {
  const reversed = input1.value.split("").reverse().join("");
  output1.textContent = reversed;
  if (reversed) copyBtn1.disabled = false;
});

copyBtn1.addEventListener("click", () => {
  if (output1.textContent) {
    navigator.clipboard.writeText(output1.textContent);
    showToast("✅ Copied to clipboard!");
  }
});

clearBtn1.addEventListener("click", () => {
  input1.value = "";
  output1.textContent = "";
  btn.disabled = true;
  copyBtn1.disabled = true;
  clearBtn1.style.display = "none";
});

// Section 2: Real-time reverse
const input2 = document.getElementById("inputString2");
const output2 = document.getElementById("outputString2");
const copyBtn2 = document.getElementById("copyBtn2");
const clearBtn2 = document.getElementById("clearBtn2");

input2.addEventListener("input", () => {
  if (input2.value.length > 0) {
    clearBtn2.style.display = "inline-block";
  } else {
    clearBtn2.style.display = "none";
  }

  if (input2.value.length >= 3) {
    const reversed = input2.value.split("").reverse().join("");
    output2.textContent = reversed;
    copyBtn2.disabled = !reversed;
  } else {
    output2.textContent = "";
    copyBtn2.disabled = true;
  }
});

copyBtn2.addEventListener("click", () => {
  if (output2.textContent) {
    navigator.clipboard.writeText(output2.textContent);
    showToast("✅ Copied to clipboard!");
  }
});

clearBtn2.addEventListener("click", () => {
  input2.value = "";
  output2.textContent = "";
  copyBtn2.disabled = true;
  clearBtn2.style.display = "none";
});