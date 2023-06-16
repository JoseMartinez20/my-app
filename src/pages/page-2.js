// import React from 'react'
// import Link from 'gatsby-link'

// const SecondPage = () => (
//   <div>
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </div>
// )

// export default SecondPage

import React from 'react'
import ChatBox from './chatbox';
import Wave from '../components/Wave';
import '../layouts/page-2.css'


const SecondPage = () => (
  <div className='Hero2'>
  <div className='HeroGroup2'>
    <h1>Evavi CustomerGPT Email</h1>
    <p>This is what I have so far.</p>
    <h2>Ask Evavi</h2>
    <ChatBox />
    <Wave />
  </div>
</div>
)

export default SecondPage