export function Tasks() {
  return (
    <main className="mx-auto flex w-[736px] flex-col pt-10">
      <div className=" flex justify-between text-blue">
        <span>
          Tarefas criadas
          <span className="size-7 rounded-full bg-gray400 px-3 py-1 text-gray200">
            0
          </span>
        </span>
        <span>
          Concluídas
          <span className="size-7 rounded-full bg-gray400 px-3 py-1 text-gray200">
            0
          </span>
        </span>
      </div>
      <div>lista</div>
    </main>
  )
}
