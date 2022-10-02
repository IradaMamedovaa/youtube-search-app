import React from 'react';
import './Video.scss'

const Video = ({img,title,channelTitle,description}) => {
  return (
    <div className='card' >
        <img src={img} alt="coverImg"/>
        <div className='details'>
            <p className='title'>{title}</p>
            <p className='channelTitle'>{channelTitle}</p>
            <p className='description'>{description}</p>
        </div>
    </div>
  )
}

export default Video