import Link from 'next/link';
import { Statuses, TodoList } from '../src/common/types';
import { getTodoList } from './api/todoList';


interface TodoAppProps {
  todoList: TodoList[]
}

export default function TodoApp({
  todoList = []
}: TodoAppProps) {
  return (
    <main>
      <h1>
        Todo Lists
      </h1>
      {
        todoList.map((todo) => (
          <div key={todo.id}>
            <ul>
              <li><Link href={`/todo-list/${todo.id}`}>{todo.name}</Link></li>
            </ul>
          </div>
        ))
      }
    </main>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      todoList: getTodoList()
    },
  }
}
