import { useRef } from 'react';
import { useQuery } from 'react-query';
import Head from 'next/head';
import Link from 'next/link';
import { TodoList } from '../src/common/types';
import getTodoLists from '../src/services/getTodoLists';

export default function AddTodoPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const { data: todoLists, isLoading } = useQuery('todoLists', getTodoLists);

  const addTodoList = async () => {
    const name = nameRef?.current?.value;

    if (!name) {
      alert('Todo List name can not be empty!');
      return;
    }


    try {
      const response = await fetch('/api/todoList', {
        method: 'POST',
        body: JSON.stringify({
          name
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json();

      console.log('Alex - This is result', result);
    } catch (e) {
      console.error('Alex - err', e);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Todo List</title>
      </Head>

      <main>
        <input id="todoListName" ref={nameRef} type="text" />

        <button onClick={addTodoList}>Add</button>


        <div>
          <h3>Current Todo Lists</h3>

          {
            !isLoading && todoLists && todoLists.map((todo) => (
              <div key={todo.id}>
                <ul>
                  <li><Link href={`/todo-list/${todo.id}`}>{todo.name}</Link></li>
                </ul>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}