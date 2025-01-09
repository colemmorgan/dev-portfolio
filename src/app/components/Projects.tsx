type Project = {
  src:string;
  title: string;
  desc: string;
  tech: string[];
  liveLink: string;
  githubLink: string
}

const projects: Project[] = [
  {
    src: "/projects/dsc.webp",
    title: "Google DSC Landing Page",
    tech: ["React", "TypeScript", "Figma", "Tailwind"],
    desc: "Developed and designed a modern landing page for a student organization with micro-interactions using React & Framer Motion.",
    liveLink: "https://ufdsc.org/",
    githubLink: "https://github.com/colemmorgan/ufdsc",
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
    <div className="max-w-[960px] mx-auto py-16 border-b border-gray-200" id="work">
      <h3 className="text-lg text-dull font-medium tracking-wider">WORK</h3>

      <div className="mt-6 md:grid grid-cols-5 gap-6">
        <figure className="col-span-3">
          <img src="/projects/spcb2.webp" alt="" className="w-full rounded-sm" />
        </figure>
        <div className="col-span-2 pt-5 md:pt-0">
          <p className="text-lg sm:text-xl lg:text-2xl">
            Custom Content Management System + Club Website
          </p>
          <p className="pt-1 md:pt-1.5 text-dull">
            Software and website for the Society of PC Building that
            enables admins to update content on the client-side without code.
          </p>
          <p className="pt-2.5 text-dull text-sm">
            Tech: Next.js, TypeScipt, React, Firebase, Tailwind.
          </p>
          <p className="pt-4">Coming January 2025</p>
        </div>
      </div>

      {projects.map((project) => (
        <Project project={project} key={project.title}/>
      ))}

      
   
    </div>
  );
}


type ProjectProps = {
  project: Project
}

const Project:React.FC<ProjectProps> = ({project}) => {
  return (
    <div className="mt-16 md:mt-8 md:grid grid-cols-5 gap-6">
    <figure className="col-span-3">
      <img src={project.src} alt="" className="w-full rounded-sm" />
    </figure>
    <div className="col-span-2 pt-5 md:pt-0">
      <p className="text-lg sm:text-xl lg:text-2xl">{project.title}</p>
      <p className="pt-1 sm:pt-1.5 text-dull">
        {project.desc}
      </p>
      <p className="pt-1.5 sm:pt-3 text-dull text-sm">
        Tech: {project.tech.map((tech) => (
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
        <a
          href={project.githubLink}
          className="bg-gray-200 text-black text-sm rounded-full px-4 py-1.5 hover:bg-gray-300"
          target="_blank"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
  )
}