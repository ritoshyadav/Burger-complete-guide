import React from 'react';
// import Aux from '../../../hoc/Aux';
import './Button.css';
// let classes=[];



const button =(props)=>(
    <div className="Button">
<button className={props.btnType}
 onClick={props.clicked}>{props.children}</button>
</div>
);

export default button;