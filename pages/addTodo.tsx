import { useRef } from 'react';
import Head from 'next/head';
import { TodoList } from '../src/common/types';

export default function AddTodoPage() {
  const nameRef = useRef<HTMLInputElement>(null);

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
      </main>
    </div>
  );
}