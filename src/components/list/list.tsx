import { Circle, Trash2 } from 'lucide-react'

export function List() {
  return (
    <div className="flex justify-center gap-3 rounded-lg border border-gray300 bg-gray500 p-6 text-lg text-gray300">
      <Circle size={27} className="text-blue" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash2 size={27} className="text-gray300" />
    </div>
  )
}
