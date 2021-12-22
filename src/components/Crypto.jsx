import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Crypto = (props) => {
    const [value, setValue] = useState({})

    const baseURL = 'https://api.coincap.io/v2/assets'

    useEffect(() => {
        axios
            .get(baseURL + props.asset)
            .then((res) => {
                setValue(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log('Finally finished with GET')
            })
    }, [props.asset])

    return (
        <div>
            <h4>Name:</h4>
            {/* <p>{value.data.name}</p> */}
            <h4>Price:</h4>
            {/* <p>{value.data.priceUsd}</p> */}
            <h4>Change 24hrs:</h4>
            {/* <p>{value.data.change24Hr}</p> */}
            <h4>Symbol:</h4>
            {/* <p>{value.data.symbol}</p>    */}

        </div>
    )
}
