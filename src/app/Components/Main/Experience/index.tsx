import { IoIosFolderOpen } from "react-icons/io";
import "./style.css"
import { IoMdCode } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <div className="p-8">
        <div className="w-[80%] md:w-[28%] md:ml-[72%]">
          <a href="/Utkarsh_Ahuja.pdf" download>
            <div className="flex text-[#FFDB70] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-3 px-5 rounded-lg bg-gradient-to-r from-[#FFDB70]/30 to-[#202022]">
              <IoIosFolderOpen size={20} />
              <p className="pl-2">Download Resume</p>
            </div>
          </a>
        </div>
        <section className="timeline mt-5 md:mt-0">

          <div className="title-wrapper">
            <div>
              <IoMdCode className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" size={50} />
            </div>

            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Engineer Intern</h4>
              <span>Plazza</span>
              <div className="timeline-text">Nov'24 - Feb'24</div>
              <br />
              <div className="timeline-text">
                <ul>
                  <li>Developed an order service with real-time sync, auto-retries, and data cleanup to enhance order processing.</li>
                  <li>Designed a payment pipeline with Razorpay integration, achieving 99.9% automated reconciliation reliability.</li>
                  <li>Deployed Elasticsearch on AWS EC2 with Nginx, reducing query time to under 70ms for 8GB+ documents.</li>
                  <li>Built a geospatial service for polygon-based serviceability and real-time ETAs.</li>
                  <li>Optimized search using fuzzy matching, cutting query latency from 240ms to 60ms.</li>
                  <li>Implemented a high-reliability notification system ensuring 99.9% message delivery.</li>
                  <li>Developed an operations dashboard with server-side pagination, improving load times by 70%.</li>
                  <li>Designed an event tracking system with optimized schema, ensuring minimal latency.</li>
                </ul>
              </div>
            </li>
            
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Backend Developer Intern</h4>
              <span>Stealth Startup</span>
              <div className="timeline-text">Mar'23 - Aug'23</div>
              <br />
              <div className="timeline-text">
                <ul>
                  <li>Built a community management portal supporting 1000+ users with secure profile management.</li>
                  <li>Integrated Redis caching, reducing API response time from 300ms to 100ms.</li>
                  <li>Implemented Google OAuth2.0 authentication, improving security and reducing login failures.</li>
                  <li>Developed an automated email notification system with 98% delivery success.</li>
                  <li>Created an admin dashboard with React.js, improving user and event management efficiency by 35%.</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>
        <div>
          <p className="text-[#FAFAFA] font-[600] tracking-wide text-[1.5rem]">Achievements</p>
          <div className="w-[90%] text-[#FAFAFA] bg-[#232325] mx-auto my-[1vh] md:my-[2vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
            <p className="mb-1">SIH'23 Finalist</p>
            <p className="mb-1">Secured Rank3 In VIT HackHub'22</p>
            <p>Secured Global Rank 1736 In CodeKaze Sept'23</p>
          </div>
        </div>
        <section className="timeline">
          <div className="title-wrapper">
            <div>
              <FaBookReader className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" size={40} />
            </div>
            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Guru Gobind Singh Indraprastha University</h4>
              <span>2021 — 2025</span>
              <p className="timeline-text">B.Tech-Information Technology</p>
              <p className="timeline-text">CGPA: 8.6</p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}

export default Experience;
