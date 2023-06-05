export default function Contact() {
  return (
    <>
      <div className='contactContainer'>
        <h4 className='contactHeading'>Contact Me</h4>
        <div className='contactFormContainer'>
          <form
            className='contactForm'
            action='https://formspree.io/f/mknelldn'
            method='POST'
          >
            <label htmlFor='name'></label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name...'
            />
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email...'
            />
            <label htmlFor='subject'></label>
            <textarea
              className='textArea subject '
              maxLength={20}
              id='subject'
              name='subject'
              placeholder='What does this concern?'
            ></textarea>
            <textarea
              className='textArea description'
              name='description'
              placeholder='Your Message'
              rows={10}
              maxLength={400}
            ></textarea>
            <button
              className='contactButton'
              title='submit'
              role='button'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>

        <div className='contactLinks'></div>
      </div>
    </>
  )
}
