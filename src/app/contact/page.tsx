import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们 - 获取越南支付解决方案',
  description: '联系VietnamPay越南支付团队，获取专业的越南跨境支付解决方案。Telegram: @zfxt5，7×24小时在线，中越双语支持。',
  openGraph: {
    title: '联系我们 - 获取越南支付解决方案 | VietnamPay',
    description: '联系VietnamPay越南支付团队，获取专业的越南跨境支付解决方案。Telegram: @zfxt5。',
    url: 'https://vietnampay.net/contact',
    type: 'website',
    siteName: 'VietnamPay',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: 'VietnamPay - 联系我们' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '联系我们 - 获取越南支付解决方案 | VietnamPay',
    description: '联系VietnamPay获取专业越南支付解决方案。Telegram: @zfxt5。',
    images: ['/images/og-cover.jpg'],
  },
}

function ContactJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: '联系VietnamPay',
    description: '联系VietnamPay越南支付团队，获取专业越南跨境支付解决方案。',
    url: 'https://vietnampay.net/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'VietnamPay',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://t.me/zfxt5',
        availableLanguage: ['Chinese', 'Vietnamese'],
        hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
      },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function Contact() {
  return (
    <>
      <head><link rel="canonical" href="https://vietnampay.net/contact" /></head>
      <ContactJsonLd />
      <section className="page-header">
        <div className="container">
          <h1>联系VietnamPay · 越南支付咨询</h1>
          <p>随时欢迎咨询越南支付相关问题</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="contact-card">
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>📱</div>
            <h2 style={{ marginBottom: 8 }}>通过 Telegram 联系</h2>
            <p style={{ color: '#475569', marginBottom: 24 }}>我们的越南支付顾问将在第一时间为您解答</p>
            <a href="https://t.me/zfxt5" className="tg-link" target="_blank" rel="noopener noreferrer">
              ✈️ @zfxt5
            </a>
            <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: 24 }}>工作时间：7×24小时在线</p>
          </div>
          <p style={{ textAlign: 'center', marginTop: 32, color: '#475569' }}>
            了解我们的<a href="/services" style={{ color: '#2563eb' }}>越南支付服务</a> | 阅读<a href="/blog/vietnam-payment-guide" style={{ color: '#2563eb' }}>越南支付攻略</a> | <a href="/about" style={{ color: '#2563eb' }}>关于我们</a>
          </p>
        </div>
      </section>
    </>
  )
}
