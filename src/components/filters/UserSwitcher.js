import React from 'react'

export default function SpecialistFilter({specialist, changeSpecialist}) {
    return (
        <div className="user-switcher">
            <select
                value={specialist}
                onChange={(e) => changeSpecialist(e.target.value)}
            >
                <option value="LucasT">Lucas Templin</option>
                <option value="TarrynH">Tarryn Hendel</option>
                <option value="SaraP">Sara Putt</option>
                <option value="NikieC">Nikie Rathman</option>
            </select>
        </div>
    )
}
