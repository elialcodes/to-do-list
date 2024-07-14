//el archivo se llama .d porque no va a tener código,
//sólo declaraciones

//Los tipos globales empiezan por I o T, en mayúscula

//creamos un tipo como interface (ampliable y adecuado para objetos)
//para cada objeto del array
interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

//creamos un tipado que será un array de objetos tipados con la interface Todo
type IListOfTodos = ITodo[];
