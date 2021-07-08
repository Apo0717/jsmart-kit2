import React from 'react'
import OrderDailySet from './component/kit-shoppingList/OrderDailySet'
import OrderEpSet from './component/kit-shoppingList/OrderEpSet'
import SummaryBig from './component/kit-shoppingList/SummaryBig'
import BtnGreenShopping from './component/kit-shoppingList/BtnGreenShopping'
import { TiPlusOutline } from 'react-icons/ti'

function KitShoppingList() {
  return (
    <>
      {/* <!-- kit-shoppingList --> */}
      <div class="container">
        {/* <!-- 最上區塊的TITLE語 --> */}
        <h5 class="h5-tc kit-shopping-list-title">也許你適合這樣的組合</h5>
        {/* <!-- SET 1 -->*/}
        <OrderDailySet />
        <TiPlusOutline color="#E64B4B" sixe="90px" />
        {/* <!-- SET 2 --> */}
        <OrderEpSet />
        {/* <!-- 下方總計 --> */}
        <SummaryBig />
        {/* <!-- 其他選擇＋前往購買按鈕 --> */}
        <BtnGreenShopping />
      </div>
    </>
  )
}

export default KitShoppingList
