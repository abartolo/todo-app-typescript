import { useRouter } from 'next/router';

const TodoListDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;


  return (
    <main>
      <h1>
        Todo List Detail Page {id}
      </h1>

    </main>
  )
}

export default TodoListDetailPage;