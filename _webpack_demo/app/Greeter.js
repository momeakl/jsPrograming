//Greeter.js
import React, {Component} from 'react'
import config from './config.json'

import styles from './Greeter.css';//导入

class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

/*module.exports = function() {
    let greet = document.createElement('div');
    let hello = 'hello';
    greet.textContent = config.greetText;
    return greet;
};*/


export default Greeter
