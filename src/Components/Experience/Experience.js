import React from 'react'

export default function Experience(props) {
    return (
        <div>
            <img src={props.image} />
            <p>{props.title}</p>
        </div>
    )
}
