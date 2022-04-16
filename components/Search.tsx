export default function Search(props) {
  const { value, onChange } = props;

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <>
    <div className="md:mx-56">
      <div className="container flex items-center mt-6 rounded-xl border-indigo-600 border">
        <span className="pl-3 pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          placeholder="Search Photo"
          className=" rounded-r-md bg-transparent p-2 focus:outline-none"
          value={value ?? ""}
          onChange={handleChange}
        />
      </div>
      </div>
    </>
  );
}
