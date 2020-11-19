import React from 'react'

export default function ClientLabelFilter({clientLabel, options, changeClientLabel}) {
    return (
        <div>
            <select
                name="label"
                value={clientLabel}
                onChange={(e) => changeClientLabel(e)}
                className="w-120"
            >
                <option value="all">All Client Labels</option>
                <option value="Default">Default</option>
                {
                    options.length >= 1 ?
                    options.map((option, index) => 
                        <option key={`client type ${index}`} value={option}>{option}</option>
                    ) :
                    <option value="" disabled>No Additional Labels</option>
                }
            </select>
        </div>
    )
}
