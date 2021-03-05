import React, { useState, useEffect } from 'react';
import { Panel } from 'react95'

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div style={{ width: '12rem', display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
      <Panel variant='well' style={{ width: '95%', textAlign: 'center' }}>{date.toLocaleString()}</Panel>
    </div>
  );
}

export default Clock