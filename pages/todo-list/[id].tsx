import { useRouter } from 'next/router';
import { getTodoList } from '../api/todoList';
import { TodoList, Statuses } from '../../src/common/types';

// TODO:
// 2) Implement React-Query and useMutation in order to call the endpoint successfully.
// 3) Implement React-Query and useQuery to get updated data for page.
// 3) Implement Non-SSR Page to see how React Query works
interface Props {
  todoLists: TodoList[];
}

const TodoListDetailPage: React.FC<Props> = ({
  todoLists = [],
}) => {
  const router = useRouter();
  const { id } = router.query;
  const {
    items = [],
  } = todoLists.find((todoList) => todoList.id === id) || {};

  return (
    <main>
      <h1>
        Todo List Detail Page {id}
      </h1>
      {
        items.map((item) => {
          const uniqueName = `item-${item.id}`;
          return (
            <div key={item.id}>
              <input type="checkbox" id={uniqueName} name={uniqueName} checked={item.status === Statuses.COMPLETED} />
              <label htmlFor={uniqueName}>{item.content}</label>
            </div>
          )
        })
      }
    </main>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      todoLists: getTodoList()
    },
  }
}

export default TodoListDetailPage;