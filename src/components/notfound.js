import React, {Component} from 'react';
import Vader from '../assets/darth-vader.svg';

class NotFound extends Component {
    render() {
       return( <div className="flex flex-column tc bg-near-black w-100">
               <p className="f-subheadline measure ttu red">404</p>
            <img className="center" src={Vader} />
               <p className="f3 measure ttu moon-gray center">I sense a disturbance in the force...</p>
        </div>
       )

    }
}

export default NotFound