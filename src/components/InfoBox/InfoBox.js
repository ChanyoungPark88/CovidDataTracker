import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@mui/material';

function infoBox({ title, cases, total, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--grey'} 
      ${title === 'Deaths' && 'infoBox--red'}
      ${title === 'Vaccinated' && 'infoBox--blue'}`}
    >
      <CardContent>
        <Typography className='infoBox__title' color='#ffffff'>
          {title}
        </Typography>

        <h2
          className={`infoBox__grey
          ${title === 'Deaths' && 'infoBox__red'} 
          ${title === 'Vaccinated' && 'infoBox__blue'}`}
        >
          {cases}
        </h2>

        <Typography className='infoBox__total' color='#ffffff'>
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default infoBox;
