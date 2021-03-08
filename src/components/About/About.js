import React from 'react';
import { useAuth } from '../../contexts/AuthContext'
import linkedIn from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import resume from '../../assets/icons/resume.png';

import './About.css'
import { Link, Redirect } from 'react-router-dom'
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Fieldset,
  List,
  ListItem,
  Divider
} from 'react95'

function About() {
  const { currentUser } = useAuth()
  const handleVisit = event => {
    event.preventDefault()
    let visit 

    if (event.target.id === 'linkedin'){
      visit = 'https://www.linkedin.com/in/kevin-hartmann/'
    } else if (event.target.id === 'github') {
      visit = 'https://github.com/kevinhartmann23'
    } else if (event.target.id === 'twitter') {
      visit = 'https://twitter.com/kevinhartmann23'
    }

    window.open(visit, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser && 
      <div style={{margin:'4rem', width:'80vw', height:'100vh'}}>
        <Window style={{ width: '85%', height: '90%' }}>
          <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>About GenZtoA</span>
            <Link to='/' style={{ width: '2rem' }}>
              <Button style={{ fontWeight: 'bold' }}>
                X
              </Button>
            </Link>
          </WindowHeader>
          <WindowContent style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', height: '95%', padding: '0', overflow: 'scroll' }}>
            <div style={{width:'100%', height:'17%'}}>
              <h2 className='title-about'>GenZtoA</h2>
              <p className='slogan-about'>translating what those darn kids are saying...</p>
            </div>
            <Fieldset label='About:' style={{ marginBottom: '.5rem' , width: '90%'}}>
              <p style={{ width: '100%', height: 'auto', fontSize: '.75rem', textAlign: 'center', fontStyle: 'italic', marginBottom: '1rem' }}>
                An on the go translator for millennials and older to translate slang on the go. Tired of feeling out of the loop, or not understanding what that kid just said? Getting old is hard, but we are here to make it easy. This app demonstrates my interest in making other's lives easier when adapting to new trends and environments and adding a sense of humor to it as well. The story I want to tell future employers is I am constantly adapting to changing times, this app illustrates my journey through changing careers. It's normal to feel out of the loop with something new or unfamiliar, having tools to make a topic more approachable mimics and portrays my process in becoming a software developer. Having someone explain to me what "last night was lit" meant is comparable to me learning javascript in the early stages of my Software Development Career.
              </p>
            </Fieldset>
            <Fieldset label='Creator:' style={{ marginBottom: '.5rem', width: '90%', height: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{width:'100%', height: 'auto', fontSize:'.75rem', textAlign:'center', fontStyle:'italic', marginBottom: '1rem'}}>
                I am a passionate, dedicated professional with a desire to continuously gain experience and knowledge. I have over 10 years of experience managing and training teams, working in fast paced environments, and implementing business strategies.
                I grew up in a small town off the shoreline of Connecticut, am an avid golfer, and I’m excited to start my journey as a Software Developer!
                Starting off in my career I plan to absorb as much information, knowledge, and experience as I can. Taking each day one step at a time, but not losing sight of my full vision. Within 2-3 years in the industry, I see myself managing a team and working my way to a larger role in running a tech business.
              </p>
              <Fieldset label='Contact Me:' style={{ marginBottom: '.5rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                  <p style={{fontSize:'1rem', marginRight:'1rem'}}><span style={{fontWeight:'bold'}}>Name: </span>Kevin Hartmann</p>
                  <Divider orientation='vertical' size='1.5rem' />
                  <p style={{fontSize:'1rem', marginLeft:'1rem'}}><span style={{fontWeight:'bold'}}>Email: </span>kevinhartmann23@gmail.com</p>
                </div>
                <List inline style={{ margin: '.5rem', height: '2.25rem' }}>
                  <ListItem style={{ height: '1.75rem' }}>
                    <Button id="linkedin" onClick={handleVisit} style={{ fontSize: '.5rem', fontWeight: 'bold', height: '1.5rem', width: '6rem'}}>
                      <img src={linkedIn} alt='visit my linked in' style={{ height: '1rem', marginRight: '.25rem' }} />
                      LinkedIn
                    </Button>
                  </ListItem>
                  <Divider orientation='vertical' size='1.5rem' />
                  <ListItem style={{ height: '1.75rem' }}>
                    <Button id="github" onClick={handleVisit} style={{ fontSize: '.5rem', fontWeight: 'bold', height: '1.5rem', width: '6rem'}}>
                      <img src={github} alt='visit my github' style={{ height: '1rem', marginRight: '.25rem' }} />
                      Github
                    </Button>
                  </ListItem>
                  <Divider orientation='vertical' size='1.5rem' />
                  <ListItem style={{ height: '1.75rem' }}>
                    <Button id="twitter" onClick={handleVisit} style={{ fontSize: '.5rem', fontWeight: 'bold', height: '1.5rem', width: '6rem'}}>
                      <img src={twitter} alt='visit my twitter' style={{ height: '1rem', marginRight: '.25rem' }} />
                      Twitter
                    </Button>
                  </ListItem>
                  <Divider orientation='vertical' size='1.5rem' />
                  <ListItem style={{height:'1.75rem'}}>
                    <Link to='/resume'>
                      <Button className='resume-button' style={{fontSize:'.5rem', fontWeight:'bold', height:'1.5rem', width:'6rem'}}>
                        <img src={resume} alt='view my resume' style={{ height: '1rem', marginRight: '.25rem' }} />
                        My Resume
                      </Button>
                    </Link>
                  </ListItem>
                </List>
              </Fieldset>
            </Fieldset>
          </WindowContent>
        </Window>
      </div>
      }
    </>
  );
}

export default About; 