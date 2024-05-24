import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid h-screen w-screen grid-cols-[1fr_5fr] grid-rows-[1fr_6fr_1fr]">
      <header className="col-span-2 bg-red-300">Header</header>
      <nav className="bg-purple-300">Nav</nav>
      <section className="bg-teal-300">Main Content</section>
      <footer className="col-span-2 bg-green-300">Footer</footer>
    </main>
  )
}
