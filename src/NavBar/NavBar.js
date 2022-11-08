const NavBar = ({ setSelectedSection }) => {
  return (
    <nav>
      <button title="Home" onClick={() => setSelectedSection("home")}>
        Home
      </button>
      <button title="US" onClick={() => setSelectedSection("us")}>
        US
      </button>
      <button title="World" onClick={() => setSelectedSection("world")}>
        World
      </button>
      <button title="Technology" onClick={() => setSelectedSection("technology")}>
        Technology
      </button>
      <button title="Arts" onClick={() => setSelectedSection("arts")}>
        Arts
      </button>
      <button title="Books" onClick={() => setSelectedSection("books")}>
        Books
      </button>
      <button title="Food" onClick={() => setSelectedSection("food")}>
        Food
      </button>
      <button title="Health" onClick={() => setSelectedSection("health")}>
        Health
      </button>
    </nav>
  );
};

export default NavBar;
