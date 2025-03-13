import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

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
    className: "hidden",
  },
];

export function NavTabs() {
  const [isActive, setIsActive] = useState("experience");

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.classList.replace("hidden", "flex");

    const top = document.getElementById("top");
    if (top) top.scrollIntoView({ behavior: "smooth" });

    navItems
      .filter((item) => item.id !== id)
      .forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) element.classList.replace("flex", "hidden");
      });

    setIsActive(id);
  };

  return (
    <nav
      className={cn(
        "md:overflow-x-clip overflow-x-auto",
        "w-full md:p-0 p-2",
        "md:relative fixed bottom-0 left-0 z-10",
        "md:bg-transparent bg-black",
      )}>
      <div className="flex sm:justify-start justify-center gap-2 p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={cn(
              "text-sm md:text-base font-medium  hover:text-gray-500 px-3 py-2",
              isActive === item.id
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent",
            )}>
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
