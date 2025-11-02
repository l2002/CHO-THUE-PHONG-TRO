function inputForm({ label }) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#c8f0fc] p-2 rounded-md w-full"
      />
    </div>
  );
}

export default inputForm;
