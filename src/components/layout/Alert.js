import React from 'react'

const alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
       
    )
}

export default alert
