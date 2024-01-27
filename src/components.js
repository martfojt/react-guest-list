export function InputField({ htmlFor, label, onChange }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input onChange={onChange} />
    </div>
  );
}
