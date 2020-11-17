import React from 'react'

const WeeklyOptions = () => (
    <>
        <option value="Brochure 10.5x17">Brochure 10.5x17</option>
        <option value="POSTCARD">POSTCARD</option>
        <option value="SCRATCHOFF">SCRATCHOFF</option>
        <option value="MENU">MENU</option>
        <option value="Folded Magnet">Folded Magnet</option>
        <option value="Plastic PC Sm - S">Plastic PC Sm - S</option>
    </>
)

const MonthlyOptions = () => (
    <>
        <option value="NEW MOVERS POSTCARD">NEW MOVERS POSTCARD</option>
        <option value="BirthdayPC">BirthdayPC</option>
        <option value="NEW MOVERS PLASTIC">NEW MOVERS PLASTIC</option>
    </>
)

export default function ProductFilter({product, changeProduct, tab}) {

    return (
        <div>
            <select
                value={product}
                onChange={(e) => changeProduct(e)}
                className="w-120"
            >
                <option value="all">All Products</option>
                {
                    tab === "Weekly" ?
                    <WeeklyOptions /> :
                    <MonthlyOptions />
                }
            </select>
        </div>
    )
}