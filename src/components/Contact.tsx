
export default function Contact() {
  return (
    <>
      <div className='contactContainer'>
        <h4 className='contactHeading headings'>Contact Me</h4>
        <form className='contactForm'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Your name..' />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='Your email..' />
          <label htmlFor='subject'>Subject</label>
          <textarea className='textArea' id='subject' name='subject' placeholder='What does this concern?'></textarea>
          <textarea id='textArea' name='description' placeholder='Write something...'></textarea>
        </form>
    </div>
    </>
  )
}
