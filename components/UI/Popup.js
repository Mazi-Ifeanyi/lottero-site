import classes from './Popup.module.css';


const Popup = (props) =>{
    const { width } = props;
    let popupWidth;
    let bgColor;
    if(width <= 768){
        popupWidth = '95%'
        bgColor='#162951';
    } 
    else{
        popupWidth = '40%';
        bgColor = 'rgb(33, 164, 255)';
    } 
    return (
       <main className={classes.parent}>
          <div style={{width: popupWidth, backgroundColor: bgColor}}>
              <p>{props.text}</p>
          </div>
       </main>
    );
}

export default Popup;