import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系越南支付团队，获取专业的越南跨境支付解决方案。Telegram: @zfxt5',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>联系我们</h1>
          <p>随时欢迎咨询越南支付相关问题</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="contact-card">
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>📱</div>
            <h2 style={{ marginBottom: 8 }}>通过 Telegram 联系</h2>
            <p style={{ color: '#475569', marginBottom: 24 }}>我们的支付顾问将在第一时间为您解答</p>
            <a href="https://t.me/zfxt5" className="tg-link" target="_blank" rel="noopener noreferrer">
              ✈️ @zfxt5
            </a>
            <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: 24 }}>工作时间：7×24小时在线</p>
          </div>
        </div>
      </section>
    </>
  )
}
