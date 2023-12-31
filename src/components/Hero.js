import { FaTwitter, FaGithub, FaLinkedin, FaArrowDown} from "react-icons/fa";
import avatar from "../assests/avatar.png";


const Hero = () => {
    const SOCIAL = [
    {    
    id: 1,
    link: "https://twitter.com/ShreeMahak",
    icon: <FaTwitter />,
    },
    {
    id: 2,
    link: "https://github.com/Mahak491",
    icon: <FaGithub />,
    },
    {
    id: 3,
    link: "https://www.linkedin.com/in/mahak-shree-3398a21a3/",
    icon: <FaLinkedin />,
    },
];

window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");
    if (this.scrollY >= 90) downArrow.classList.add("hide-down-farrow");
    else downArrow.classList.remove("hide-down-arrow");
    });

    return(
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl font-bold"> Mahak Shree</h2>
        <h3 className="py-3 text-2xl">Developer</h3>
        <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site. Bridging the gap between design and development, I specialize in shaping SaaS applications with an artistic touch and code precision.
        </p>
        <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
        <a href={link}
        key={id}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer duration-300 hover: text-black-600">
        {icon}
        </a>
        ))}
        </div>
        <div >
            <img src={avatar} alt className="w-60 h-60 md:w-70 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5"/>
        <a href="/Mahak_Shree_Resumee.pdf"
        download={true}
        className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600
        to-teal-500 text-white py-2 rounded-lg">
        Resume
        </a>
        </div>
        <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
        </div>
</section>
)
};

export default Hero;