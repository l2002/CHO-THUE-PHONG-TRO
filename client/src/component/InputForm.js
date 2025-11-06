function inputForm({ label, value, setValue, type }) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#c8f0fc] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
      />
    </div>
  );
}

export default inputForm;
