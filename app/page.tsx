import { Hero } from '@/components'
import Image from 'next/image'
import { pdfjs } from 'react-pdf';

export default function Home() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  

  return (
    <main className='overflow-hidden'>
      <Hero/> 
    </main>
  )
}
