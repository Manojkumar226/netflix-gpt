import React from 'react'
import { HeaderLogo } from './constants'

const Header = () => {
    return (
        <div>
            <img src={HeaderLogo} alt='netflix-header-logo' />
        </div>
    )
}

export default Header