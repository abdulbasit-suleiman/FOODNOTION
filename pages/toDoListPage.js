
'use client '
function TodoListPage(){
    const [todo,setTodo]=useState([])
return(

<>
<input type="text" placeholder="Enter a task" value={todo}/> 
<button >Save</button>
<ul ><li >{todo} <button>Delete </button></li></ul>
</>


)



}
export default TodoListPage