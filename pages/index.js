// pages/index.js
import { event } from '../lib/analytics';

export default function HomePage() {
  const handleSelect = (role) => {
    event({
      action: 'select_role',
      category: 'User',
      label: role,
    });
    console.log('เลือกบทบาท:', role);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>คุณคือใคร?</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => handleSelect('ช่าง')}>ช่าง</button>
        <button onClick={() => handleSelect('เจ้าของกิจการ')}>เจ้าของกิจการ</button>
        <button onClick={() => handleSelect('ผู้สนใจทั่วไป')}>ผู้สนใจทั่วไป</button>
      </div>
    </div>
  );
}
