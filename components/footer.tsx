import Socials from './socials'

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 py-10 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-brand-500">© {new Date().getFullYear()} Kamal Coffee. All rights reserved.</p>
        <Socials />
      </div>
    </footer>
  )
}
