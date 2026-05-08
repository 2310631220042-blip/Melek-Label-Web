import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/Result/lazy-DESKTOP-DA287BF')({
  component: ResultPage,
})

function ResultPage() {
  const search: any = Route.useSearch() 
  const gula = Number(search.gula) || 0
  const garam = Number(search.garam) || 0
  const lemak = Number(search.lemak) || 0

  const checkStatus = (val: number, type: string) => {
    if (type === 'gula' && val > 25) return { label: 'TINGGI', color: '#ef4444', bg: '#fef2f2' }
    if (type === 'garam' && val > 1500) return { label: 'TINGGI', color: '#ef4444', bg: '#fef2f2' }
    if (type === 'lemak' && val > 10) return { label: 'TINGGI', color: '#ef4444', bg: '#fef2f2' }
    return { label: 'AMAN', color: '#10b981', bg: '#ecfdf5' }
  }

  const results = [
    { name: 'Gula', value: gula, unit: 'g', status: checkStatus(gula, 'gula') },
    { name: 'Garam', value: garam, unit: 'mg', status: checkStatus(garam, 'garam') },
    { name: 'Lemak Jenuh', value: lemak, unit: 'g', status: checkStatus(lemak, 'lemak') },
  ]

  // Cek apakah ada salah satu yang TINGGI
  const isAnyHigh = results.some(item => item.status.label === 'TINGGI')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '32px', width: '100%', maxWidth: '400px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}>
        
        {/* --- FITUR 3: VISUAL INDICATOR (LAMPU LALU LINTAS) --- */}
        <div style={{
          padding: '20px',
          borderRadius: '20px',
          textAlign: 'center',
          backgroundColor: isAnyHigh ? '#fee2e2' : '#dcfce7',
          color: isAnyHigh ? '#b91c1c' : '#15803d',
          fontWeight: 'bold',
          marginBottom: '25px',
          border: `2px solid ${isAnyHigh ? '#ef4444' : '#22c55e'}`
        }}>
          <span style={{ fontSize: '30px', display: 'block' }}>{isAnyHigh ? '⚠️' : '✅'}</span>
          {isAnyHigh ? 'KONSUMSI DIBATASI!' : 'PRODUK INI AMAN'}
        </div>
        {/* ---------------------------------------------------- */}

        <h2 style={{ textAlign: 'center', color: '#064e3b', marginBottom: '32px', fontWeight: '800' }}>Ringkasan Nutrisi</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {results.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderRadius: '20px', backgroundColor: item.status.bg, border: `1px solid ${item.status.color}22` }}>
              <div>
                <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>{item.name}</p>
                <p style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#1f2937' }}>{item.value} <span style={{ fontSize: '14px', fontWeight: '400' }}>{item.unit}</span></p>
              </div>
              <div style={{ backgroundColor: item.status.color, color: 'white', padding: '6px 14px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                {item.status.label}
              </div>
            </div>
          ))}
        </div>

        <Link to="/Dashboard">
          <button style={{ marginTop: '32px', width: '100%', padding: '16px', borderRadius: '16px', border: '2px solid #10b981', backgroundColor: 'transparent', color: '#10b981', fontWeight: '700', cursor: 'pointer' }}>
            ← Cek Produk Lain
          </button>
        </Link>
      </div>
    </div>
  )
}