import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaPython } from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiWireshark, SiMaltego, SiKalilinux } from 'react-icons/si';
import { TbTools } from 'react-icons/tb';

const Technologies = () => {
    const techs = [
        { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: 'CSS3' },
        { icon: <FaJs className="text-4xl text-yellow-400" />, name: 'JavaScript' },
        { icon: <FaReact className="text-4xl text-cyan-400" />, name: 'React' },
        { icon: <SiNextdotjs className="text-4xl text-white" />, name: 'Next.js' },
        { icon: <FaNodeJs className="text-4xl text-green-500" />, name: 'Node.js' },
        { icon: <FaGit className="text-4xl text-orange-600" />, name: 'Git' },
        { icon: <FaGithub className="text-4xl text-gray-100" />, name: 'GitHub' },
        { icon: <SiMongodb className="text-4xl text-green-500" />, name: 'MongoDB' },
        { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, name: 'Tailwind' },
        { icon: <FaPython className="text-4xl text-yellow-300" />, name: 'Python' },
        { icon: <SiWireshark className="text-4xl text-blue-400" />, name: 'Wireshark' },
        { icon: <SiMaltego className="text-4xl text-red-500" />, name: 'Maltego' },
        { icon: <SiKalilinux className="text-4xl text-blue-600" />, name: 'Kali Linux' },
        { icon: <TbTools className="text-4xl text-gray-400" />, name: 'OSINT Tools' },
    ];

    return (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Technologies & Tools
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg transform transition-transform duration-200 hover:scale-105"
                        >
                            {tech.icon}
                            <span className="mt-4 text-sm text-gray-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;