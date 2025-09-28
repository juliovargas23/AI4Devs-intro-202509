
## Execution of prompts

Full chat history [here](https://chatgpt.com/share/68d896a1-30c4-800d-9e19-ea5657c29900)

**Tool**: ChatGPT

1. Basic Prompt with basic instruction

**Goal**: Create the most basic version with a simple request
```
Create a web page with JavaScript logic that reverses the order of a string.
Example: if I input AI4Devs, it should return sveD4IA.
Do it using the seed files index.html and script.js (file is empty not provided just as reference) provided 
```

2. Improve UI and add new features

**Goal**: Improve the style of the HTML (just for fun) and introduce new features, validation of 3 letters and real time reverse.

- Request help to build a prompt to introduce UI changes

```
you are an expert in prompt engineering, I would like to ask to improve the look and feel of the html code just using html + Javascript, don't add additional resources as css. make it pretty. how would be the best way to ask it?
```

- Request the new features + UI changes

```
works, but now include the following improvements.
- Title: Reverse String
- Split page in two sections to display 2 different approach 
- 1. working with the current implementation
   - - Minimum of 3 letters to enable the button to execute reverse
- 2. execute the reverse string in real time, doesn't depends on action button
   - - start real time reverse with a minimum of 3 letters 

Look and feel:
Please improve the visual design of this HTML code. Make it visually appealing and modern with:

Clean, professional styling with good color schemes
Proper spacing, typography, and layout
Responsive design principles where possible
Add relevant emojis at the bottom of the page to enhance visual appeal

Focus on making it look polished and engaging while keeping current setup HTML + Javascript (with index.html and script.js)
```

### Task COMPLETED 🚀 
---

**Note**: Just for learning purposes a couple of interations more in the chat to include clear button and popup notification once copy the output text.