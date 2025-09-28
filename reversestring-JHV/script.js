// Toast helper
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  
  // Clear any existing timeout to prevent multiple timers
  if (toast._timeoutId) {
    clearTimeout(toast._timeoutId);
  }
  
  toast.classList.add("show");
  toast._timeoutId = setTimeout(() => {
    toast.classList.remove("show");
    toast._timeoutId = null;
  }, 2000);
}

// Clipboard helper with fallback
async function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Make textarea invisible and non-interactive to prevent layout shifts and virtual keyboard
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    textArea.readOnly = true;
    textArea.setAttribute("aria-hidden", "true");
    
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const success = document.execCommand('copy');
      if (!success) {
        throw new Error('execCommand copy returned false');
      }
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      document.body.removeChild(textArea);
    }
  }
  return navigator.clipboard.writeText(text);
}

// Unicode-safe string reversal
const segmenter =
  typeof Intl !== "undefined" && Intl.Segmenter
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

function reverseString(value) {
  const units = segmenter
    ? [...segmenter.segment(value)].map(({ segment }) => segment)
    : Array.from(value);
  return units.reverse().join("");
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
  const reversed = reverseString(input1.value);
  output1.textContent = reversed;
  if (reversed) copyBtn1.disabled = false;
});

copyBtn1.addEventListener("click", async () => {
  if (output1.textContent) {
    try {
      await copyToClipboard(output1.textContent);
      showToast("✅ Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      showToast("❌ Failed to copy");
    }
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
    const reversed = reverseString(input2.value);
    output2.textContent = reversed;
    copyBtn2.disabled = !reversed;
  } else {
    output2.textContent = "";
    copyBtn2.disabled = true;
  }
});

copyBtn2.addEventListener("click", async () => {
  if (output2.textContent) {
    try {
      await copyToClipboard(output2.textContent);
      showToast("✅ Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      showToast("❌ Failed to copy");
    }
  }
});

clearBtn2.addEventListener("click", () => {
  input2.value = "";
  output2.textContent = "";
  copyBtn2.disabled = true;
  clearBtn2.style.display = "none";
});