import Link from 'next/link';

export default function CatalogPage() {
  const products = [
    { name: 'ECO', image: '/images/img1.jpg', slug: 'eco' },
    { name: 'Extra Plus', image: '/images/img2.jpg', slug: 'extra-plus' },
    { name: 'Euro', image: '/images/img3.jpg', slug: 'euro' },
    { name: 'Bi-Fold No.1', image: '/images/img4.jpg', slug: 'bi-fold-no1' },
    { name: 'Bi-Fold Slim', image: '/images/img5.jpg', slug: 'bi-fold-slim' },
    { name: 'Slim line', image: '/images/img6.jpg', slug: 'slim-line' },
    { name: 'Open Slim', image: '/images/img7.jpg', slug: 'open-slim' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        Catalog
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        {products.map((item, index) => (
          <Link key={index} href={`/products/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '200px',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
              <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
