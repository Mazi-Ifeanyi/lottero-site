import classes from './LoadingUI.module.css';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useState } from 'react';

const LoadingUI = () =>{

    const override = `
     display: block;
     margin: 0 auto;
     border-color: red;
     `;

   return <main className={classes.background}>
       <ScaleLoader color={'rgb(0, 255, 173)'} loading={true} css={override} size={50} />
   </main>
}

export default LoadingUI;