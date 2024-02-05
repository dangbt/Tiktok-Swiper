import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className='flex items-center z-20 justify-between px-6 py-4 absolute left-0 right-0 top-0'>
      <Bars3Icon className="h-6 w-6 text-white" />
      <MagnifyingGlassIcon className="h-6 w-6 text-white" />
    </header>
  )
}