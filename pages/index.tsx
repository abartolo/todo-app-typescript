import Head from 'next/head';
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
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Todo Lists
        </h1>
        {
          todoList.map((todo) => (
            <div key={todo.id}>
              <ul>
                <li><span>{todo.name}</span></li>
              </ul>
            </div>
          ))
        }
      </main>
    </div >
  )
}

export async function getServerSideProps() {
  return {
    props: {
      todoList: getTodoList()
    },
  }
}
