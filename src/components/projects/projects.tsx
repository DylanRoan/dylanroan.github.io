import { useEffect, useState } from "react";
import type { ProjectItemType } from "./types";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------------

type Props = {
  projects: ProjectItemType[];
};

export default function Projects({ projects }: Props) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selectedProject =
    typeof selectedIdx === "number" ? projects[selectedIdx] : null;

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.removeProperty("overflow");
  }, [selectedProject]);

  return (
    <>
      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedIdx(null)}
        />
      )}

      {projects.map((project, idx) => (
        <ProjectItem
          key={idx}
          project={project}
          onClick={() => setSelectedIdx(idx)}
        />
      ))}
    </>
  );
}

// ----------------------------------------------------------------------------

type ItemProps = {
  project: ProjectItemType;
  onClick?: () => void;
};

function ProjectItem({ project, onClick }: ItemProps) {
  const { title, description, skills, image, link } = project;

  return (
    <div className="flex flex-col gap-4">
      <button onClick={onClick} className="focus:outline-none">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-40 rounded-lg hover:scale-105 transition-transform active:scale-100"
          draggable={false}
        />
      </button>

      <div className="flex flex-col">
        {link && (
          <div className="flex">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold flex items-center gap-1 hover:underline">
              <p>{title}</p>

              <Icon icon="mdi:open-in-new" className="w-4 h-4" />
            </a>
          </div>
        )}

        {!link && <h3 className="text-lg font-semibold">{title}</h3>}

        {description && <p className="text-base line-clamp-2">{description}</p>}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------

type PopupType = {
  project: ProjectItemType;
  onClose?: () => void;
};

function ProjectPopup({ project, onClose }: PopupType) {
  const { title, description, skills, image, link, logo, info = [] } = project;

  return (
    <div
      role="dialog"
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}>
      <div
        className="bg-slate-950 rounded-lg shadow-lg max-w-3xl w-full p-6 overflow-x-hidden md:overflow-y-hidden overflow-y-auto scrollbar-soft max-h-full flex md:gap-6 gap-4 flex-col md:flex-row hide-scrollbar relative md:static"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
          onClick={onClose}>
          <Icon icon="mdi:close" className="w-6 h-6" />
        </button>
        <div className="flex-1 flex flex-col gap-4">
          <a
            href={link}
            target={link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex-1">
            <img
              src={image}
              alt={title}
              className="object-contain w-full h-full rounded-lg"
              draggable={false}
            />
          </a>

          {description && <p>{description}</p>}
        </div>
        <div className="flex-1 gap-4 flex flex-col md:overflow-y-auto scrollbar-soft">
          <div className="flex">
            <a
              href={link}
              target={link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={cn("flex gap-2 items-center", {
                "hover:underline": !!link,
              })}>
              {logo && (
                <img
                  src={logo}
                  alt={`${title} logo`}
                  className="w-10 h-10 object-contain rounded"
                  draggable={false}
                />
              )}

              <h2 className="text-2xl font-bold">{title}</h2>

              {/* <Icon icon="mdi:open-in-new" className="w-5 h-5" /> */}
              {link && <Icon icon="mdi:open-in-new" className="w-5 h-5" />}
            </a>
          </div>

          {info &&
            info.map(({ title: info_title, description: info_desc }, idx) => (
              <div key={idx}>
                {info_title && (
                  <h3 className="text-xl font-semibold mb-2">{info_title}</h3>
                )}
                <p>{info_desc}</p>
              </div>
            ))}

          {false && skills.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills Used:</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1 rounded-full">
                    {skill.iconify ? (
                      <Icon icon={skill.iconify} className="w-5 h-5" />
                    ) : (
                      <i className={`devicon-${skill.icon}-plain text-2xl`} />
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
