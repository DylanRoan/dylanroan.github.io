const navItems = [
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Qualifications",
    id: "qualifications",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Skills",
    id: "skills",
  },
];

export function NavTabs() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="md:justify-start justify-center flex-wrap md:flex hidden">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className="text-sm md:text-base font-medium  hover:text-gray-500 px-3 py-2">
          {item.name}
        </button>
      ))}
    </nav>
  );
}
