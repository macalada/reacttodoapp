import React from 'react'

const Form = ({inputText,setInput, todos, setTodos}) =>  {
    const inputTextHandler = (e) =>{
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
        console.log("clicked submit"+setTodos)
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed:false, id: Math.random()*100}
        ]);
        setInput(" ");
    }
    
    return (
        <form>
            <h1>Awesome To Do App</h1>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitHandler}><i className ="plus square icon"></i></button>
            <div>
                <select>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form
