import React from 'react'
import SvgSurprise from './component/svg-component/SvgSurprise'
import SvgShakeHand from './component/svg-component/SvgShakeHand'
import SvgGive from './component/svg-component/SvgGive'
import FlashWall from './component/kit-index/FlashWall'
import { Link } from 'react-router-dom'

function KitIndex() {
  return (
    <>
      <Link to="/kitIndex" className="mx-0">
        <p>訂閱首頁</p>
      </Link>
      <Link to="/kitTest1" className="mx-0">
        <p>測驗1</p>
      </Link>
      <Link to="/kitSetList" className="mx-0">
        <p>訂閱組合</p>
      </Link>
      <Link to="/kitShoppingList" className="mx-0">
        <p>組合訂單</p>
      </Link>
      <div class="kit-index-hero">
        <div class="kit-index-hero-icon">
          <SvgSurprise />
          <img
            class="kit-index-hero-icon-2"
            src="/img/Kit/calligraphy002.svg"
            alt="#/"
          />
        </div>
      </div>
      <div class="container">
        {/* <!-- 前導文區塊 --> */}
        <div class="kit-index-info-area">
          <p class="kit-index-p">JUST FOR YOU</p>
          <h2 class="h2-tc kit-index-info-title">
            一個量身打造又優惠的方案...
          </h2>
          <h5 class="h5-tc">
            孟浩然說過一句著名的話，開軒面場圃，把酒話桑麻。這段話看似複雜，其中的邏輯思路卻清晰可見。
          </h5>
          <div class="kit-index-info-wrap">
            <div class="kit-index-info-box">
              <SvgGive />
              <div class="kit-index-info-text">
                <h4 class="h4-tc kit-index-info-text-title">
                  每個月寄到妳的手中
                </h4>
                <p class="kit-index-p">
                  很遺憾的，半年份,一年份的組合若是中間使用不習慣，可以於會員中心申請停止服務，並退還剩下組合的70%金額至您的帳戶中。
                </p>
              </div>
            </div>
            <div class="kit-index-info-box">
              <div class="kit-shake-hands">
                <SvgShakeHand />
              </div>
              <div class="kit-index-info-text">
                <h4 class="h4-tc kit-index-info-text-title">終止服務的權利</h4>
                <p class="kit-index-p">
                  很遺憾的，半年份,一年份的組合若是中間使用不習慣，可以於會員中心申請停止服務，並退還剩下組合的70%金額至您的帳戶中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FlashWall />
      {/* <!-- 前往測驗區 --> */}
      <div class="kit-index-go-text-area">
        <div class="kit-index-go-text-wrap">
          <div class="kit-index-go-text-box">
            <div class="kit-index-go-text">
              <p class="kit-index-p">我想知道什麼樣的組合方案會比較適合我</p>
              <h4 class="h4-tc btn-gotest-underline">前往小測驗</h4>
            </div>
          </div>
        </div>
        <div class="kit-index-go-text-wrap">
          <div class="kit-index-go-text-box">
            <div class="kit-index-go-text">
              <p class="kit-index-p">
                我已經很了解我自己，想直接看看有什麼組合方案
              </p>
              <a class="h4-tc btn-gotest-underline">前往選擇方案==</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KitIndex
