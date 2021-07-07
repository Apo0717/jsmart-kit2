import React from 'react'
import SvgRibbonIndex from '../svg-component/SvgFlashText'

function FlashWall() {
  return (
    <>
      {/* <!-- 動畫牆 --> */}
      <div class="kit-index-flash-wall-area d-flex">
        <div class="kit-index-flash-wall d-flex">
          <div class="kit-index-flash-wall-img-1"></div>
          <div class="kit-index-flash-wall-img kit-index-flash-wall-img-2"></div>
          <div class="kit-index-flash-wall-img-3"></div>
          <div class="kit-index-flash-wall-img kit-index-flash-wall-img-4"></div>
        </div>
        <SvgRibbonIndex />
      </div>
    </>
  )
}
export default FlashWall
