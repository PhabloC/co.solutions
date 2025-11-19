import FigmaIcon from "@/app/svg/FigmaIcon";
import GithubIcon from "@/app/svg/GithubIcon";
import NextjsIcon from "@/app/svg/NextjsIcon";
import NodejsIcon from "@/app/svg/NodejsIcon";
import ReactIcon from "@/app/svg/ReactIcon";
import TailwindIcon from "@/app/svg/TailwindIcon";
import TypeScriptIcon from "@/app/svg/TypeScriptIcon";
import { motion } from "framer-motion";

const techs = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js 16", icon: <NextjsIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Node.js", icon: <NodejsIcon /> },
  { name: "GSAP", icon: <GithubIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function TechStack() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-16"
    >
      {techs.map((tech) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.name}
            variants={item}
            className="group flex flex-col items-center gap-3"
          >
            <div
              className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                          group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300"
            >
              <div className="w-10 h-10 text-white/80">{tech.icon}</div>
            </div>
            <span className="text-sm text-white/60">{tech.name}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
