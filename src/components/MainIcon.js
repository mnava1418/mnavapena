import React from 'react'

class MainIcon extends React.Component{
    render () {
        const {href, icon} = this.props
        return (
            <a href={href} target="_blank" rel="noreferrer">
                <i className={icon}/>
            </a>
        )
    }
}

export default MainIcon
