# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component is attached to the DOM.

- What is a React Effect?
  An event that only happens AFTER (unless specified by the dependencies) each render.

- When should you use an Effect and when should you not use an Effect?
  Primarily used when you need to access external data from an API or networks.

- When do Effects run?
  After renders.

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  Effect dependencies are declared after the initial function argument within the effect function. They will determine when the render will happen. If there is a dependency named "isPlaying", rerendering will happen every time the "isPlaying" variable changes.

- Why would you want to clean up from an Effect?
  To avoid the effect to begin piling up as the user navigates the app.

- How do you clean up from an Effect?
  You negate the what the effect is creating. (ex. connect, disconnect. )

- When does the cleanup function run?
  Each time before the effect runs again, and one final time when the component unmounts.

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
