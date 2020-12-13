import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';


function IconSwitch(props) {
    const icon = props.name;
    const onSwitch = () => {
        console.log("change state here")
        props.onSwitch(props.name)
    }
    return (
        <div className='icon'>
            <button className='button-icon' onClick={onSwitch}>
                {
                    icon!=='list'? <FontAwesomeIcon icon={faList}/>:<FontAwesomeIcon icon={faTh} />
                }
            </button>
        </div>
    )
}
export default IconSwitch;