export function InputField({ htmlFor, label, onChange, value }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input onChange={onChange} value={value} />
    </div>
  );
}
