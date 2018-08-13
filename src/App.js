import React, { Component } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App bg container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='sidebar'>
              <h1>
                arctair.com
              </h1>
              <p>
                Welcome to my site. It houses most of my externally-facing
                services and this page serves as an introduction, a list of
                contact options, and a directory for the services I want you to
                know about.
              </p>
              <p>
                My name is Tyler. I'm a web technology and GIS engineer. I love
                spending my time at the common edge between the outdoors and
                technology. You'll often find me tweaking my interstate homelab,
                studying software packages and paradigms, biking, hiking, playing
                Duck Game, reading, building a playlist, or cooking.
              </p>
              <div className='contact'>
                <a href='https://github.com/arctair'><FaGithub /></a>
                <a href='https://linkedin.com/in/jtyler-arctair'><FaLinkedin /></a>
                <a href='mailto:jtyler_@outlook.com'><FaEnvelope /></a>
                <a href='https://open.spotify.com/user/tdog158'><FaSpotify /></a>
              </div>
              <div className='links'>
                <a className='nav-bg hammocky' href='http://hammocky.com'>Hammocky</a>
                <a className='nav-bg cruftbusters' href='http://cruftbusters.arctair.com'>Cruftbusters Consulting</a>
                <a className='nav-bg fallmap' href='http://fall.arctair.com'>Minnesota Fall Map</a>
              </div>
            </div>
          </div>
          <div className='quote col-md-9'>
            <div className='content col-md-12'>
              "Awareness is becoming acquainted with the environments, no matter where one happens to be." -&nbsp;Sigurd&nbsp;F.&nbsp;Olson
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
