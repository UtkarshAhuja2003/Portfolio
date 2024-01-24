import blogs from "@/config/blogs.json";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="mx-auto md:p-6 px-4 md:my-5">
      <div className="md:flex flex-wrap justify-between">
        {
          blogs.map((blog, index) => (
            <BlogCard key={index} id={blog.id} title={blog.title} img={blog.img} date={blog.date} desc={blog.desc} tag={blog.tag} link={blog.link}/>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs