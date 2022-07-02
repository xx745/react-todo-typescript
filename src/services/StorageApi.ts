// simple API to use LocalStorage

class StorageApi {
  key = 'reactTodos';

  loadTodos(): ToDo[] {
    const itemsFromLocalStorage: string | null = localStorage.getItem(this.key);

    if (itemsFromLocalStorage) {
      return JSON.parse(itemsFromLocalStorage);
    }

    return [];
  }

  saveTodos(todosToSave: ToDo[]): void {
    const stringifiedTodos = JSON.stringify(todosToSave);
    localStorage.setItem(this.key, stringifiedTodos);
  }

  removeTodos(): void {
    localStorage.removeItem(this.key);
  }
}

export default StorageApi;
