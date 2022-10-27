'use client';
import Link from 'next/link';
function LinkButton({ absoluteRef, label }) {
  return (
    <Link className="bg-black	p-1 rounded ..." href={absoluteRef}>
      <p className="text-white">{label}</p>
    </Link>
  )
}

export default function NavBar() {
  return (
    <div className=' w-full p-1 self-auto flex justify-between h-auto bg-amber-400'>
      Navigation Bar
      <LinkButton absoluteRef='/escritorio/cartas' label='Cartas' />
      <Link className="bg-black	p-1 rounded ..." href="/escritorio/editor"><p className="text-white">Editor</p></Link>
      <Link className="bg-black	p-1 rounded ..." href="/escritorio/historial"><p className="text-white">Historial</p></Link>
    </div>
  )

}