import React from 'react'

export default props => {
    return (
        <main className="container">
            <div className="container-inner">
                {props.children}
            </div>
        </main>
    )
}