import React from 'react'
import marshall from '../src/assets/images/grayscaleMarshall.jpg'
import js from '../src/assets/images/techstackIcons/javascript.svg'
import ts from '../src/assets/images/techstackIcons/typescript.svg'
// import react from '../src/assets/images/techstackIcons/react.svg' TODO: add react icon
import java from '../src/assets/images/techstackIcons/java.svg'
import python from '../src/assets/images/techstackIcons/python.svg'
// import node from '../src/assets/images/techstackIcons/node.svg' TODO: add node icon
import express from '../src/assets/images/techstackIcons/express.svg'
// import mongodb from '../src/assets/images/techstackIcons/mongodb.svg' TODO: add mongodb icon
import git from '../src/assets/images/techstackIcons/git.svg'
// import github from '../src/assets/images/techstackIcons/github.svg' TODO: add github icon

// import gitlab from '../src/assets/images/techstackIcons/gitlab.svg' TODO: add gitlab icon
import bitbucket from '../src/assets/images/techstackIcons/bitbucket.svg'
import netlify from '../src/assets/images/techstackIcons/netlify.svg'
import postman from '../src/assets/images/techstackIcons/postman.svg'

export default function App() {
  return (
    <>
      {/* start of about me section */}
      <div className='aboutMeContainer'>
        <div className='aboutMeParaContainer'>
          <h4 className='aboutMeParaHeading'>Who is Marshall B?</h4>
          <p>
            A passionate Software Developer from Chicago, Illinois with a love
            for coding and providing solutions to the worlds problems through
            software. Experienced in JavaScript, TypeScript, React, MongoDB and
            so much more!
          </p>
        </div>

        <div className='aboutMeImgContainer'>
          <img src={marshall} alt='Marshall B' />
        </div>
      </div>
      {/* end of about me section */}

      {/* start of techstack section */}
      <div className='techStackContainer'>
        {/* icon container */}
        <div className='iconContainer'>
          <h4 className='techstackHeading'>The Stack</h4>
          <div className='icons'>
            {/* icon images */}
            <img src={js} alt='JavaScript' />
          </div>
          <div className='icons' id='typescriptIcon'>
            <img src={ts} alt='TypeScript' />
          </div>
          <div className='icons' id='javaIcon'>
            <img src={java} alt='Java' />
          </div>
          <div className='icons' id='pythonIcon'>
            <img src={python} alt='Python' />
          </div>
          <div className='icons' id='expressIcon'>
            <img src={express} alt='Express' />
          </div>
          <div className='icons' id='gitIcon'>
            <img src={git} alt='Git' />
          </div>
          <div className='icons' id='bitbucketIcon'>
            <img src={bitbucket} alt='Bitbucket' />
          </div>
          <div className='icons' id='netlifyIcon'>
            <img src={netlify} alt='Netlify' />
          </div>
          <div className='icons' id='postmanIcon'>
            <img src={postman} alt='Postman' />
          </div>
        </div>
      </div>
      {/* end of techstack section */}

      {/*start of projects section  */}
      <div className='projectsContainer'>
        <div className='project1Container'>
          {/* TODO: add international data matrix info */}
        </div>

        <div className='project2Container'>{/* TODO: add husk info */}</div>
      </div>
      {/* end of projects section */}
    </>
  )
}
