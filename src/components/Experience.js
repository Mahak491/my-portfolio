import Section from "./common/Section";
import web from "../assests/web.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <Section
        title="Nano Kernel Experience 🚀"
        subtitle="I worked at Nano Kernel as a Full Stack MERN Developer from December 2024 to October 2026. I worked on enterprise applications using React.js, Next.js, TypeScript, Node.js, REST APIs, MongoDB, Tailwind CSS, Redux Toolkit, Zustand, and TanStack Query. I contributed to authentication, role-based access control, asset management, inventory, administration, depot management, and other business modules. I also worked on API integration, state management, permissions, OTP/MFA flows, and mentored a team of developers."
      >
        <br />
        <div className="max-w-sm flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
          <img src={web} alt="Nano Kernel" className="w-1/2" />

          <div className="w-1/3 flex flex-col items-center justify-evenly p-2">
            <h2>Nano Kernel</h2>

            <a
              className="text-2xl cursor-pointer hover:scale-110"
              href="https://www.nanokernel.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </Section>
     

      {/* Altiux Experience */}
      <Section
        title="Altiux Experience 🚀"
        subtitle="I worked at Altiux Innovations, where I gained valuable experience in frontend development and strengthened my understanding of building professional web applications."
      >
        <br />

        <div className="max-w-sm flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
          <img src={web} alt="Altiux" className="w-1/2" />

          <div className="w-1/3 flex flex-col items-center justify-evenly p-2">
            <h2>Altiux's Website</h2>

            <a
              className="text-2xl cursor-pointer hover:scale-110"
              href="https://www.altiux.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </Section>

       <Section
        title="KarmaLifeAI Experience 📈"
        subtitle="I worked as a Frontend Intern at KarmaLifeAI, where I gained hands-on experience in frontend development and learned how software teams work in a professional startup environment."
      >
        <br />

        <div className="max-w-sm flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
          <img src={web} alt="KarmaLifeAI" className="w-1/2" />

          <div className="w-1/3 flex flex-col items-center justify-evenly p-2">
            <h2>Company's Website</h2>

            <a
              className="text-2xl cursor-pointer hover:scale-110"
              href="https://karmalife.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;
