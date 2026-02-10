import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 - 深耕越南支付领域的专业团队',
  description: '了解VietnamPay越南支付团队，深耕越南跨境支付领域多年，为超过1000家企业提供专业的越南支付解决方案，助力企业出海东南亚。',
  alternates: { canonical: '/about' },
  openGraph: {
    title: '关于我们 - 深耕越南支付领域的专业团队 | VietnamPay',
    description: '了解VietnamPay越南支付团队，深耕越南跨境支付领域多年，为企业提供专业越南支付解决方案。',
    url: 'https://vietnampay.net/about',
    type: 'website',
    siteName: 'VietnamPay',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: 'VietnamPay - 关于我们' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们 - 深耕越南支付领域的专业团队 | VietnamPay',
    description: '了解VietnamPay越南支付团队，深耕越南跨境支付领域多年。',
    images: ['/images/og-cover.jpg'],
  },
}

function AboutJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: '关于VietnamPay',
    description: '深耕越南支付领域的专业团队，为超过1000家企业提供越南跨境支付解决方案。',
    url: 'https://vietnampay.net/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'VietnamPay',
      alternateName: '越南支付',
      url: 'https://vietnampay.net',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function About() {
  return (
    <>
      <AboutJsonLd />
      <section className="page-header">
        <div className="container">
          <h1>关于VietnamPay · 越南支付</h1>
          <p>深耕越南支付领域，助力企业出海东南亚</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ marginBottom: 16 }}>我们是谁</h2>
          <p>VietnamPay（越南支付）是一家专注于越南跨境支付服务的专业机构。我们的团队由资深金融科技专家和越南本地支付行业从业者组成，深谙越南支付市场的规则与趋势。</p>
          <p>自成立以来，我们已为超过1000家企业提供了可靠的越南支付解决方案，涵盖电商、游戏、跨境贸易、旅游等多个行业。</p>

          <h2 style={{ marginTop: 40, marginBottom: 16 }}>我们的使命</h2>
          <p>让越南支付变得更简单、更安全、更高效。我们致力于打破跨境支付壁垒，帮助中国企业顺畅进入越南市场，同时为越南企业连接中国经济圈提供便捷的支付通道。</p>

          <h2 style={{ marginTop: 40, marginBottom: 16 }}>核心优势</h2>
          <ul style={{ marginLeft: 24, marginBottom: 24 }}>
            <li>深耕越南支付市场5年以上，对当地政策法规有深入了解</li>
            <li>与越南各大银行及支付机构建立了紧密的合作关系</li>
            <li>自研支付系统，稳定性达99.9%，日处理交易量百万级</li>
            <li>中越双语团队，7×24小时技术与客服支持</li>
            <li>完善的风控体系，保障每一笔交易安全</li>
          </ul>

          <h2 style={{ marginTop: 40, marginBottom: 16 }}>联系我们</h2>
          <p>如需了解更多关于越南支付的信息，或有合作意向，请通过 Telegram 联系我们。</p>
          <p><a href="https://t.me/zfxt5" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600 }}>Telegram: @zfxt5</a></p>

          <p style={{ marginTop: 32 }}>了解我们的<a href="/services" style={{ color: '#2563eb' }}>越南支付服务</a>，或阅读<a href="/blog/vietnam-payment-guide" style={{ color: '#2563eb' }}>越南支付攻略</a>。</p>
        </div>
      </section>
    </>
  )
}
