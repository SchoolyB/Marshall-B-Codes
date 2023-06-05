
import css from '../assets/images/techIcons/css.png'
import sass from '../assets/images/techIcons/sass.png'
import html from '../assets/images/techIcons/html.png'
import js from '../assets/images/techIcons/javascript.png'
import ts from '../assets/images/techIcons/typescript.png'
import java from '../assets/images/techIcons/java.png'
import python from '../assets/images/techIcons/python.png'
import react from '../assets/images/techIcons/react.png'
import node from '../assets/images/techIcons/nodejs.png'
import bitbucket from '../assets/images/techIcons/bitbucket.png'
import git from '../assets/images/techIcons/git.png'
import github from '../assets/images/techIcons/github.png'
import gitlab from '../assets/images/techIcons/gitlab.png'
import mysql from '../assets/images/techIcons/mysql.png'
import mongodb from '../assets/images/techIcons/mongodb.png'
import npm from '../assets/images/techIcons/npm.png'
import linux from '../assets/images/techIcons/linux.png'
import fastify from '../assets/images/techIcons/fastify.png'
import netlify from '../assets/images/techIcons/netlify.png'
import yarn from '../assets/images/techIcons/yarn.png'
import vercel from '../assets/images/techIcons/vercel.png'
// TODO import vite icon
// TODO import express icon
// TODO possibly import windows and render.com icons


export default function Tech() {
  return (
    <>
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
    </>
  )
}
