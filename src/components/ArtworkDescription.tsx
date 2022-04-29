import '../sass/main.scss'
import { ArtDetails } from '../App'

type Props = {
    artDetails: ArtDetails
    handleOnClick: () => void
}

export default function ArtworkDescription({ artDetails, handleOnClick }: Props) {
  return (
    <div className='art-details'>
        <h4>{artDetails.artistDisplayName && artDetails.artistDisplayName} {artDetails.artistBeginDate && `(b.${artDetails.artistBeginDate})`}</h4>
        <h4><i>{artDetails.title}</i>, {artDetails.objectDate}</h4>
        <h6>{artDetails.medium}</h6>
        <button onClick={() => handleOnClick() } style={{ position: 'absolute', bottom: 20, right: 20}}>More Art</button>
    </div>
  )
}