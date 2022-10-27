'use client';
import Link from 'next/link';

export default function NavBar() {
  function LinkButton({ absoluteRef, label }) {
    return (
      <Link className="bg-black	p-1 rounded ..." href={absoluteRef}>
        <p className="text-white">{label}</p>
      </Link>
    )
  }
  return (
    <div className=' w-full p-1 self-auto flex justify-between h-auto bg-amber-400'>
      Navigation Bar
      <LinkButton absoluteRef='/escritorio/cartas' label='Cartas' />
    </div>
  )

}