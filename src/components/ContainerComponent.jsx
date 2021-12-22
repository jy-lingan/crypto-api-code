import React, { useState } from 'react'
import { Crypto } from './Crypto'

export const ContainerComponent = () => {
    const [value, setValue] = useState('bitcoin')
    return (
        <div>
            <Crypto asset="bitcoin" />
        </div>
    )
}
