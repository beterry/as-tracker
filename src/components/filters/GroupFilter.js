import React from "react";

export default function GroupFilter({group, changeGroup}) {

    const alphabet = [];
    let charCode = "A".charCodeAt(0);

    for(let i=0; i<26; i++){
        alphabet.push(String.fromCharCode(charCode));
        charCode++;
    }

    return (
        <div>
            <label className="mr-s" htmlFor="group">Group</label>
            <select
                value={group}
                onChange={(e) => changeGroup(e)}
                name="group"
            >
                <option value="">--</option>
                {
                    alphabet.map((letter, index) => 
                        <option value={letter} key={`group ${index}`}>{letter}</option>
                    )
                }
            </select>
        </div>
    )
}