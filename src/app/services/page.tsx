import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '越南支付服务',
  description: '越南支付服务详情：越南本地支付、跨境汇款、代收代付、电商支付、游戏支付等全场景越南支付解决方案。',
  alternates: { canonical: '/services' },
}

const services = [
  { icon: '💳', title: '越南本地支付', desc: '支持越南全部主流支付方式，包括银行转账（Napas）、电子钱包（MoMo、ZaloPay、ViettelPay）、QR码支付（VNPay QR）、ATM在线支付等。无论您的客户使用何种支付方式，我们都能覆盖。' },
  { icon: '🌏', title: '跨境汇款', desc: '提供中国—越南双向跨境汇款服务。支持人民币与越南盾之间的快速兑换和汇款，汇率实时更新，手续费透明，最快实时到账。' },
  { icon: '🏦', title: '代收代付', desc: '为企业提供越南本地代收代付服务。无需在越南注册实体公司，即可通过我们的平台完成越南本地的资金收付，合规运营，高效结算。' },
  { icon: '🛒', title: '电商支付', desc: '为跨境电商平台提供定制化的越南支付解决方案。支持Shopee、Lazada、Tiki等越南主流电商平台的支付对接，提升用户支付体验和转化率。' },
  { icon: '🎮', title: '游戏支付', desc: '为出海越南的游戏公司提供专业支付通道。支持游戏内购、点卡充值等多种支付场景，覆盖越南玩家常用的所有支付方式。' },
  { icon: '📊', title: '支付数据服务', desc: '提供完善的支付数据报表和分析工具。实时查看交易状态、对账数据、渠道分析等，帮助您全面掌握越南支付业务情况。' },
]

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>越南支付服务</h1>
          <p>全方位越南支付解决方案，满足不同业务场景需求</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>需要定制越南支付方案？</h2>
          <p>请联系我们的支付顾问，为您量身打造最合适的越南支付解决方案</p>
          <a href="https://t.me/zfxt5" className="btn" target="_blank" rel="noopener noreferrer">Telegram: @zfxt5</a>
        </div>
      </section>
    </>
  )
}
