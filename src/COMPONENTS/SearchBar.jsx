<<<<<<< HEAD
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
=======
import { useState } from "react"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) return

    onSearch(query)
  }
>>>>>>> origin/main

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
<<<<<<< HEAD
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
=======
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search food..."
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
>>>>>>> origin/main
