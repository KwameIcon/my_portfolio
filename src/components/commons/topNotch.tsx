"use client";;
import { DiDocker, DiGit, DiLaravel } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiAntdesign, SiCss3, SiEtcd, SiFramework, SiHtml5, SiJavascript, SiMysql, SiPhp, SiReact, SiShadcnui, SiStyledcomponents, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setBackgroundColor, setBackgroundImage } from "@/store/slice/backgroundSlice";
import { Tooltip } from "antd";



const skills = [
  { id: "javascript", icon: SiJavascript, image: "/bg/javascript.jpg", tooltipText: "JavaScript", color: "yellow" },
  { id: "typescript", icon: SiTypescript, image: "/bg/typescript.jpeg", tooltipText: "TypeScript", color: "cyan" },
  { id: "php", icon: SiPhp, image: "/bg/php.png", tooltipText: "PHP", color: "green" },
  { id: "react", icon: SiReact, image: "/bg/react.webp", tooltipText: "React", color: "cyan" },
  { id: "nextjs", icon: TbBrandNextjs, image: "/bg/nextjs.png", tooltipText: "NextJS", color: "cyan" },
  { id: "tailwind", icon: SiTailwindcss, image: "/bg/tailwind.jpg", tooltipText: "TailwindCSS", color: "cyan" },
  { id: "qa", icon: SiTestinglibrary, image: "/bg/qa.jpg", tooltipText: "Quality Assurance", color: "white" },
  { id: "docker", icon: DiDocker, image: "/bg/docker.png", tooltipText: "Docker", color: "cyan" },
  { id: "git", icon: DiGit, image: "/bg/git.png", tooltipText: "Git", color: "cyan" },
  { id: "figma", icon: FiFigma, image: "/bg/figma.png", tooltipText: "Figma", color: "cyan" },
  { id: "laravel", icon: DiLaravel, image: "/bg/laravel.jpg", tooltipText: "Laravel", color: "cyan" },
  { id: "slim", icon: SiFramework, image: "/bg/slim.webp", tooltipText: "Php Slim", color: "black" },
  { id: "antd", icon: SiAntdesign, image: "/bg/antd.jpeg", tooltipText: "Ant Design", color: "cyan" },
  { id: "shadcn", icon: SiShadcnui, image: "/bg/shadcn.jpeg", tooltipText: "ShadCN", color: "black" },
  { id: "framer-motion", icon: TbBrandFramerMotion, image: "/bg/framer-motion.webp", tooltipText: "Framer Motion", color: "indigo" },
  { id: "mysql", icon: SiMysql, image: "/bg/mysql.png", tooltipText: "MySQL", color: "indigo" },
  { id: "html", icon: SiHtml5, image: "/bg/html.png", tooltipText: "HTML5", color: "cyan" },
  { id: "css", icon: SiCss3, image: "/bg/css.jpg", tooltipText: "CSS3", color: "indigo" },
  { id: "styled-components", icon: SiStyledcomponents, image: "/bg/styled-components.png", tooltipText: "Styled Components", color: "cyan" },
  { id: "etc", icon: SiEtcd, image: "/bg/etc.jpg", tooltipText: "Etc", color: "brown" }
];




export const colorClassMap = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-500/20";
    case "red":
      return "bg-red-500/20";
    case "green":
      return "bg-green-500/20";
    case "cyan":
      return "bg-cyan-500/20";
    case "indigo":
      return "bg-indigo-500/20";
    case "black":
      return "bg-black/20";
    case "yellow":
      return "bg-yellow-400/20";
    case "brown":
      return "bg-yellow-900/20";
    default:
      return "bg-cyan-500/20";
  }
};



export default function TopNotch() {


  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconColor = useSelector((state: any) => state.background.color);



  const handleSkillButtonClick = (image: string, color: string) => {
    dispatch(setBackgroundImage(image));
    dispatch(setBackgroundColor(color));
  };




  return (
    <section className="max-w-full max-h-20 relative group">


      {/* notch */}
      <span className={`absolute top-1 left-[48%] w-20 h-5 ${colorClassMap(iconColor)} border border-gray-300 rounded-full`} />


      {/* skills (animate on hover of parent group) */}
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0, y: -20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute top-7 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 ${colorClassMap(iconColor)} border border-black/10 rounded-2xl px-4 py-2 pointer-events-none group-hover:pointer-events-auto`}
      >
        {skills.map((skill) => (
          <motion.li
            key={skill.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.2, y: -15 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 8,
            }}
            className="flex items-center space-x-2"
            onClick={() => handleSkillButtonClick(skill.image, skill.color)}
          >
            <Tooltip title={skill.tooltipText}>
              <div className="w-12 h-12 border border-black/10 bg-gray-200/5 rounded-full flex items-center justify-center cursor-pointer">
                <skill.icon className="w-9 h-9" style={{ color: iconColor }} />
              </div>
            </Tooltip>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
