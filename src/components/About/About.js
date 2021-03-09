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
        <div style={{ marginTop: '4rem', width: '80vw', height: '100vh', marginRight: '10%'}}>
        <Window style={{ width: '100%', height: '90%' }}>
          <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>About GenZtoA</span>
            <Link to='/' style={{ width: '2rem' }}>
              <Button className='back-button' style={{ fontWeight: 'bold' }}>
                X
              </Button>
            </Link>
          </WindowHeader>
          <WindowContent style={{ display: 'flex', flexDirection:'column', justifyContent: 'space-evenly', alignItems:'center', width: '100%', height: '95%', padding: '0' }}>
            <div style={{width:'100%', height:'17%'}}>
              <h2 className='title-about'>GenZtoA</h2>
              <p className='slogan-about'>translating what those darn kids are saying...</p>
            </div>
            <Fieldset label='About:' style={{ marginBottom: '.5rem' , width: '90%'}}>
              <p style={{ width: '100%', height: 'auto', fontSize: '.75rem', textAlign: 'center', fontStyle: 'italic', marginBottom: '1rem' }}>
                An on the go translator for millennials and older to translate slang on the go. Tired of feeling out of the loop, or not understanding what that kid just said? Getting old is hard, but we are here to make it easy. This app demonstrates my interest in making other's lives easier when adapting to new trends and environments and adding a sense of humor to it as well. The story I want to tell future employers is I am constantly adapting to changing times, this app illustrates my journey through changing careers. It's normal to feel out of the loop with something new or unfamiliar, having tools to make a topic more approachable mimics and portrays my process in becoming a software developer. Having someone explain to me what "last night was lit" meant is comparable to me learning javascript in the early stages of my Software Development Career.
              </p>
            </Fieldset>
            <Fieldset label='Contact Me:' style={{ marginBottom: '.5rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', width:'auto', height:'auto'}}>
              <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', textAlign:'center', alignItems:'center'}}>
                <p style={{fontSize:'1rem'}}><span style={{fontWeight:'bold'}}>Name: </span>Kevin Hartmann</p>
                <Divider orientation='horizontal' size={200} />
                <p style={{fontSize:'1rem'}}><span style={{fontWeight:'bold'}}>Email: </span>kevinhartmann23@gmail.com</p>
              </div>
              <List inline style={{ margin: '.5rem', height: '2.25rem' }}>
                <ListItem style={{ height: '1.75rem' }}>
                  <Button id="linkedin" onClick={handleVisit} style={{ fontSize: '.5rem', fontWeight: 'bold', height: '1.5rem'}}>
                    <img src={linkedIn} alt='visit my linked in' style={{ height: '1rem', marginRight: '.25rem' }} />
                  </Button>
                </ListItem>
                <Divider orientation='vertical' size='1.5rem' />
                <ListItem style={{ height: '1.75rem' }}>
                  <Button id="github" onClick={handleVisit} style={{ fontSize: '.5rem', fontWeight: 'bold', height: '1.5rem'}}>
                    <img src={github} alt='visit my github' style={{ height: '1rem', marginRight: '.25rem' }} />
                  </Button>
                </ListItem>
                <Divider orientation='vertical' size='1.5rem' />
                <ListItem style={{ height: '1.75rem' }}>
                  <Button id="twitter" onClick={handleVisit} style={{ fontSize: '.5rem', fontWeight: 'bold', height: '1.5rem'}}>
                    <img src={twitter} alt='visit my twitter' style={{ height: '1rem', marginRight: '.25rem' }} />
                  </Button>
                </ListItem>
                <Divider orientation='vertical' size='1.5rem' />
                <ListItem style={{height:'1.75rem'}}>
                  <Link to='/resume'>
                    <Button className='resume-button' style={{fontSize:'.5rem', fontWeight:'bold', height:'1.5rem'}}>
                      <img src={resume} alt='view my resume' style={{ height: '1rem', marginRight: '.25rem' }} />
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Fieldset>
          </WindowContent>
        </Window>
      </div>
      }
    </>
  );
}

export default About; 