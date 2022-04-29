import React from 'react';
import './sass/main.scss'
import Artwork from './components/Artwork';
import * as api from './api'
import ArtworkDescription from './components/ArtworkDescription';
import Lights from './components/Lights';

export type ArtDetails = {
  artistBeginDate: string
  artistEndDate: string
  artistDisplayName: string
  artistDisplayBio: string
  medium: string
  title: string
  objectDate: string
}

const initialState:ArtDetails = {
  artistBeginDate: '',
  artistEndDate: '',
  artistDisplayBio: '',
  artistDisplayName: '',
  medium: '',
  title: '',
  objectDate: ''
}


function App() {
  const [artworkIds, setArtworksIds] = React.useState([])
  const [currentArtImgUrl, setCurrentArtImgUrl] = React.useState("https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg")
  const [currentArtDetails, setCurrentArtDetails] = React.useState(initialState)

  React.useEffect(() => {
    api.getAllArtworkWithImages().then((result) => {
      setArtworksIds(result.objectIDs)
    })
  }, [])

  const getNewArtwork = () => {
    var artworkId = artworkIds[Math.floor(Math.random()*artworkIds.length)];
    api.getArtworkById(artworkId).then((result) => {
      setCurrentArtImgUrl(result.primaryImage)
      setCurrentArtDetails(result)
    })
    return artworkId
  }
  

  return (
    <div className="background">
      <Lights/>
      <div className='main-content-flexbox'>
        <div className='artwork-flex-item'>
        <Artwork imgUrl={currentArtImgUrl} imgDescription={`${currentArtDetails.medium} ${currentArtDetails.title} ${currentArtDetails.artistDisplayName}`}/>
        </div>
        <div className='art-description-flex-item'>
        <ArtworkDescription artDetails={currentArtDetails} handleOnClick={getNewArtwork}/>      
        </div>
      </div> 
    </div>
  );
}

export default App;
