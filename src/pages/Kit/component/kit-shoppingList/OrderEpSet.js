import React from 'react'
import { TiPlus } from 'react-icons/ti'
import SummarySmall from '../kit-shoppingList/SummarySmall'
import RightBtn from '../kit-shoppingList/RightBtn'

function OrderEpSet(props) {
  const { shoppingItemEp, catEp} = props
  return (
    <>
      <TiPlus className="TiPlus-r" size="100px" />
      <div className="kit-shopping-list-bg">
        {/* <!-- 刪除鈕 --> */}
        <div className="delete">
          <i className="fas fa-times fa-3x"></i>
        </div>
        {/* <!-- 右邊3個小可愛 --> */}
        <RightBtn />
        <div className="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div className="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              <div className="set-title">環保組合-月亮褲</div>
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <SummarySmall />
          </div>
          <div className="kit-shopping-list-product">
            {/* <!-- 商品圖片區＋PLUS --> */}
            {shoppingItemEp.map((Item) => (
              <div className="d-flex">
                <div className="kit-shopping-list-product-wrap">
                  <div>
                    <img
                      className="kit-shopping-list-items-img"
                      src={`/img/Kit/${Item.kitImg}`}
                      alt=""
                    />
                  </div>
                  <div className="kit-shopping-list-items-text">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: Item.itemName,
                      }}
                    ></p>
                  </div>
                </div>
                <TiPlus className="TiPlus" size="90px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderEpSet
