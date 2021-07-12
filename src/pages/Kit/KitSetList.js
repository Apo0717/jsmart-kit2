import React from 'react'
import DailySet from './component/kit-setList/DailySet'
import EpSet from './component/kit-setList/EpSet'
import BtnGreenBig from './component/kit-setList/BtnGreenBig'
import { Link } from 'react-router-dom'

function KitSetList() {
  return (
    <>
      {/* <!-- kit-setList --> */}
      <div class="container">
        <DailySet />
        <hr />
        <EpSet />
        <Link
          to="/kitShoppingList"
          onClick={() => {
            ;<BtnGreenBig />
          }}
        >
          <BtnGreenBig />
        </Link>
      </div>
    </>
  )
}

export default KitSetList
