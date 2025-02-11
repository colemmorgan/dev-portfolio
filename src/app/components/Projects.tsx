type Project = {
  src: string;
  title: string;
  desc: string;
  tech: string[];
  liveLink: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    src: "/projects/spcb.webp",
    title: "Custom Content Management System + Club Website",
    tech: ["Next.js", "TypeScript","Figma", "Firebase", "Tailwind"],
    desc: " Software and website for the Society of PC Building that enables admins to update website content without code.",
    liveLink: "https://www.spcbatuf.org/",
    githubLink: "https://github.com/PCBuilding/SPCBWebsite",
  },
  {
    src: "/projects/cc.webp",
    title: "Coding Question Platform",
    tech: ["React", "Recoil", "Docker", "Firebase", "Tailwind"],
    desc: "A coding question platform with real-time grading and tracking through Firebase and containerized code execution.",
    liveLink: "https://code-code-theta.vercel.app/",
    githubLink: "https://github.com/colemmorgan/CodeCode",
  },
  {
    src: "/projects/dsc.webp",
    title: "Google DSC Landing Page",
    tech: ["React", "TypeScript", "Figma", "Tailwind"],
    desc: "Developed and designed a modern landing page for a student organization with micro-interactions using React & Framer Motion.",
    liveLink: "https://ufdsc.org/",
    githubLink: "https://github.com/colemmorgan/ufdsc",
  },

  {
    src: "/projects/fd.webp",
    title: "Professional Coaching Site",
    tech: ["Nextjs", "TypeScript", "Figma", "Tailwind"],
    desc: "Freelance design/development project I created for a client to tell a story about his career and create a personal brand.",
    liveLink: "https://fionn.pro/",
  },
  {
    src: "/projects/fufillment.webp",
    title: "Medical Microcredentialing App",
    tech: ["React", "Recoil", "TypeScript", "Firebase"],
    desc: "A full-stack web app that rewards users for expanding their medical knowledge through live trivia, courses, and notecards.",
    liveLink: "https://fufillment-n5cn.vercel.app/",
    githubLink: "https://github.com/colemmorgan/Medihacks2024",
  },
];

export default function Projects() {
  return (
    <div
      className="max-w-[960px] mx-auto py-16 border-b border-gray-200"
      id="work"
    >
      <h3 className="text-lg text-dull font-medium tracking-wider">WORK</h3>

      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </div>
  );
}

type ProjectProps = {
  project: Project;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="mt-16 md:mt-8 md:grid grid-cols-5 gap-6 xl:gap-8">
      <figure className="col-span-3">
        <img src={project.src} alt="" className="w-full rounded-sm" />
      </figure>
      <div className="col-span-2 pt-5 md:pt-0">
        <p className="text-lg sm:text-xl xl:text-2xl">{project.title}</p>
        <p className="pt-1 sm:pt-2.5 text-dull">{project.desc}</p>
        <p className="pt-1.5 sm:pt-2 text-dull text-sm">
          Tech:{" "}
          {project.tech.map((tech) => (
            <span key={tech}>{tech}, </span>
          ))}
        </p>
        <div className="pt-4 flex gap-2">
          <a
            href={project.liveLink}
            className="bg-black text-white text-sm rounded-full px-4 py-1.5 hover:bg-[#404040] transition-all"
            target="_blank"
          >
            Live Demo
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="bg-gray-200 text-black text-sm rounded-full px-4 py-1.5 hover:bg-gray-300"
              target="_blank"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
