import React from 'react'

function StyleComponent() {
  let styleObj = {
    backgroundColor: 'yellow', height: '400px', width: '400px', padding: '20px'
  };
  return (
    <>
      <div style={{ backgroundColor: 'orange', height: '400px', width: '400px', padding: '20px' }}>
        <h1>This is inline CSS</h1>
      </div>

      <div style={styleObj}>
          <h1>This is style with styleObj variable holding styles</h1>
      </div>
    </>
  )
}

export default StyleComponent
