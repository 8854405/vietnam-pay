import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://vietnampay.net'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '越南支付 - 专业越南跨境支付解决方案 | VietnamPay',
    template: '%s | VietnamPay',
  },
  description: '越南支付专业平台，提供越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案。安全快捷的越南支付服务，助力企业出海东南亚。',
  authors: [{ name: 'VietnamPay' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_URL,
    siteName: 'VietnamPay',
    title: '越南支付 - 专业越南跨境支付解决方案 | VietnamPay',
    description: '提供越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案。',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: 'VietnamPay - 越南支付专业平台' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '越南支付 - 专业越南跨境支付解决方案 | VietnamPay',
    description: '提供越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案。',
    images: ['/images/og-cover.jpg'],
  },
  robots: { index: true, follow: true },
}

function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VietnamPay',
    alternateName: '越南支付',
    url: SITE_URL,
    logo: `${SITE_URL}/images/og-cover.jpg`,
    description: '专业越南跨境支付解决方案提供商',
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', url: 'https://t.me/zfxt5', availableLanguage: ['Chinese', 'Vietnamese'] },
    sameAs: ['https://t.me/zfxt5'],
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VietnamPay',
    alternateName: '越南支付',
    url: SITE_URL,
  }
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '越南支付服务',
    provider: { '@type': 'Organization', name: 'VietnamPay' },
    description: '越南本地支付、跨境汇款、代收代付等一站式越南支付解决方案',
    areaServed: { '@type': 'Country', name: 'Vietnam' },
    serviceType: '跨境支付',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head><JsonLd /></head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">🇻🇳 VietnamPay</a>
        <nav className="nav">
          <a href="/">首页</a>
          <a href="/services">服务</a>
          <a href="/payment-system/">支付系统</a>
          <a href="/blog/vietnam-payment-guide">支付攻略</a>
          <a href="/blog/vietnam-payment-methods">支付方式</a>
          <a href="/about">关于</a>
          <a href="/contact">联系我们</a>
        </nav>
        <button className="nav-toggle" aria-label="菜单">☰</button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h4>VietnamPay · 越南支付</h4>
          <p>专业越南跨境支付解决方案提供商，助力企业出海东南亚。</p>
        </div>
        <div className="footer-col">
          <h4>快速链接</h4>
          <a href="/services">支付服务</a>
          <a href="/payment-system/">支付系统搭建与出租</a>
          <a href="/blog/vietnam-payment-guide">越南支付攻略</a>
          <a href="/blog/vietnam-payment-methods">支付方式介绍</a>
          <a href="/blog/vietnam-payment-system-guide/">支付系统搭建指南</a>
          <a href="/about">关于我们</a>
          <a href="/contact">联系我们</a>
        </div>
        <div className="footer-col">
          <h4>联系方式</h4>
          <a href="https://t.me/zfxt5" target="_blank" rel="noopener noreferrer">Telegram: @zfxt5</a>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} VietnamPay - 专业越南跨境支付解决方案</p>
      </div>
    </footer>
  )
}
