import axios, { AxiosResponse } from 'axios';
import { TodoList } from '../common/types'

const getTodoLists = (): Promise<TodoList[]> => {
  return axios.get('/api/todoList')
    .then(function (response) {
      return new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), 2000));
    })
    .then(response => {
      return response.data;
    })

}

export default getTodoLists;