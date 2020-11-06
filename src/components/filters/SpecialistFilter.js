import React from 'react'

export default function SpecialistFilter({specialist, changeSpecialist}) {
    return (
        <div>
            <select value={specialist} onChange={(e) => changeSpecialist(e)}>
                <option value="all">All Specialists</option>
                <option value="LucasT">Lucas Templin</option>
                <option value="TarrynG">Tarryn Hendel</option>
                <option value="SaraP">Sara Putt</option>
            </select>
        </div>
    )
}
