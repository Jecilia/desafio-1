import { Header } from './components/header/header'
import { NewTask } from './components/new-task'
import { Tasks } from './components/tasks'

export function App() {
  return (
    <>
      <Header />
      <div className="mx-auto flex w-full flex-col bg-gray600">
        <NewTask />
        <Tasks />
      </div>
    </>
  )
}
