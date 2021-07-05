// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';
import { TodoList, Statuses } from '../../src/common/types';

export const TODO_LIST: TodoList[] = [
  {
    id: '1',
    name: 'Work Todo',
    createdDate: '07/05/2021',
    updatedDate: '07/05/2021',
    items: [{
      id: '12',
      content: 'Perform Code Reviews!',
      status: Statuses.PENDING
    }]
  },
  {
    id: '2',
    name: 'Home Todo',
    createdDate: '07/05/2021',
    updatedDate: '07/05/2021',
    items: [{
      id: '22',
      content: 'Cut Grass!',
      status: Statuses.PENDING
    }]
  }
];

export const getTodoList = (): TodoList[] => {
  return TODO_LIST;
}

const createTodoList = (name: string): TodoList => {
  const unixTimestamp = moment().valueOf();
  const createdDate = moment(unixTimestamp).format();
  console.log('Alex - Inside CreateTodoList', name);
  return {
    id: unixTimestamp.toString(),
    name,
    items: [],
    createdDate,
    updatedDate: createdDate
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoList[] | TodoList>
) {
  if (req.method === 'GET') {
    res.status(200).json(getTodoList());
  }

  if (req.method === 'POST') {
    const todoList: TodoList = createTodoList(req.body.name);

    TODO_LIST.push(todoList);

    res.status(200).json(todoList)
  }
}
