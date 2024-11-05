import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const NoMatch = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
        <p>Sorry, that page does not exist</p>
        <img src='https://robohash.org/404' alt='404' />
        <br />
        <br />
        <button className='btn btn-info' onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}

export default NoMatch
