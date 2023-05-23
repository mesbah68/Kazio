export default function SearchInput({searchValue, handleSearch, handleChangeSearch}) {

  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          value={searchValue}
          onChange={e => handleChangeSearch(e.target.value)}
          placeholder="Search gif…"
          className="input input-lg input-bordered"
        />
        <button className="btn btn-lg btn-square" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
