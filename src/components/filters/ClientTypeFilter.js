import React from 'react'

export default function ClientTypeFilter({clientType, options, changeClientType}) {
    return (
        <div>
            <select name="label" value={clientType} onChange={(e) => changeClientType(e)}>
                <option value="all">All Client Types</option>
                {options.map((option, index) => 
                    <option key={`client type ${index}`} value={option}>{option}</option>
                )}
            </select>
        </div>
    )
}
