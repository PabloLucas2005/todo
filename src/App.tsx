import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/Listitem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
   // { id: 1, name: 'Comprar o pão na padaria', done: false},
    
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done:false,
    });
    setList(newList);
  }

  return (
    <C.Container>
     
      <C.Area>
        <C.Header>AS BRONCAS DE HOJE!</ C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;