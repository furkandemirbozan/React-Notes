import React from 'react'

function Course({ course }) {
    const { id, title, description, url, image } = course;
    return (
        <div className='course'>
            <img src={image} width={250} height={150} />
            <h4>{title}</h4>
            <h4>{description}</h4>
            <h4>{description}</h4>
            <a href={url}> TIKLA</a>
        </div>
    )
}

export default Course