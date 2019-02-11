import React, { Component } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa'
import './App.css'
import './Background.css'

class App extends Component {
  render() {
    return (
      <div className='App bg container-fluid'>
        <div className='row'>
          <div className='quote col-md-9 col-md-push-3'>
            <div className='content'>
              "Awareness is becoming acquainted with the environments, no matter where one happens to be." -&nbsp;Sigurd&nbsp;F.&nbsp;Olson
            </div>
          </div>
          <div className='col-md-3 col-md-pull-9'>
            <div className='sidebar'>
              <h1>
                arctair.com
              </h1>
              <h2>Contact</h2>
              <div className='contact'>
                <a href='https://github.com/arctair'>
                  <FaGithub aria-hidden />
                  <span class='sr-only'>My Github</span>
                </a>
                <a href='https://linkedin.com/in/jtyler-arctair' name='linkedin'>
                  <FaLinkedin aria-hidden />
                  <span class='sr-only'>My LinkedIn</span>
                </a>
                <a href='mailto:tyler@arctair.com' name='email'>
                  <FaEnvelope />
                  <span class='sr-only'>My email address</span>
                </a>
                <a href='https://open.spotify.com/user/tdog158' name='spotify'>
                  <FaSpotify />
                  <span class='sr-only'>My Spotify</span>
                </a>
              </div>
              <h2>Hyperlinks</h2>
              <div className='links'>
                <a className='nav-bg cruftbusters' href='https://cruftbusters.com'>Cruftbusters Consulting</a>
                <a className='nav-bg snare' href='https://snare.cc'>Snare Podcasts</a>
                <a className='nav-bg fallmap' href='http://fall.arctair.com'>Minnesota Fall Map</a>
              </div>
              <h2>Bio</h2>
              <p>
                I write code and look at maps. Fargo raised, Minnesota spirit.
              </p>
              <h2>Bookshelf</h2>
              <div className='bookshelf'>
                <ul>
                  <li>The Ender Quintet</li>
                  <li>Astrophysics for People in a Hurry</li>
                  <li>Clean Code</li>
                  <li>Alexander the Great and the Logisics of the Macedonian Army</li>
                  <li>Joy, Inc.</li>
                </ul>
              </div>
              <h2>Now Playing</h2>
              <div className='now-playing'>
                <iframe
                  src="https://open.spotify.com/embed/user/1274512501/playlist/6tdYRrSvLhfkETS8cJKMTM"
                  width="300"
                  height="80"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title='now-playing-dream-pop'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
