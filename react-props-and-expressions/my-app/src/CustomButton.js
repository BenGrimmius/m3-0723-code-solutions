function CustomButton({ text, color }) {
  return (
    <>
      <button style={{ backgroundColor: color }}>{text}</button>
    </>
  );
}

function CustomButtonClasses({ text, className }) {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}

export { CustomButton, CustomButtonClasses };
