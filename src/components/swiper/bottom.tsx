import { MusicalNoteIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string
  desc: string
}

export default function Bottom({ title, desc }: Props) {
  return (
    <div className="absolute left-2 right-20 bottom-2">
      <div className="text-white flex-1">
        <h1 className="text-lg font-semibold mb-1">{title}</h1>
        <p className="mb-1">{desc}</p>
        <div className=" flex items-center gap-1">
          <MusicalNoteIcon className="w-4 h-4" />
          <div className="overflow-hidden w-1/2">
            <div className="text-scroll whitespace-nowrap "> Music name here</div>
          </div>
        </div>
      </div>

    </div>
  )
}