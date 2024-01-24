import Image from "next/image";

interface BlogCardProps {
    id: string;
    title: string;
    desc: string;
    date: string;
    tag: string;
    link: string;
    img: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, desc, date, tag, link, img }) => {
    return (
        <div className="group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-b-xl h-[100%] my-7 md:my-0" key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl group-hover:scale-90 transition-all duration-500 w-[100%]" src={`/blogs/${img}`} alt={title} width={300} height={200} />
                <div className="bg-[#202022] rounded-b-xl p-4">
                    <div className="flex text-[#A0A0A0] text-[0.8rem]">
                        <p>{tag}</p>
                        <p className="mx-2">•</p>
                        <p>{date}</p>
                    </div>
                    <p className="text-[#FAFAFA] group-hover:text-[#FFDB70] font-[600] tracking-wide text-[1.5rem]">{title}</p>
                    <p className="text-[#D6D6D6] text-[0.9rem]">{desc}</p>
                </div>
            </a>
        </div>
    )
}

export default BlogCard