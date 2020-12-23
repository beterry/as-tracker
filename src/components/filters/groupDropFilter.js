import React, {useState} from 'react';

export default function GroupDropFilter({groupSelected}) {
    const [date, changeDate] = useState("");

    let dates = [
        "01/14/2019",
        "03/25/2019",
        "06/03/2019",
        "08/19/2019",
        "10/28/2019",
        "01/13/2020",
        "03/23/2020",
        "06/01/2020",
        "08/17/2020",
        "10/26/2020",
        "01/11/2021",
        "03/22/2021",
        "05/31/2021",
        "08/16/2021",
    ];

    return (
        <div>
            <select
                value={groupSelected ? date : ""}
                onChange={(e) => changeDate(e.target.value)}
                disabled={!groupSelected}
            >
                <option value="">All Drop Dates</option>
                {dates.map(d =>
                    <option key={d} value={d}>{d}</option>
                )}
            </select>
        </div>
    )
}
