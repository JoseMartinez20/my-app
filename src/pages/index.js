import React from 'react'
import Link from 'gatsby-link'
import ChatBox from './ChatBox';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import { ReactComponent as Logo } from '../images/ChatGPT-Logo.png';

const IndexPage = () => (
  <div>
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>React Playground</h1>
        <p>This site is a playground for all of Jose's React projects.</p>
        <h2>This week's projects</h2>
        <Link to='/page-2/'>CustomerGPT Email</Link>
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
        
        <Card
          title="Digital Twin Project"
          text="To do"
          image={require('../images/react-flow.svg')}
        />
        <Card
          title="AG Grid Project"
          text="Not started yet"
          image={require('../images/ag-grid.jpg')}
        />
      </div>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/ChatGPT-Logo.png')}
      title="CustomerGPT Email"

      text={<ChatBox />} />
  </div>
)

export default IndexPage
