import Link from 'next/link'

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}

const textStyle = {
  fontSize: '50px', // เพิ่มจากเดิม 24px ขึ้นประมาณ 5%
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'black',
}

export default function SelectPage() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ ...centerStyle, flex: 1, backgroundColor: '#f0f0f0' }}>
        <Link href="/catalog" style={textStyle}>Catalog</Link>
      </div>
      <div style={{ ...centerStyle, flex: 1, backgroundColor: '#ffffff' }}>
        <Link href="/video" style={textStyle}>Vedio</Link>
      </div>
    </div>
  )
}
