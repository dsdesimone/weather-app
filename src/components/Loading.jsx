import React from 'react'

const Loading = () => {

  
  return (
    <>
      <div className="loader__container">
          <div className="dot"></div>
          <div className='loading'>LOADING</div>
      </div>
      <div class="fondo-animado">
        <span class="uno delay-1"><i class="fa-solid fa-cloud"></i></span>
        <span class="dos"><i class="fa-solid fa-bolt"></i></span>
        <span class="tres delay-5"><i class="fa-solid fa-sun"></i></span>
        <span class="cuatro delay-1"><i class="fa-regular fa-snowflake"></i></span>

        <span class="uno delay-3"><i class="fa-regular fa-snowflake"></i></span>
        <span class="dos delay-7"><i class="fa-solid fa-cloud"></i></span>
        <span class="tres delay-5"><i class="fa-solid fa-bolt"></i></span>
        <span class="cuatro delay-4"><i class="fa-solid fa-sun"></i></span>

        <span class="uno delay-2"><i class="fa-solid fa-sun"></i></span>
        <span class="dos delay-3"><i class="fa-regular fa-snowflake"></i></span>
        <span class="tres delay-6"><i class="fa-solid fa-cloud"></i></span>
        <span class="cuatro delay-3"><i class="fa-solid fa-bolt"></i></span>  
      </div>
    </>
  )
}

export default Loading