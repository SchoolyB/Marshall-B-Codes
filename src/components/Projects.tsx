import React from 'react'
import idm from '../assets/videos/international-data-martix.mp4'
import husk from '../assets/videos/husk.mp4'

export default function Projects() {
  return (
    <>
<div className='projectsContainer sectionContainer'>
        <h4 className='projectsContainerHeading headings'>Projects</h4>
        {/* start of project 1 */}
        <div className='projectRowContainer'>
          <div className='individualProjectContainer'>
            <h4 className='projectHeading'>International Data Matrix</h4>
            <div className='projectImgContainer'>
              <a href='https://international-data-matrix.vercel.app/'>
                <video className='projectVideo' src={idm} autoPlay muted loop />
              </a>
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
                href='https://github.com/SchoolyB/International-Data-Matrix'
              >
                GitHub
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
                Husk is a simple Linux OS shell built with Python that allows
                users to run a variety of commands.
              </p>
            </div>
            <div className='projectLinks'>
              <a
                className='individualProjectLink'
                href='https://github.com/SchoolyB/Husk'
              >
              GitHub
              </a>
            </div>
          </div>
          {/* end of project 2 */}
        </div>
      </div>
    </>
  )
}
