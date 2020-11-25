import React from 'react'

export default function SystemActions({specialist, changeSpecialist, handleSystemAction, disabled, job}) {
    let proofNotReady = true;
    let printNotReady = true;
    let mapNotReady = true;

    if (job){
        const {scheduledTasks} = job;
        proofNotReady = !(scheduledTasks.find(task => task.what === "Proof Pending"));
        printNotReady = !(scheduledTasks.find(task => task.what === "Print Pending"));
        mapNotReady = !(scheduledTasks.find(task => task.what === "Mapping" && task.who === "Attach"));
    }

    return (
        <div className="user-switcher">
            <select
                value={specialist}
                onChange={(e) => changeSpecialist(e.target.value)}
                className="mr-s"
            >
                <option value="LucasT">Lucas Templin</option>
                <option value="TarrynH">Tarryn Hendel</option>
                <option value="SaraP">Sara Putt</option>
                <option value="NikieC">Nikie Rathman</option>
            </select>
            <select
                onChange={(e) => handleSystemAction(e.target.value)}
                value=""
                disabled={disabled}
            >
                <option value="" default>System Actions</option>
                <option value="Upload Proof" disabled={proofNotReady}>Upload Proof</option>
                <option value="Upload Print" disabled={printNotReady}>Upload Print</option>
                <option value="Attach Map" disabled={mapNotReady}>Attach Map</option>
            </select>
        </div>
    )
}
