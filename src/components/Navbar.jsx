function Navbar({ category, setCategory }) {
  const categories = [
    "technology",
    "business",
    "health",
    "science",
    "general",
    "sports",
    "entertainment",
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">D-code(News)</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <a
                  href="#"
                  className={`nav-link ${category === cat ? "active text-white fw-bold" : "text-secondary"}`}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault(); // prevents page from jumping to top
                    setCategory(cat);
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
