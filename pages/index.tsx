import Link from 'next/link';
import { useQuery } from 'react-query';
import { TodoList } from '../src/common/types';
import getTodoLists from '../src/services/getTodoLists';



interface TodoAppProps {
  todoList?: TodoList[]
}

export default function TodoApp({
  todoList = []
}: TodoAppProps) {
  const { data: todoLists, isLoading } = useQuery('todoLists', getTodoLists);

  return (
    <main>
      <h1>
        Todo Lists
      </h1>
      {
        isLoading && (<p>...Loading Todo Lists!</p>)
      }
      {
        !isLoading && todoLists && todoLists.map((todo) => (
          <div key={todo.id}>
            <ul>
              <li><Link href={`/todo-list/${todo.id}`}>{todo.name}</Link></li>
            </ul>
          </div>
        ))
      }
    </main>
  )
};
