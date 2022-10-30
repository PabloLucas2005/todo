import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/Listitem';
import { AddArea } from './components/AddArea';
import AvisoTemp from './components/AddArea/AvisoTemp';

const App = () => {
  const [list, setList] = useState<Item[]>([
   
    
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
        <C.Header>Lista de tarefas de hoje!</ C.Header>
            
        <AvisoTemp/>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;