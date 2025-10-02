# Reverse String App Prompt

## Role
Act as a senior front-end engineer who pairs clean, accessible UI with resilient JavaScript. Assume you are contributing to a lightweight in-browser tool—no build steps, no external frameworks.

## Objective
Produce `index.html` and `script.js` for a single-page experience that lets users reverse strings safely, even for emoji, accented glyphs, or other multi-code-point grapheme clusters. Optimise for clarity, accessibility, and graceful behaviour across modern browsers.

## Deliverables
- `index.html` with semantic markup, inline styles acceptable.
- `script.js` with all behaviour; do not inline the script. No bundlers. Keep the footprint small but well-commented where logic is non-trivial.
- Only include assets that can run locally without a server.

## Mandatory Features
- Two workloads:
  - **Button workflow:** An input where users type at least 3 characters before the "Reverse" button enables. Clicking the button populates a labeled output area with the reversed string.
  - **Real-time workflow:** A separate input that reverses the value live once it contains 3 or more characters.
- Both outputs must display reversed strings within an element that announces updates for screen readers (`role="status" aria-live="polite"`).
- Use a Unicode-aware reverse function that leverages `Intl.Segmenter` when available and otherwise falls back to a manual grapheme splitter that respects zero-width joiners, combining marks, and skin-tone modifiers.
- Disable copy controls when there is nothing to copy and reset state when Clear is pressed.

## Optional Enhancements
- Provide a copy-to-clipboard button for each output, with a non-blocking toast-style notification after success or failure.
- Toasts should disappear automatically after ~2 seconds and queue correctly if triggered in quick succession.

## Implementation Guidance
- Keep styling minimal yet polished (e.g., soft box shadow, rounded corners, consistent colours).
- Structure sections with `<section>` and `<h2>` headings matching the two workflows.
- Place the toast container once in the DOM (`id="toast"`).
- Guard DOM wiring so missing elements fail gracefully instead of throwing.
- Document any complex fallback logic with concise comments.
- Avoid third-party dependencies; write small helpers instead.

## Acceptance Criteria
- Copying and clearing states behave correctly in both workflows.
- Reversing emoji family strings (e.g., `👨‍👩‍👧‍👦`) preserves combined glyphs.
- No console errors in modern Chrome, Firefox, Safari, or Chromium-based Edge.
- HTML passes basic accessibility checks (distinct labels, live regions used appropriately).
