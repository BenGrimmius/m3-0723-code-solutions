# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are javscript functions within React that are available while react is rendering.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Must come at the very top of the function. Must write 'use' first. ex. useState, useEffect.

- What is the purpose of state in React?
  The purpose of state is to contain specific screenshots of a value in the component that doesn't reset once rendered.

- Why can't we just maintain state in a local variable?
  Local variables don't persist after renders. Local variables also do not cause rerenders.

- What two actions happen when you call a `state setter` function?
  the state setter will update the state, and will also cause rerender.

- When does the local `state variable` get updated with the new value?
  After rerender.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
