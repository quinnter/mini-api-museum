import '../sass/main.scss'

export default function Lights() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width='66%' height="100%" className='spotlight-svg'>
        <defs>
        <radialGradient id="radial-gradient" cx="0.5" cy="0.015" r="0.7" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#f4a664" stop-opacity="0.598"/>
            <stop offset="1" stop-color="#f8eab9" stop-opacity="0.032"/>
        </radialGradient>
        <filter id="blurlayer" width="150%" height="150%" x="-40%" y="-50%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        </defs>
        <g filter="url(#blurlayer)">
            <ellipse id="Light_1" cx="20%" cy="45%" rx="25.5%" ry="55.5%" x='0' fill="url(#radial-gradient)"/>
            <ellipse id="Light_2" cx="80%" cy="45%" rx="25.5%" ry="55.5%" x='0' fill="url(#radial-gradient)"/>
        </g>
    </svg> 
  )
}