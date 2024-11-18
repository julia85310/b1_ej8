import {useState} from 'react';
export default function ToDoList(){
    
    const [items, setItems] = useState([]);
    function addItem(){
        let informacion = window.prompt("Añade el nuevo item");
        let item = {
            info: informacion,
            completada: false
        }
        setItems([...items, item]);
    }

    function eliminarItem(indexToDelete){
        const updatedItems = items.filter((_, index) => index != indexToDelete);
        setItems(updatedItems); 
    }

    function marcarCompletada(indexToComplete){
        const updatedItems = items.map((item, index) => {
            if (index == indexToComplete) {
              return { ...item, completada: true }; 
            }
            return item;
          });
        setItems(updatedItems);
    }

    return <div>
        <ul>
            {items.map((item, index) => (
                <li key = {index}>
                    {item.completada ? <del>{item.info}</del> : item.info} 
                    <button onClick={() => marcarCompletada(index)}>✓</button>
                    <button onClick={() => eliminarItem(index)}>-</button>
                </li>
            ))}
        </ul>
        <button onClick={addItem}>+</button>
    </div>
}