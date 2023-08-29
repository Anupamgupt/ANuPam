import React, { useState } from 'react'
import './intro.css'
import { useSelector } from 'react-redux';
function Intro() {
  const currentPage = useSelector((state)=>state.page);
  return (
    <div class="container-intro">
        <div class="top-intro"></div>
        <div class="center-intro">
            {currentPage}
        </div>
        <div class="bottom-intro"></div>
    </div>
  )
}

export default Intro