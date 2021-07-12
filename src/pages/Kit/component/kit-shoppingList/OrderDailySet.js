import React from 'react'
import { TiPlus } from 'react-icons/ti'

function OrderDailySet() {
  return (
    <>
      <div class="kit-shopping-list-bg">
        <div class="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div class="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              <div class="set-title">一般組合/月</div>
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <div class="sale-price-s">
              <div class="set1-total-s">總金額</div>
              <div class="set1-total-box set1-total-box-inlineblock">
                <div class="set1-total">NT$</div>
                <div class="set1-total-red">2,000</div>
              </div>
              <div>
                <s class="set1-total-box">
                  <div class="set1-total">原價NT$</div>
                  <div class="set1-total">2,200</div>
                </s>
              </div>
            </div>
          </div>
          <div class="kit-shopping-list-product">
            {/* <!-- 商品圖片區＋PLUS --> */}
            <div class="kit-shopping-list-product-wrap">
              <div class="kit-shopping-list-items-img"></div>
              <div class="kit-shopping-list-items-text">
                <p>21cm衛生棉 ＊3個</p>
                <p>25cm衛生棉 ＊3個</p>
              </div>
            </div>
            <TiPlus class="TiPlus" size="90px" />
            <div class="kit-shopping-list-product-wrap">
              <div class="kit-shopping-list-items-img"></div>
              <div class="kit-shopping-list-items-text">
                <p>夜用衛生棉 ＊3個</p>
              </div>
            </div>
            <TiPlus class="TiPlus" size="90px" />
            <div class="kit-shopping-list-product-wrap">
              <div class="kit-shopping-list-items-img"></div>
              <div class="kit-shopping-list-items-text">
                <p>夜用衛生棉 ＊3個</p>
              </div>
            </div>
          </div>
          {/* <!-- 按鈕 --> */}
          <div class="kit-shopping-list-btn">
            {/* <!-- 按鈕-下拉 --> */}
            <div class="dropdown btn-margin">
              <button
                class="btn-border-s dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                一個月份
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="javascript:;">
                  一個月份
                </a>
                <a class="dropdown-item" href="javascript:;">
                  二個月份
                </a>
                <a class="dropdown-item" href="javascript:;">
                  三個月份
                </a>
                <a class="dropdown-item" href="javascript:;">
                  四個月份
                </a>
                <a class="dropdown-item" href="javascript:;">
                  五個月份
                </a>
              </div>
            </div>
            <button class="btn-border-s btn-margin">半年份</button>
            <button class="btn-border-s btn-margin">一年份</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDailySet
