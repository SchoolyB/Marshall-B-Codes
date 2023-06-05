
import marshall from '../assets/images/grayscaleMarshall.jpg'


export default function About() {
  return (
    <>
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
    </>
  )
}
