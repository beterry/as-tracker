import React from 'react'

export default function CheckboxFilter({label, checked, handleToggle}) {
    return (
        <div>
            <input type="checkbox" name="hide" onChange={() => handleToggle()} checked={checked}/>
            <label htmlFor="hide">{label}</label>
        </div>
    )
}
