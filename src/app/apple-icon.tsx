import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            fontSize: 72,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '180px',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: '90px',
            fontWeight: 'bold',
          }}
        >
          CG
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}