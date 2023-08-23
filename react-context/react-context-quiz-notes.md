# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  To allow variables to be passed deep down the virtual DOM without using props.

- What values can be stored in context?
  Any variable.

- How do you create context and make it available to the components?
  const value = useContext(valueContext)

- How do you access the context values?
  Wrap the root component with valueContext.Provider value={value}

- When would you use context? (in addition to the best answer: "rarely")
  When you need to pass down a variable through many children components

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
