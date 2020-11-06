import React from 'react'

export default function DateFilter({start, end, changeStartDate, changeEndDate}) {
    return (
        <div>
            <label className="mr-s" htmlFor="start">Art Due Start Date</label>
            <input
                type="date"
                name="start"
                value={start.format("YYYY-MM-DD")}
                onChange={(e) => changeStartDate(e)}
            />
            <label className="mx-s" htmlFor="end">to</label>
            <input
                type="date"
                name="end"
                value={end.format("YYYY-MM-DD")}
                onChange={(e) => changeEndDate(e)}
            />
        </div>
    )
}
