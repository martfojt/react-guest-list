export function InputField({ changeLabel, onChange }) {
  return (
    <div>
      <label htmlFor={changeLabel.HtmlFor}>{changeLabel.label}</label>
      <input />
    </div>
  );
}
