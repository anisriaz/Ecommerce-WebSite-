"use client"

import { useDeferredValue, useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

interface CurrencyProps {
    value: string | number
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setisMounted] = useState(false)

    useEffect(() => {
        setisMounted(true)
    }, [])

    if(!isMounted) {
        return null;
    }

    
    return (
        <div className='font-semibold'>
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency