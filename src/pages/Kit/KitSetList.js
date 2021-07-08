import React from 'react'
import DailySet from './component/kit-setList/DailySet'
import EpSet from './component/kit-setList/EpSet'
import BtnGreenBig from './component/kit-setList/BtnGreenBig'

function KitSetList() {
  return (
    <>
      {/* <!-- kit-setList --> */}
      <div class="container">
        <DailySet />
        <hr />
        <EpSet />
        <BtnGreenBig />
      </div>
    </>
  )
}

export default KitSetList
