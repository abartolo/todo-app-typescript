// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../src/common/types';
import { TODO_LIST } from './todoList';

interface CreateTodoBody {
  todoListId: string;
  todo: Todo;
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
}
