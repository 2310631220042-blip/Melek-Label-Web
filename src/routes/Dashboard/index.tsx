import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Main } from '@/components/layout/main'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function DashboardPage() {
  const [gula, setGula] = useState('')
  const [garam, setGaram] = useState('')
  const [lemak, setLemak] = useState('')

  return (
    <Main className='bg-teal-50/50 flex flex-col items-center justify-center min-h-screen p-4'>
      <Card className='w-full max-w-md shadow-xl border-teal-100 rounded-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-teal-900'>Input Label Nutrisi</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <label className="text-sm font-medium text-teal-800">Gula (gram)</label>
            <Input type="number" placeholder="Contoh: 30" value={gula} onChange={(e) => setGula(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium text-teal-800">Garam/Natrium (mg)</label>
            <Input type="number" placeholder="Contoh: 1500" value={garam} onChange={(e) => setGaram(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium text-teal-800">Lemak Jenuh (gram)</label>
            <Input type="number" placeholder="Contoh: 10" value={lemak} onChange={(e) => setLemak(e.target.value)} />
          </div>

          <Link 
            to="/Dashboard/Result" 
            search={{ gula, garam, lemak }} 
            className="block"
          >
            <Button className='w-full mt-4 bg-teal-600 hover:bg-teal-700'>
              Cek Label Saya
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Main>
  )
}

export const Route = createFileRoute('/Dashboard/')({
  component: DashboardPage,
})