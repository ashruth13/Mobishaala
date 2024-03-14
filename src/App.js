import './App.css';

function App() {
  return (
  <>
    <div className='main-container-mobile'>
      <p className='paragraph-subhead'>Create your <span className='span-subhead'>Digital Classroom</span> in 5 mins for <span className='span-subhead'>FREE</span> & connect to 1+ Million Students.</p>
      <div>
        <iframe className='frame' title="iframe" width="100%" height="212vh" src="https://www.youtube.com/embed/jg5d59ligW4">
        </iframe>
      </div>
      <br />
      <div className='container-center'>
        <button className='common-button'>Buy</button>
        <p className='para'>Institute/Teacher</p>
        <button className='common-button'>Get Started</button>
        <p className='para'>Student</p>
        <button className='common-button'>Download App</button>
        <br/>
        <button className='whatsapp'>
            <img className='whatsapp-image' alt="whatsapp-logo" src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ot4nqghumyjsjyylbow5" />
            Talk to Us
        </button>
      </div>
      <div className='footer'>
        <h1 className='main-head'>Mobishaala</h1>
        <p className='footer-subhead'>Vision</p>
        <p className='footer-text'>Empower Institutions & Teachers with state of the art digital classroom Technology.</p>
        <p className='footer-subhead'>Address</p>
        <p className='footer-text'><span className='footer-span'>Registered Office</span> : 804, 5Th Cross, 9th main, 4th Block Koramangala, Banglore, Karnataka 560034</p>
      
        <p className='footer-text'><span className='footer-span'>Corporate Office</span> : 293, Westend Marg, near Saket, Saidulajab, Saket, New Delhi, 110030</p>
        <p className='footer-subhead'>Quick Links</p>
        <a href="k" className='no-style-link'><p>Blog</p></a>

        <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&hl=en_AU&pli=1" className='no-style-link'><p>Android App</p></a>
        <a href="https://iphone.apkpure.com/app/mobishaala-teacher/com.mobishala.teacher" className='no-style-link'>IOS App</a>
      </div>
    </div>
    <div className='main-container-desktop'>
      <div className='dektop-flex'>
        <div className='desktop-one'>
          <h1 className='main-head'>Mobishaala</h1>
          <p className='paragraph-subhead'>Create your <span className='span-subhead'>Digital Classroom</span> in 5 mins for <span className='span-subhead'>FREE</span> & connect to 1+ Million Students.</p>
          <ul>
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class, tests, notes, ebooks and more.</li>
            <li>Reach out to millions of students anywhere, anytime.</li>
          </ul>
          <p className='para'>Institute/Teacher</p>
          <button className='common-button'>Get Started</button>
          <p className='para'>Student</p>
          <button className='common-button'>Download App</button>
          <br/>
          <button className='whatsapp' >
              <img className='whatsapp-image' alt="whatsapp-logo"  src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ot4nqghumyjsjyylbow5" />
              Talk to Us
          </button>
        </div>
        <div className='desktop-two'>
          <div>
            <iframe className='frame' title="iframe"  height="212vh" src="https://www.youtube.com/embed/jg5d59ligW4">
            </iframe>
          </div>
          <br />
          <button className='common-button'>Buy</button>
        </div>

      </div>
    </div>
    </>
  )
}

export default App;
