import React from 'react';

const Fave = props => {

  function handleClick(e) {
    e.stopPropagation()
    console.log("Handling FAVE click")
    props.onFaveToggle()
  }
  
  const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'
  const classList = `film-row-fave ${isFave}`
  return (
    <div className={classList}>
      <p onClick={handleClick} className="material-icons">{isFave}</p>
    </div>
  )
}


export default Fave
