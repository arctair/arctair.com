import React, { Component } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa'
import './App.css'

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
                <a href='https://github.com/arctair'><FaGithub /></a>
                <a href='https://linkedin.com/in/jtyler-arctair'><FaLinkedin /></a>
                <a href='mailto:jtyler_@outlook.com'><FaEnvelope /></a>
                <a href='https://open.spotify.com/user/tdog158'><FaSpotify /></a>
              </div>
              <h2>Hyperlinks</h2>
              <div className='links'>
                <a className='nav-bg hammocky' href='http://hammocky.com'>Hammocky</a>
                <a className='nav-bg cruftbusters' href='http://cruftbusters.arctair.com'>Cruftbusters Consulting</a>
                <a className='nav-bg fallmap' href='http://fall.arctair.com'>Minnesota Fall Map</a>
                <a className='nav-bg storyteller' href='#'>Storyteller (coming soon)</a>
              </div>
              <h2>Bio</h2>
              <p>
                My name is Tyler. I'm a web technology and GIS engineer. I love
                spending my time at the common edge between the outdoors and
                technology. You'll often find me tweaking my interstate homelab,
                studying software packages and paradigms, biking, hiking, playing
                Duck Game, reading, building a playlist, or cooking.
              </p>
              <h2>Bookshelf</h2>
              <div className='bookshelf'>
                <ul>
                  <li>The Ender Quintet</li>
                  <li>Astrophysics for People in a Hurry</li>
                  <li>The Singing Wilderness</li>
                  <li>Clean Code</li>
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
