import { useState } from "react";
import "./index.css";
import AddTodo from "./components/AddTodo";

const App = () => {
// inputのstatus
const [todoText, setTodoText] = useState("");
// 作成したtodoを管理するstate
const [incompleteTodos, setIncompleteTodos] = useState([]);
// 編集状態を管理するstate
const [editTodos, setEditTodos] = useState(false);

const onChangeTodo = (event) => {
setTodoText(event.target.value);
};

// 追加ボタンが押された
const onClickAdd = () => {
	if (todoText === "") return;
	const newTodos = [...incompleteTodos, todoText];
	//未完了のstateの更新
	setIncompleteTodos(newTodos);
	//inputのstateの更新(最後に実行)
	setTodoText("");
};

// 削除ボタンが押された時の実装
const onClickDelete = (index) => {
	// 新しい配列を用意しそこから削除
	const deleteTodos = [...incompleteTodos];
	deleteTodos.splice(index, 1);
	// stateの更新
	setIncompleteTodos(deleteTodos);
};

//編集ボタンが押された時の実装
const onClickEdit = () => {
	setEditTodos(!editTodos);
};

//編集した値を取得する
const onChangeEdit = (event) => {
	setEditTodos(event.target.value);
};

//保存ボタンが押された処理
const onClickSave = (index) => {
	const newTodos = [...incompleteTodos, editTodos];
	//未完了のstateの更新
	newTodos.splice(index, 1);
	setIncompleteTodos(newTodos);
	setTodoText("");
	// 編集モードを終了する
	setEditTodos(false);
};

//キャンセルボタン
const onClickCancel = () => {
setEditTodos(!editTodos);
};

const statuses = ["未着手", "進行中", "完了"];

return (
<>
	<AddTodo 
		text={"入力してください"}
		todoText={todoText}
		changeTodo={onChangeTodo}
		clickAdd={onClickAdd}	
	/>

<div className="todo-area">
	<h2>{"TODOリスト"}</h2>
	<ul>
		{incompleteTodos.map((todo, index) => {
		return (
			<li key={index}>
			<div className="list-row">
				<p>{index + 1}</p>
				<p>{todo}</p>
				<button onClick={() => onClickDelete(index)}>削除</button>
				<button onClick={onClickEdit}>編集</button>
				<select>
				{statuses.map((status) => {
					return <option key={status}>{status}</option>;
				})}
				</select>
			</div>
			</li>
		);
		})}
	</ul>
	{editTodos && (
		<div>
		<input
			type="text"
			placeholder={"編集内容を入力"}
			onChange={onChangeEdit}
		/>
		<button onClick={onClickSave}>保存</button>
		<button onClick={onClickCancel}>キャンセル</button>
		</div>
	)}
	</div>


</>
);
};

export default App;
