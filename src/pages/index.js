import React from 'react'
import Link from 'gatsby-link'
// import ChatBox from './ChatBox';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import {Link} from 'gatsby-link';


const IndexPage = () => (
  <div>
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>React Playground</h1>
        <p>This site is a playground for all of Jose's React projects.</p>
        <h2>Projects</h2>
        <Link to='/page-2/'>CustomerGPT Email</Link>
        <Link to='/react-flow-mockup'>React Flow Mockup</Link>
        <Wave />
      </div>
    </div>

    {/* <div style={{ marginTop: '20px' }}>
      <ChatBox />
    </div> */}
    <div className='Cards'>
      <h2>3 projects, more coming</h2>
      <div className='CardGroup'>
        <Link to='/page-2'>
          <Card
            title="ChatGPT Email"
            text="In progress"
            image={require('../images/ai-background.jpg')}
          />
        </Link>

        <Link to='/react-flow-mockup'>
          <Card
            title="Digital Twin Project"
            text="To do"
            image={require('../images/react-flow.svg')}
          />
        </Link>

        <Card
          title="AG Grid Project"
          text="Not started yet"
          image={require('../images/ag-grid.jpg')}
        />
      </div>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="Resources"
      text={<div>
        <p>Most of the design and UI techniques I exmployed in this website, I learned from</p>
        <a href="https://designcode.io" target="_blank">Design+Code</a>
      </div>} />
  </div>
)

export default IndexPage
