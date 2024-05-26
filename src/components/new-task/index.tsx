import { CirclePlus } from 'lucide-react'

export function NewTask() {
  return (
    <div className="-mt-7 flex justify-center gap-2">
      <input
        type="text"
        className="w-[638px] rounded-lg bg-gray500 p-4"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="button"
        className="flex items-center justify-center gap-1 rounded-lg bg-blueDark p-4 text-gray100"
      >
        Criar
        <CirclePlus size={20} />
      </button>
    </div>
  )
}
