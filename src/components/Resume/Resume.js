import React from 'react';
import { Link } from 'react-router-dom'
import myResume from '../../assets/icons/myresume.png'

import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Tooltip
} from 'react95'

function Resume() {
  return (
    <div style={{ margin: '1rem', width: '70%', height: '100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Window style={{ width: '85%', height: '90%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Kevin Hartmann's Resume</span>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Link to='/about' style={{ width: '2rem' }}>
              <Tooltip text='Back to About 🤷‍' enterDelay={100} leaveDelay={500} style={{color:'black'}}>
                <Button style={{ fontWeight: 'bold', height: '1.75rem', width: '1.75rem' }}>
                  ←
                </Button>
              </Tooltip>
            </Link>
            <Link to='/' style={{ width: '2rem' }}>
              <Button style={{ fontWeight: 'bold', height: '1.75rem', width: '1.75rem' }}>
                X
              </Button>
            </Link>
          </div>
        </WindowHeader>
        <WindowContent style={{ height: '88%', display: 'flex', flexDirection:'column', alignItems:'center', overflow:'scroll'}}>
          <img style={{width:'100%'}} src={myResume} alt='Kevin Hartmann Resume'/>
        </WindowContent>
      </Window>
    </div>
  );
}

export default Resume;