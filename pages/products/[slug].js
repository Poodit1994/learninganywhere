import { useRouter } from 'next/router';

const productData = {
  eco: {
    name: 'ECO',
    description: 'ประตูบานเลื่อนมาตรฐาน ราคาประหยัด',
    pdf: '/pdfs/eco.pdf',
  },
  'extra-plus': {
    name: 'Extra Plus',
    description: 'ระบบประตูที่แข็งแรงและทันสมัย',
    pdf: '/pdfs/extra-plus.pdf',
  },
  euro: {
    name: 'Euro',
    description: 'ซีรีส์สำหรับงานยุโรป ดีไซน์พรีเมียม',
    pdf: '/pdfs/euro.pdf',
  },
  'bi-fold-no1': {
    name: 'Bi-Fold No.1',
    description: 'บานพับแบบเต็มเปิดได้กว้าง',
    pdf: '/pdfs/bi-fold-no1.pdf',
  },
  'bi-fold-slim': {
    name: 'Bi-Fold Slim',
    description: 'รุ่นบางพิเศษ เหมาะกับงานโมเดิร์น',
    pdf: '/pdfs/bi-fold-slim.pdf',
  },
  'slim-line': {
    name: 'Slim Line',
    description: 'เส้นโปรไฟล์บางและหรู',
    pdf: '/pdfs/slim-line.pdf',
  },
  'open-slim': {
    name: 'Open Slim',
    description: 'เปิดได้สุดขอบ กรอบบางเฉียบ',
    pdf: '/pdfs/open-slim.pdf',
  },
};

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = productData[slug];

  if (!product) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>ไม่พบข้อมูลรุ่นนี้</p>;
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>หน้ารายละเอียดรุ่น: {product.name}</h1>
      <p style={{ marginTop: '1rem', color: '#444' }}>{product.description}</p>

      <div style={{ marginTop: '2rem' }}>
        <a
          href={product.pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          🔗 เปิดแคตตาล็อก PDF
        </a>
      </div>
    </div>
  );
}
