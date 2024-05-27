import { List } from '../list/list'

export function Tasks() {
  return (
    <main className="mx-auto flex h-screen w-[736px] flex-col pt-12 text-lg">
      <div className="flex justify-between font-bold">
        <span className="text-blue">
          Tarefas criadas
          <span className="size-7 rounded-full bg-gray400 px-3 py-1 text-gray200">
            0
          </span>
        </span>
        <span className="text-blueDark">
          Concluídas
          <span className="size-7 rounded-full bg-gray400 px-3 py-1 text-gray200">
            0
          </span>
        </span>
      </div>
      <div className="m-6 space-y-4">
        <List />
        <List />
      </div>
    </main>
  )
}
