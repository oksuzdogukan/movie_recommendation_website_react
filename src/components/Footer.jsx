import { FaLinkedin } from "react-icons/fa";

function Footer() {




  return (
    <div className="bg-[#6080a0]  p-7 text-center">

      <div>© 2025 MovieMind. All rights reserved.</div>

      <div className="flex justify-center gap-6 mt-7">
        <a href="https://www.linkedin.com/in/ali-duman-062952293/" target="_blank" title="Ali's Linkedin"> <FaLinkedin className="text-4xl"/></a>

        <a href="https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/" target="_blank" title="Dogukan's Linkedin"> <FaLinkedin className="text-4xl"/></a>

        <a href="https://www.linkedin.com/in/melihcan-tokdemir-6a8905330/" target="_blank" title="Melih's Linkedin"> <FaLinkedin className="text-4xl"/></a>

        <a href="https://www.linkedin.com/in/tunahan-aydin-388628365/" target="_blank" title="Tunahan's Linkedin"> <FaLinkedin className="text-4xl"/></a>
      </div>
    </div>
  )
}

export default Footer