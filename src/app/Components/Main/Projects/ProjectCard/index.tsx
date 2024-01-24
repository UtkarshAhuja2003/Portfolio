import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

interface ProjectCardProps {
    id: string;
    liveLink: string;
    githubLink: string;
    title: string;
    imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, liveLink, githubLink, title, imageSrc }) => {
    return (
        <div className="md:w-[30%] w-[90%] mx-auto h-[60%] relative md:my-5 my-9" key={id}>
            <Image className="rounded-xl z-10" src={`/projects/${imageSrc}`} alt={title} width={300} height={300} />
            <div className="flex text-[#FFDB70] items-center z-30 justify-center absolute rounded-xl inset-0 bg-black bg-opacity-50">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#383838] p-2 rounded-lg mr-4"><FaEye size={23} /></div>
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#383838] p-2 rounded-lg"><IoLogoGithub size={23} /></div>
                </a>
            </div>
            <p className="text-[#E3E3E3] absolute pt-1 pl-[5%]">{title}</p>
        </div>
    )
}

export default ProjectCard