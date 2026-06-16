import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Nostalgic Studio Blog — Web Design & Digital Marketing Insights'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }} />
        <div style={{ position: 'absolute', top: '40px', right: '80px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)' }} />
        <div style={{ display: 'flex', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '100px', padding: '8px 20px', marginBottom: '28px' }}>
          <span style={{ color: '#a855f7', fontSize: '15px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Blog</span>
        </div>
        <div style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, lineHeight: 1.15, marginBottom: '28px', maxWidth: '860px' }}>
          Web Design &amp; Digital Marketing Insights
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700 }}>Nostalgic Studio</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7c3aed' }} />
          <span style={{ color: '#71717a', fontSize: '17px' }}>nostalgic-studio.co.za</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
