# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  An effect that is fired once the user interacts with the application.

- What is an "event handler"? Which component declares the handler?
  An event handler is a function that defines what happens when an event is triggered

- How do you pass an event handler to a React component?
  To pass an event handler you must assign the handler to the event attribute (ex. onClick)

- What is the naming convention for event handlers?
  handleXXXX. First word being lowercase, then the rest camelcase.

- What is an "event handler prop"? Which component declares the prop?
  Event handler props allow one to customize the components easily by passing them to the children. The handler is declared in the parent component to allow customization to each child component.

- What are some custom event handler props a component may wish to define?
  handleSubmit, handleClick

- What is the naming convention for custom event handler props?
  onXXXX First word being lowercase, then the rest camelcase.

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
