import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            fontSize: 16,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: '16px',
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