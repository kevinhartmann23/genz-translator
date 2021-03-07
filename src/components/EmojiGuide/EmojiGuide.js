import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import emojiData from './emojiData'

import {
  Window,
  WindowHeader,
  WindowContent,
  Table,
  TableHead,
  TableBody,
  TableHeadCell,
  TableRow,
  TableDataCell,
  Button
} from 'react95'

const EmojiGuide = () => {
  const { currentUser } = useAuth()
  const data = emojiData.map(emoji => {
    return (
      <TableRow>
        <TableDataCell style={{ textAlign: 'center' }}>
          <span role='img' aria-label={emoji.definition}>
            {emoji.emoji}
          </span>
        </TableDataCell>
        <TableDataCell>{emoji.definition}</TableDataCell>
      </TableRow>
    )
  })
  
  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      {currentUser && 
      <Window style={{ width: 'auto', height:'auto', marginTop: '10rem', right:'10%' }}>
        <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Emoji Guide</span>
          <Link to='/' style={{ width: '2rem' }}>
            <Button style={{ fontWeight: 'bold' }}>
              X
            </Button>
          </Link>
        </WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow head>
                <TableHeadCell style={{width:'5rem'}}>Emoji</TableHeadCell>
                <TableHeadCell style={{ width: 'auto' }}>Meaning</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data}
            </TableBody>
          </Table>
        </WindowContent>
      </Window>
      }
    </>
  );
};

export default EmojiGuide;