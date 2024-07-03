import React from 'react';
import ProjectBox from './ProjectBox';
import newsImage from '../images/news.jpg';
import PokemonImage from '../images/pokem.png';
import ExtensionImage from '../images/exten.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={newsImage} projectName="NewsPortal" />
        <ProjectBox projectPhoto={ExtensionImage} projectName="Extension" />
        <ProjectBox projectPhoto={PokemonImage} projectName="Pokemon" />
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects