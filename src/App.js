import React, {useState} from 'react';
import './App.css';

function App() {

  const [arr, changeArr] = useState([
    {
      id: 1,
      title: 'text 1'
    },
    {
      id: 2,
      title: 'text 2'
    },
    {
      id: 3,
      title: 'text 3'
    }
  ])

  // 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)  якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись  (кнопки повернення до початкового стану не треба)
//   const checkPosition = (itemToDelete) => {
//     if (itemToDelete !== 'first' && itemToDelete !== 'last') return;
//     const newArr = [...arr];
//     itemToDelete === 'first' ? newArr.shift() : newArr.pop();
//     changeArr(newArr);
//
//   }
//
//   return (
//   <ul>
//     <button onClick={() => checkPosition('first')}>Delete first</button>
//     <button onClick={() => checkPosition('last')}>Delete last</button>
//     {arr.map(el => <li key={el.id}>{el.title}</li>)}
//   </ul>
//   )
// }


  // 2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)

//     const [itemsToHide, setitemsToHide] = useState([]);
//   const filteredArr = arr.filter(el => !itemsToHide.includes(el.id))
//     const checkPosition = () => {
//       const itemToRemove = filteredArr[0];
//       if (!itemToRemove) return;
//       const newArr = [...arr];
//     setitemsToHide([...itemsToHide, itemToRemove.id])
// }
// const revertAll = () => {
//     setitemsToHide([])
// }
//
//   return (
//     <div className="App">
//       <button onClick={checkPosition}>Delete</button>
//       <button onClick={revertAll}>Revert</button>
//       <ul>
//         {filteredArr.map(el => <li key={el.id}>{el.title}</li>)}
//       </ul>
//     </div>
// );}

  // 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)

  // const [itemsToHide, setElementsToHide] = useState([]);
  // const filteredArr = arr.filter(el => !itemsToHide.includes(el.id))
  // const checkPosition = (itemToDelete) => {
  //   if (!itemToDelete) return;
  //   setElementsToHide([...itemsToHide, itemToDelete.id])
  // }
  // const revertAll = () => {
  //   setElementsToHide([])
  // }
  // return (
  // <div className="App">
  //   <button onClick={revertAll}>Revert</button>
  // <ul>
  //   {filteredArr.map(el => (
  //       <li key={el.id}>
  //     {el.title} - <button onClick={() => checkPosition(el)}>Remove</button>
  //     </li>
  //       )
  //   )}
  // </ul>
  // </div>
  // );}

// 4   написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут https://material-ui.com/components/switches/#customized-switches

  export default App;