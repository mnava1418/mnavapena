import React from 'react'

function MainIcon({href, icon}) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <i className={icon}/>
        </a>
    )
}

export default MainIcon
