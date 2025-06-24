import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleSelect = (userType) => {
    localStorage.setItem('userType', userType)
    router.push('/select')
  }

  return (
    <div style={{ backgroundColor: '#dbe1e8', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>คุณคือใคร?</h1>
      <button onClick={() => handleSelect('technician')} style={buttonStyle}>✅ ช่าง</button>
      <button onClick={() => handleSelect('owner')} style={buttonStyle}>✅ เจ้าของกิจการ</button>
      <button onClick={() => handleSelect('general')} style={buttonStyle}>✅ ผู้สนใจทั่วไป</button>
    </div>
  )
}

const buttonStyle = {
  margin: '10px',
  padding: '15px 30px',
  fontSize: '18px',
  cursor: 'pointer'
}
