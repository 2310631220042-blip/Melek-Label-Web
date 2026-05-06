import { useNavigate } from '@tanstack/react-router' // 1. IMPORT NAVIGATE
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

const CameraIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-6 w-6 me-2'>
    <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'/><circle cx='12' cy='13' r='3'/>
  </svg>
)

export function Dashboard() {
  const navigate = useNavigate() // 2. PANGGIL HOOK NAVIGATE

  return (
    <>
      <Header>
        <TopNav links={topNav} className='me-auto' />
        <ThemeSwitch />
        <ProfileDropdown />
      </Header>

      <Main className='bg-teal-50/50'>
        
        <div className='mb-8 text-center space-y-2 pt-4'>
          <h1 className='text-3xl font-bold tracking-tight text-teal-950'>
            Halo, Selamat Datang di Melek Label!
          </h1>
          <p className='text-muted-foreground text-lg'>
            Yuk, Ketahui Apa yang Ada di Kemasanmu.
          </p>
        </div>

        <Card className='max-w-2xl mx-auto shadow-lg border-teal-100 rounded-xl'>
          <CardHeader className='text-center pb-2'>
            <CardTitle className='text-xl text-teal-900'>
              Masukan Jumlah GGL per Takaran Saji
            </CardTitle>
            <CardDescription>
              Lihat contoh label kemasan untuk bantuan.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6 pt-4'>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-teal-50 pb-4'>
                <Label htmlFor='gula' className='text-lg font-medium text-teal-950 md:text-right md:pr-4'>Gula:</Label>
                <div className='relative md:col-span-2'>
                    <Input id='gula' type='number' placeholder='0' className='text-lg p-6 border-teal-200' />
                    <span className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono'>g</span>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-teal-50 pb-4'>
                <Label htmlFor='garam' className='text-lg font-medium text-teal-950 md:text-right md:pr-4'>Garam/Natrium:</Label>
                <div className='relative md:col-span-2'>
                    <Input id='garam' type='number' placeholder='0' className='text-lg p-6 border-teal-200' />
                    <span className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono'>mg</span>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center pb-2'>
                <Label htmlFor='lemak' className='text-lg font-medium text-teal-950 md:text-right md:pr-4'>Lemak Jenuh:</Label>
                <div className='relative md:col-span-2'>
                    <Input id='lemak' type='number' placeholder='0' className='text-lg p-6 border-teal-200' />
                    <span className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-mono'>g</span>
                </div>
            </div>

          </CardContent>
        </Card>

        <div className='max-w-2xl mx-auto mt-8 text-center space-y-6'>
            {/* 3. TOMBOL DENGAN FUNGSI CLICK */}
            <Button 
                onClick={() => navigate({ to: "/Dashboard/Result" })} 
                className='w-full text-xl p-8 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md'
            >
                Cek Label Saya
            </Button>

            <div className='relative flex items-center justify-center py-2'>
                <div className='flex-grow border-t border-teal-200'></div>
                <span className='flex-shrink mx-4 text-teal-800 font-medium'>ATAU</span>
                <div className='flex-grow border-t border-teal-200'></div>
            </div>

            <Button variant='outline' className='w-full text-lg p-7 border-teal-300 text-teal-700 hover:bg-teal-50 rounded-xl'>
                <CameraIcon />
                Scan Label dengan Kamera
            </Button>
        </div>

        <div className='max-w-4xl mx-auto mt-16 mb-10 space-y-6'>
            <h2 className='text-center text-2xl font-semibold text-teal-950'>Fitur Lainnya</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {[
                    { title: 'Edukasi GGL', icon: '📚' },
                    { title: 'Cari Produk', icon: '🔍' },
                    { title: 'Riwayat Saya', icon: '🕒' },
                ].map((item) => (
                    <Card key={item.title} className='bg-teal-100/50 border-teal-200 hover:shadow-md cursor-pointer transition-shadow rounded-xl'>
                        <CardContent className='p-6 text-center space-y-3'>
                            <div className='text-5xl'>{item.icon}</div>
                            <p className='text-xl font-semibold text-teal-900'>{item.title}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <footer className='border-t border-teal-100 mt-auto py-6 text-center bg-white'>
            <p className='text-sm text-muted-foreground'>
                (c) 2023 Melek Label. Semua Hak Dilindungi.
            </p>
        </footer>

      </Main>
    </>
  )
}

const topNav = [
  { title: 'Cek Label', href: 'dashboard', isActive: true, disabled: false },
  { title: 'Edukasi', href: 'dashboard/edukasi', isActive: false, disabled: false },
  { title: 'Riwayat', href: 'dashboard/riwayat', isActive: false, disabled: false },
]