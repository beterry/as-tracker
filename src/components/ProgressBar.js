import React from 'react'
// import jobStatus from '../data/jobStatus';

export default function ProgressBar({status, lastActions, proofs, prints}) {
    let artText = "--";
    let artColor = "lightgray";

    let printText = "--";
    let printColor = "lightgray";

    let mapText = "--";
    let mapColor = "lightgray";

    let task = undefined;

    //Art
    if (status < 4){
        switch (status){
            case 1:
                task = lastActions.find(task => task.actionTaken === "Artist Changes");
                if (task){
                    artText = task.date.format("MM/DD");
                }
                artColor = "lightpink";
                break;
            case 2:
                artText = `#${proofs}`;
                artColor = "skyblue";
                break;
            case 3:
                task = lastActions.find(task => task.actionTaken === "Art to Client");
                if (task){
                    artText = task.date.format("MM/DD");
                }
                artColor = "skyblue";
                break;
            default:
                artText = "--";
        }
    } else {
        artText = "APR";
        artColor = "skyblue";
    }

    //Print
    if (status > 4){
        switch (status){
            case 5:
                printText = `#${prints}`;
                printColor = "skyblue";
                break;
            case 6:
                printText = "APR";
                printColor = "skyblue";
                break;
            default:
                printText = "PRN";
                printColor = "skyblue";
        }
    }

    //Map
    if (status > 7){
        switch (status){
            case 8:
                mapText = "APR";
                mapColor = "lightyellow";
                break;
            default:
                mapText = "ATT";
                mapColor = "skyblue";
        }
    }

    //Complete
    if (status === 10){
        artColor = "lightgreen";
        printColor = "lightgreen";
        mapColor = "lightgreen";
    }


    return (
        <div className="pbar">
            <div className="pbar-bar" style={{background: artColor}}>{artText}</div>
            <div className="pbar-bar" style={{background: printColor}}>{printText}</div>
            <div className="pbar-bar" style={{background: mapColor}}>{mapText}</div>
        </div>
    )
}
