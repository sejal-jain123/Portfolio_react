import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    newsPortal_ReactDesc : "A news portal using React features dynamic content, user-friendly interfaces, real-time updates, responsive design, and seamless navigation for an engaging experience.",
    newsPortal_ReactGithub : "https://github.com/sejal-jain123/newsPortal__React",
    // TindogWebsite : "https://devanshsahni.github.io/tindog/",

    ExtensionDesc : "A React extension offers dynamic functionality, enhanced UI, seamless integration, real-time updates, modular components, and improved user interactions in browsers.",
    ExtensionGithub : "https://github.com/sejal-jain123/Extension",
    // RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    PokemonDesc:"A Pokémon app using React features dynamic search, detailed Pokémon info, responsive design, modular components, and real-time data updates.",
    PokemonGithub:"https://github.com/sejal-jain123/Pokemon",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
  //   WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
  //   WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
  //   // WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox