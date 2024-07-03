import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sejal Jain</h4>
      <h4>Copyright &copy; 2024 SJ</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sejal-jain123" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/sejal-jain-847108229" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sejaljain897@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer