import { createLazyFileRoute } from '@tanstack/react-router'
import MelekLabelResult from '@/components/MelekLabelResult'

function ResultRoute() {
  // Ambil data dari URL
  const params = new URLSearchParams(window.location.search)
  const gula = Number(params.get('gula')) || 0
  const garam = Number(params.get('garam')) || 0
  const lemak = Number(params.get('lemak')) || 0

  return (
    <MelekLabelResult 
      productName="Hasil Analisis"
      gula={gula} 
      garam={garam} 
      lemak={lemak}
    />
  )
}

export const Route = createLazyFileRoute('/result')({
  component: ResultRoute,
})
