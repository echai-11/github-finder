import React, {Fragment} from 'react'

const Spinner=({spinner})=> {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width:"200px", display:"block", margin: "auto"}}/>
        </Fragment>
    )
}
export default Spinner;