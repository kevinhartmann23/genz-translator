import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import topTermsData from './topTermsData'
import { useAuth } from '../../contexts/AuthContext';

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

const TopTerms = () => {
  const { currentUser } = useAuth()
  const data = topTermsData.map(term => {
    return (
      <TableRow>
        <TableDataCell style={{ textAlign: 'left' }}>  
          {term.word}:
        </TableDataCell>
        <TableDataCell>{term.definition}</TableDataCell>
      </TableRow>
    )
  })

  return (
      <div>
        {!currentUser && <Redirect to="/login" />}
        {currentUser && 
        <Window style={{ width: '80vw', height: '80vh', marginTop: '5rem', right: '5%' }}>
          <WindowHeader active={true} className='window-header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Hip Terms</span>
            <Link to='/' style={{ width: '2rem' }}>
              <Button className='exit-button' style={{ fontWeight: 'bold' }}>
                X
            </Button>
            </Link>
          </WindowHeader>
          <WindowContent style={{overflow:'scroll', height:'85%'}}>
            <Table>
              <TableHead>
                <TableRow head>
                  <TableHeadCell style={{ width: '5rem' }}>Term</TableHeadCell>
                  <TableHeadCell style={{ width: '20rem' }}>Definition</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data}
              </TableBody>
            </Table>
          </WindowContent>
        </Window>
        }
      </div>
  );
};

export default TopTerms;