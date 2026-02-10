import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '越南支付 - 专业越南跨境支付解决方案',
  description: 'VietnamPay越南支付专业平台，提供越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案。安全快捷，助力企业出海东南亚。',
  openGraph: {
    title: '越南支付 - 专业越南跨境支付解决方案 | VietnamPay',
    description: 'VietnamPay提供越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案。',
    url: 'https://vietnampay.net',
    type: 'website',
    siteName: 'VietnamPay',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: 'VietnamPay - 越南支付专业平台' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '越南支付 - 专业越南跨境支付解决方案 | VietnamPay',
    description: 'VietnamPay提供越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案。',
    images: ['/images/og-cover.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <head><link rel="canonical" href="https://vietnampay.net/" /></head>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>越南支付 — 专业越南跨境支付解决方案</h1>
          <p>
            为出海企业提供安全、快捷、合规的越南支付服务。覆盖越南本地支付、跨境汇款、代收代付等全场景，
            一站式解决您的越南支付需求。
          </p>
          <a href="/contact" className="btn">立即咨询</a>{' '}
          <a href="/services" className="btn btn-outline">了解服务</a>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div><div className="stat-num">5+</div><div className="stat-label">年行业经验</div></div>
            <div><div className="stat-num">1000+</div><div className="stat-label">服务客户</div></div>
            <div><div className="stat-num">99.9%</div><div className="stat-label">系统稳定性</div></div>
            <div><div className="stat-num">T+0</div><div className="stat-label">实时到账</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">越南支付核心服务</h2>
          <p className="section-desc">我们提供全方位的越南支付解决方案，满足不同业务场景的支付需求</p>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">💳</div>
              <h3>越南本地支付</h3>
              <p>支持越南主流支付方式，包括银行转账、电子钱包（MoMo、ZaloPay、VNPay）、QR码支付等，覆盖越南消费者的日常支付习惯。</p>
            </div>
            <div className="card">
              <div className="card-icon">🌏</div>
              <h3>跨境汇款</h3>
              <p>提供中国到越南、越南到中国的双向跨境汇款服务，汇率透明，费用低廉，资金安全有保障。</p>
            </div>
            <div className="card">
              <div className="card-icon">🏦</div>
              <h3>代收代付</h3>
              <p>为电商平台、游戏公司、跨境贸易企业提供越南本地代收代付服务，合规运营，高效结算。</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 32 }}><a href="/services" className="btn">查看全部越南支付服务 →</a></p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">为什么选择VietnamPay的越南支付服务</h2>
          <p className="section-desc">深耕越南支付领域多年，我们具备独特的行业优势</p>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>安全合规</h3>
              <p>严格遵守越南及中国的金融监管要求，确保每一笔越南支付交易合法合规，资金安全有保障。</p>
            </div>
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>极速到账</h3>
              <p>越南支付交易实时处理，支持T+0到账，让您的资金流转更加高效。</p>
            </div>
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>费率优惠</h3>
              <p>具有竞争力的越南支付费率，透明无隐藏收费，帮助企业降低跨境支付成本。</p>
            </div>
            <div className="card">
              <div className="card-icon">🛠</div>
              <h3>技术对接简单</h3>
              <p>提供完善的API接口文档，快速接入越南支付系统，最快1天完成技术对接。</p>
            </div>
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3>多渠道覆盖</h3>
              <p>整合越南市场上所有主流支付渠道，一次对接即可使用全部越南支付方式。</p>
            </div>
            <div className="card">
              <div className="card-icon">📞</div>
              <h3>专属客服</h3>
              <p>7×24小时中越双语客服支持，及时解答您在越南支付过程中遇到的所有问题。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment System */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">越南支付系统搭建与出租</h2>
          <p className="section-desc">需要一套完整的越南支付系统？我们提供定制搭建和SaaS出租两种灵活方案</p>
          <div className="grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="card">
              <div className="card-icon">🏗️</div>
              <h3>系统搭建</h3>
              <p>根据业务需求定制开发越南支付系统，私有化部署，完全自主可控。支持高并发架构、多渠道接入和企业级安全防护。</p>
            </div>
            <div className="card">
              <div className="card-icon">☁️</div>
              <h3>系统出租</h3>
              <p>SaaS模式即开即用的越南支付系统，最快3天上线。按需付费，无需自建技术团队，大幅降低进入越南支付市场的门槛。</p>
            </div>
            <div className="card">
              <div className="card-icon">🔌</div>
              <h3>全渠道覆盖</h3>
              <p>越南支付系统已对接40+本地银行、MoMo、ZaloPay、VNPay等主流支付渠道，一套系统覆盖越南全部支付方式。</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/payment-system/" className="btn cta-css" aria-label="了解越南支付系统详情">了解越南支付系统详情 →</a>
          </p>
        </div>
      </section>

      {/* Blog links */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">越南支付知识中心</h2>
          <p className="section-desc">深入了解越南支付市场，掌握最新行业动态</p>
          <div className="grid-3">
            <a href="/blog/vietnam-payment-guide" className="card" style={{ textDecoration: 'none' }}>
              <h3>📖 越南支付方式全攻略</h3>
              <p>全面解析越南支付方式、政策法规与实操指南</p>
            </a>
            <a href="/blog/vietnam-payment-methods" className="card" style={{ textDecoration: 'none' }}>
              <h3>💡 越南主流支付方式介绍</h3>
              <p>MoMo、ZaloPay、VNPay等越南主流支付方式详解</p>
            </a>
            <a href="/blog/vietnam-payment-system-guide/" className="card" style={{ textDecoration: 'none' }}>
              <h3>🛠️ 越南支付系统搭建指南</h3>
              <p>从零开始打造越南支付平台的完整技术指南</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>开始使用越南支付服务</h2>
          <p>无论您是电商出海、游戏发行还是跨境贸易，VietnamPay都能为您提供最合适的越南支付方案</p>
          <a href="https://t.me/zfxt5" className="btn" target="_blank" rel="noopener noreferrer">
            Telegram 咨询: @zfxt5
          </a>
        </div>
      </section>
    </>
  )
}
