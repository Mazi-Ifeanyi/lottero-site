import BarLoader from 'react-spinners/BarLoader';
import classes from './PlayLoader.module.css';

const PlayLoader = () =>{

    const override = `
     display: block;
     margin: 0 auto;
     border-color: red;
     width: 100%;
     height: 2px;
     background-color: transparent;
     `;

   return <main className={classes.background}>
       <BarLoader color={'#6D968D'} loading={true} css={override} size={40} />
   </main>
}

export default PlayLoader;