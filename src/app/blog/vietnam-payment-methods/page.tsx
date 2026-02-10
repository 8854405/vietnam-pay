import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '越南主流支付方式介绍 - MoMo·ZaloPay·VNPay',
  description: '详细介绍越南主流支付方式：MoMo、ZaloPay、VNPay、银行转账等。帮助企业了解越南支付生态，选择最合适的越南支付渠道接入方案。',
  openGraph: {
    title: '越南主流支付方式介绍 - MoMo·ZaloPay·VNPay | VietnamPay',
    description: '详细介绍越南主流支付方式，帮助企业选择最合适的越南支付渠道。',
    url: 'https://vietnampay.net/blog/vietnam-payment-methods',
    type: 'article',
    siteName: 'VietnamPay',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: '越南主流支付方式介绍' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '越南主流支付方式介绍 - MoMo·ZaloPay·VNPay | VietnamPay',
    description: '详细介绍越南主流支付方式，帮助企业选择最合适的越南支付渠道。',
    images: ['/images/og-cover.jpg'],
  },
}

function ArticleJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '越南主流支付方式介绍 — MoMo、ZaloPay、VNPay全解析',
    description: '详细介绍越南主流支付方式，帮助企业了解越南支付生态。',
    author: { '@type': 'Organization', name: 'VietnamPay', url: 'https://vietnampay.net' },
    publisher: { '@type': 'Organization', name: 'VietnamPay', url: 'https://vietnampay.net' },
    datePublished: '2024-01-15',
    dateModified: '2024-12-01',
    mainEntityOfPage: 'https://vietnampay.net/blog/vietnam-payment-methods',
    url: 'https://vietnampay.net/blog/vietnam-payment-methods',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const methods = [
  { name: 'MoMo', users: '3100万', type: '电子钱包', scenes: '线上支付、线下扫码、转账、缴费', advantage: '用户量最大，覆盖面最广，接入简单' },
  { name: 'ZaloPay', users: '2000万', type: '电子钱包', scenes: '社交支付、线上购物、转账', advantage: '依托Zalo社交平台，年轻用户活跃' },
  { name: 'VNPay QR', users: '30万商户', type: 'QR码支付', scenes: '线下扫码支付', advantage: '银行生态互通，线下覆盖广' },
  { name: 'ViettelPay', users: '1500万', type: '电子钱包', scenes: '充值缴费、转账、小额支付', advantage: '农村及中小城市覆盖率高' },
  { name: '银行转账(Napas)', users: '全银行覆盖', type: '银行支付', scenes: 'B2B支付、大额交易', advantage: '最基础的支付方式，信任度高' },
  { name: 'Visa/Mastercard', users: '国际通用', type: '信用卡', scenes: '酒店、国际电商、高端消费', advantage: '国际商户必备，外籍人士常用' },
]

export default function VietnamPaymentMethods() {
  return (
    <>
    <head><link rel="canonical" href="https://vietnampay.net/blog/vietnam-payment-methods/" /></head>
    <article className="article">
      <ArticleJsonLd />
      <div className="breadcrumb">
        <a href="/">首页</a> &gt; <a href="/blog/vietnam-payment-methods">越南主流支付方式介绍</a>
      </div>

      <h1>越南主流支付方式介绍</h1>
      <p style={{ color: '#475569', marginBottom: 32 }}>全面了解越南支付生态，选择最合适的支付渠道 | 由 <a href="/" style={{ color: '#2563eb' }}>VietnamPay</a> 团队出品</p>

      <p>越南支付市场正在经历数字化转型，从传统现金支付向电子支付快速过渡。了解越南主流支付方式，是企业成功进入越南市场的关键。以下是越南目前最主要的几种支付方式。</p>

      {methods.map((m) => (
        <div key={m.name} style={{ background: '#f8fafc', borderRadius: 12, padding: '24px 28px', marginBottom: 20, border: '1px solid #e2e8f0' }}>
          <h2 style={{ marginTop: 0, marginBottom: 12 }}>{m.name}</h2>
          <p><strong>类型：</strong>{m.type} &nbsp;|&nbsp; <strong>用户规模：</strong>{m.users}</p>
          <p><strong>适用场景：</strong>{m.scenes}</p>
          <p><strong>核心优势：</strong>{m.advantage}</p>
        </div>
      ))}

      <h2>如何选择越南支付方式？</h2>
      <p>选择越南支付方式时，需要综合考虑以下因素：</p>
      <ul>
        <li><strong>目标用户群体：</strong>年轻用户偏好MoMo和ZaloPay，商务用户更常使用银行转账</li>
        <li><strong>业务场景：</strong>线上电商建议接入MoMo+银行转账，线下零售推荐VNPay QR</li>
        <li><strong>交易金额：</strong>小额交易适合电子钱包，大额交易建议银行转账</li>
        <li><strong>接入成本：</strong>不同渠道的费率和技术对接成本不同，需要综合评估</li>
      </ul>
      <p>最佳实践是同时接入多种越南支付方式，让用户自由选择，从而提升支付成功率和用户体验。</p>

      <h2>需要帮助？</h2>
      <p>如果您不确定应该选择哪些越南支付方式，或需要技术对接支持，欢迎联系VietnamPay。我们将根据您的业务场景，为您推荐最合适的越南支付方案。</p>
      <p><a href="https://t.me/zfxt5" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600 }}>Telegram: @zfxt5</a></p>
      <p style={{ marginTop: 24 }}>相关阅读：<a href="/blog/vietnam-payment-guide" style={{ color: '#2563eb' }}>越南支付方式全攻略</a> | <a href="/services" style={{ color: '#2563eb' }}>VietnamPay越南支付服务</a></p>
    </article>
    </>
  )
}
