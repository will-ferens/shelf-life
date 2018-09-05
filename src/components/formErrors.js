import React from 'react'


const FormErrors = (props) => {
    if(!props) return <div></div>
    return (
        <div>
            {props.errors.email}
        </div>
    )
}

export default FormErrors