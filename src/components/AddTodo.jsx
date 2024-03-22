import React from 'react'

const AddTodo = ({todoText, changeTodo, clickAdd, text}) => {

return (
<div className='input-area'>
	<input
		type="text"
		placeholder={text}
		value={todoText}
		onChange={changeTodo}
		/>
	<button onClick={clickAdd}>追加</button>
</div>

)
}

export default AddTodo
