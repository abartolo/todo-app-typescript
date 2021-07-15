// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo, Statuses } from '../../src/common/types';
import { TODO_LIST } from './todoList';

interface CreateTodoBody {
  todoListId: string;
  todo: Todo;
}

interface UpdateTodoBody {
  todoListId: string;
  todoId: string;
  status: Statuses;
  content: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo>
) {
  if (req.method === 'POST') {
    const body: CreateTodoBody = req.body;
    const {
      todoListId,
      todo
    } = body;

    const foundList = TODO_LIST.find((todoList) => todoList.id === todoListId);

    if (foundList) {
      foundList.items.push(todo);
    }

    res.status(200).json(todo);
  }

  if (req.method === 'PUT') {
    const body: UpdateTodoBody = req.body;
    const {
      todoListId,
      todoId,
      status,
      content,
    } = body;

    const foundList = TODO_LIST.find((todoList) => todoList.id === todoListId);

    if (foundList) {
      const foundItem = foundList.items.find((todo) => todo.id === todoId);

      if (foundItem) {
        foundItem.content = content || foundItem.content;
        foundItem.status = status || foundItem.status;
        res.status(200).json(foundItem);
        return;
      }
    }

    res.status(404);
  }
}
