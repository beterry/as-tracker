import React from 'react'

export default function ProductFilter({product, options, changeProduct}) {
    return (
        <div>
            <select
                value={product}
                onChange={(e) => changeProduct(e)}
                className="w-120"
            >
                <option value="all">All Products</option>
                {
                    options.length >= 1 ?
                    options.map((option, index) => 
                        <option key={`product option ${index}`} value={option}>{option}</option>
                    ) :
                    <option value="" disabled>Undefined</option>
                }
            </select>
        </div>
    )
}