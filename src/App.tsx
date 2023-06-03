// import React from 'react'
import marshall from '../src/assets/images/grayscaleMarshall.jpg'
// IMPORT TECH STACK ICONS
import css from './assets/images/techIcons/css.png'
import sass from './assets/images/techIcons/sass.png'
import html from './assets/images/techIcons/html.png'
import js from './assets/images/techIcons/javascript.png'
import ts from './assets/images/techIcons/typescript.png'
import java from './assets/images/techIcons/java.png'
import python from './assets/images/techIcons/python.png'
import react from './assets/images/techIcons/react.png'
import node from './assets/images/techIcons/nodejs.png'
import bitbucket from './assets/images/techIcons/bitbucket.png'
import git from './assets/images/techIcons/git.png'
import github from './assets/images/techIcons/github.png'
import gitlab from './assets/images/techIcons/gitlab.png'
import mysql from './assets/images/techIcons/mysql.png'
import mongodb from './assets/images/techIcons/mongodb.png'
import npm from './assets/images/techIcons/npm.png'
import linux from './assets/images/techIcons/linux.png'
import fastify from './assets/images/techIcons/fastify.png'
import netlify from './assets/images/techIcons/netlify.png'
import yarn from './assets/images/techIcons/yarn.png'
import vercel from './assets/images/techIcons/vercel.png'
import idm from './assets/videos/international-data-martix.mp4'
import husk from './assets/videos/husk.mp4'
// TODO import vite icon
// TODO import express icon
// TODO possibly import windows and render.com icons
export default function App() {
  return (
    <>
      {/* start of about me section */}
      <div className='aboutMeContainer sectionContainer'>
        <div className='aboutMeParaContainer'>
          <h4 className='aboutMeParaHeading headings'>Who is Marshall B?</h4>
          <p className='aboutMePara'>
            A passionate Software Developer from Chicago, Illinois with a love
            for coding and providing solutions to the worlds problems through
            software. Experienced in JavaScript, TypeScript, React, MongoDB and
            so much more!
          </p>
        </div>
        <div className='aboutMeImgContainer'>
          <img className='imgOfMe' src={marshall} alt='Marshall B' />
        </div>
      </div>
      {/* end of about me section */}

      {/* start of techstack section */}
      <div className='techStackContainer sectionContainer'>
        {/* icon container */}
        <h4 className='techstackHeading headings'>Technologies</h4>
        {/* tech stack icons */}
        <div className='iconContainer'>
          {/* start of first row */}
          <div className='iconRow' id='firstRow'>
            <div className='icons' id='javascriptIcon'>
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
            <div className='icons' id='htmlIcon'>
              <img src={html} alt='HTML' />
            </div>
            <div className='icons' id='cssIcon'>
              <img src={css} alt='CSS' />
            </div>
            <div className='icons' id='sassIcon'>
              <img src={sass} alt='SASS' />
            </div>
            <div className='icons' id='fastifyIcon'>
              <img src={fastify} alt='Fastify' />
            </div>
            <div className='icons' id='nodeIcon'>
              <img src={node} alt='NodeJs' />
            </div>
            <div className='icons' id='reactIcon'>
              <img src={react} alt='React' />
            </div>
            <div className='icons' id='mysqlIcon'>
              <img src={mysql} alt='MySQL' />
            </div>
            <div className='icons' id='mongodbIcon'>
              <img src={mongodb} alt='MongoDB' />
            </div>
          </div>
          {/* end of first row */}

          {/* start of second row */}
          <div className='iconRow' id='secondRow'>
            <div className='icons' id='yarnIcon'>
              <img src={yarn} alt='Yarn' />
            </div>
            <div className='icons' id='npmIcon'>
              <img src={npm} alt='NPM' />
            </div>
            <div className='icons' id='linuxIcon'>
              <img src={linux} alt='Linux' />
            </div>
            <div className='icons' id='gitIcon'>
              <img src={git} alt='Git' />{' '}
            </div>
            <div className='icons' id='githubIcon'>
              <img src={github} alt='GitHub' />
            </div>
            <div className='icons' id='gitlabIcon'>
              <img src={gitlab} alt='GitLab' />
            </div>
            <div className='icons' id='bitbucketIcon'>
              <img src={bitbucket} alt='Bitbucket' />
            </div>
            <div className='icons' id='netlifyIcon'>
              <img src={netlify} alt='Netlify' />
            </div>
            <div className='icons' id='vercelIcon'>
              <img src={vercel} alt='Vercel' />
            </div>
          </div>
          {/* end of second row */}
        </div>
      </div>
      {/* end of techstack section */}
      {/*start of projects section  */}

      <div className='projectsContainer sectionContainer'>
        <h4 className='projectsContainerHeading headings'>Projects</h4>
        {/* start of project 1 */}
        <div className='projectRowContainer'>
          <div className='individualProjectContainer'>
            <h4 className='projectHeading'>International Data Matrix</h4>
            <div className='projectImgContainer'>
              <video className='projectVideo' src={idm} autoPlay muted loop />
            </div>
            <div className='projectDescriptionContainer'>
              <p className='projectDescription'>
                The International Data Matrix is a resource that anyone can use
                to learn about a country's information.
              </p>
            </div>
            <div className='projectLinks'>
              <a
                className='individualProjectLink'
                href='https://international-data-matrix.vercel.app/'
              >
                Link
              </a>
              <a
                className='individualProjectLink'
                href='https://github.com/SchoolyB/International-Data-Matrix'
              >
                Repository
              </a>
            </div>
          </div>
          {/* end of project 1 */}

          {/* start of project 2 */}
          <div className='individualProjectContainer'>
            <h4 className='projectHeading'>Husk</h4>
            <div className='projectImgContainer'></div>
            <video className='projectVideo' src={husk} autoPlay muted loop />
            <div className='projectDescriptionContainer'>
              <p className='projectDescription'>
                Husk is a simple shell built with Python that allows users to
                run a variety of commands.
              </p>
            </div>
            <div className='projectLinks'>
              <a
                className='individualProjectLink'
                href='https://github.com/SchoolyB/Husk'
              >
                Repository
              </a>
            </div>
          </div>
          {/* end of project 2 */}
        </div>
      </div>
      {/* end of projects section */}
    </>
  )
}
