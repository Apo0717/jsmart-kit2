import React from 'react'
import { TiPlus } from 'react-icons/ti'
import SummarySmall from '../kit-shoppingList/SummarySmall'

function OrderDailySet(props) {
  const { shoppingItemDay, catDay } = props
  //你為什麼在這才能看有沒有進來
  console.log('恩？', props.shoppingItemDay)
  return (
    <>
      <div className="kit-shopping-list-bg">
        <div className="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div className="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              {catDay && catDay.length > 0 ? (
                <div className="set-title">{catDay.kitCategoryName}</div>
              ) : (
                <div className="set-title"></div>
              )}
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <SummarySmall />
          </div>
          <div className="kit-shopping-list-product">
            {/* <!-- 商品圖片區＋PLUS --> */}
            {shoppingItemDay.map((Item) => (
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
          {/* <!-- 按鈕 --> */}
          <div className="kit-shopping-list-btn">
            {/* <!-- 按鈕-下拉 --> */}
            <div className="dropdown btn-margin">
              <button
                className="btn-border-s dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                一個月份
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="javascript:;">
                  一個月份
                </a>
                <a className="dropdown-item" href="javascript:;">
                  二個月份
                </a>
                <a className="dropdown-item" href="javascript:;">
                  三個月份
                </a>
                <a className="dropdown-item" href="javascript:;">
                  四個月份
                </a>
                <a className="dropdown-item" href="javascript:;">
                  五個月份
                </a>
              </div>
            </div>
            <button className="btn-border-s btn-margin">半年份</button>
            <button className="btn-border-s btn-margin">一年份</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDailySet
