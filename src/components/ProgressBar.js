import React from 'react'

export default function ProgressBar({status, printOnly}) {
    let artText = "--";
    let artColor = "lightgray";

    let printText = "--";
    let printColor = "lightgray";

    let mapText = "--";
    let mapColor = "lightgray";

    //Art
    if (status.changesAtArtist){
        artText = status.changesAtArtist.format("MM/DD");
        artColor = 'salmon';
    }
    if (status.proofUploaded){
        artText = `#${status.proofNumber}`;
        artColor = 'skyblue';
    }
    if (status.artAtClient){
        artText = status.artAtClient.format("MM/DD");
        artColor = 'skyblue';
    }
    if (status.proofApproved){
        artText = 'APR';
        artColor = 'skyblue';
    }

    //Print
    if (status.printUploaded){
        printText = `#${status.printNumber}`;
        printColor = 'skyblue';
    }
    if (status.printApproved){
        printText = 'APR';
        printColor = 'skyblue';
    }

    //Map
    if (status.mapApproved){
        mapText = 'APR';
        mapColor = 'yellow';
    }
    if (status.mapAttached){
        mapText = 'ATT';
        mapColor = 'skyblue';
    }
    if(printOnly){
        mapText = 'PO';
        mapColor = 'none';
    }

    //Complete
    if (status.complete){
        artColor = "lightgreen";
        printColor = "lightgreen";
        if (!printOnly){
            mapColor = "lightgreen";
        }
    }


    return (
        <div className="pbar">
            <div className="pbar-bar" style={{background: artColor}}>{artText}</div>
            <div className="pbar-bar" style={{background: printColor}}>{printText}</div>
            <div className="pbar-bar" style={{background: mapColor}}>{mapText}</div>
        </div>
    )
}
