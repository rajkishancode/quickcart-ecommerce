function FormTextInput({
  placeholder,
  fieldName,
  type = "text",
  onChange,
  value,
}) {
  return (
    <div>
      <label className="label-text">
        {fieldName}
      </label>
      <input
        className={"input-auth w-100 mb-6"}
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormTextInput;
