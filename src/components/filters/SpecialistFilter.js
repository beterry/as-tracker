import React from 'react'

export default function SpecialistFilter({specialist, changeSpecialist, isAdmin}) {
    return (
        <div>
            <select
                value={specialist}
                onChange={(e) => changeSpecialist(e)}
                disabled={!isAdmin}
            >
                <option value="all">All Specialists</option>
                <option value="LucasT">Lucas Templin</option>
                <option value="TarrynH">Tarryn Hendel</option>
                <option value="SaraP">Sara Putt</option>
                <option value="NikieC">Nikie Rathman</option>
            </select>
        </div>
    )
}
