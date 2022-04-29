import React from 'react'
import '../sass/main.scss'

type Props = {
    imgUrl: string,
    imgDescription: string
}

export default function Artwork({ imgUrl, imgDescription }: Props) {
  return (
    <div className="frame">
        <img src={imgUrl} alt={imgDescription} />
    </div>
  )
}