import { useRouter } from 'next/router';
import * as ga from '../lib/analytics';

export default function Home() {
  const router = useRouter();

  const handleClick = (role) => {
    // ส่ง event ไป GA
    ga.event({
      action: 'select_role',
      category: 'User',
      label: role,
    });

    // ไปยังหน้าต่อไป (สมมุติว่า /catalog)
    router.push('/catalog');
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>คุณคือใคร?</h1>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => handleClick('ช่าง')}>ช่าง</button>
        <button onClick={() => handleClick('เจ้าของกิจการ')}>เจ้าของกิจการ</button>
        <button onClick={() => handleClick('ผู้สนใจทั่วไป')}>ผู้สนใจทั่วไป</button>
      </div>
    </div>
  );
}
