// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div className="box box--small" style={{"backgroundColor": 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{"backgroundColor": "pink", fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{"backgroundColor": "orange", fontStyle: 'italic'}}>large orange box</div>

const Box = ({style, size, className = '', ...otherProps}) => {
  const sizeClassNAme = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className}  ${sizeClassNAme}`}
      style={{
        fontStyle: 'italic',
        ...style,
      }}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
