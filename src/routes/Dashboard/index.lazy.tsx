import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/Dashboard/')({
  component: DashboardPage,
})

function DashboardPage() {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({ gula: '', garam: '', lemak: '' })

  const handleCek = () => {
    // Pastikan pakai navigate.search supaya TanStack Router gak bingung
    navigate({
      to: '/Dashboard/Result',
      search: {
        gula: Number(inputs.gula) || 0,
        garam: Number(inputs.garam) || 0,
        lemak: Number(inputs.lemak) || 0,
      },
    })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Health Assistant</span>
          <h1 style={{ color: '#064e3b', fontSize: '32px', fontWeight: '800', marginTop: '12px', marginBottom: '8px' }}>Melek Label</h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>Cek kadar nutrisi kemasanmu sekarang</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {['gula', 'garam', 'lemak'].map((key) => (
            <div key={key}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#374151', textTransform: 'capitalize' }}>
                {key === 'garam' ? 'Garam (mg)' : `${key} (gram)`}
              </label>
              <input 
                type="number" 
                placeholder={`Masukkan ${key}...`}
                style={{ width: '100%', padding: '14px', borderRadius: '16px', border: '2px solid #f3f4f6', outline: 'none', transition: 'border-color 0.2s' }}
                onChange={(e) => setInputs({...inputs, [key]: e.target.value})}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#f3f4f6'}
              />
            </div>
          ))}
          
          <button 
            onClick={handleCek}
            style={{ marginTop: '10px', padding: '18px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.4)' }}
          >
            Analisis Produk
          </button>
        </div>
      </div>
    </div>
  )
}