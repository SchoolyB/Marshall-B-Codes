import React from 'react'

export default function App() {
  return (
    <>
      {/* about me section */}
      <div className='aboutMeContainer'>
        <div className='aboutMeParaContainer'>{/* TODO: add paragraph */}</div>

        <div className='aboutMeImgContainer'>{/* TODO: add img */}</div>
      </div>

      {/* techstack section */}
      <div className='techStackContainer'>
        <div className='frontendStackContianer'>
          {/* TODO: add frontend tech */}
        </div>

        <div className='backendStackContainer'>
          {/* TODO: add backend tech */}
        </div>

        <div className='otherStackContainer'>{/* TODO: add other tech */}</div>
      </div>

      {/*projects section  */}
      <div className='projectsContainer'>
        <div className='project1Container'>
          {/* TODO: add international data matrix info */}
        </div>

        <div className='project2Container'>{/* TODO: add husk info */}</div>
      </div>
    </>
  )
}
