
swapnil trivedi
2:25 PM (7 hours ago)
to me

<!--



TASK LIST

---------



Task #1 - Fix not being able to add todos

- Typing a todo in the input and pressing Enter should add it to the list.



Task #2 - Add "{numActiveTodos} item(s) left" status in footer

- Reference image: https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-640/todo-static.png

- The number is a count of to-dos that have not been completed.

- The positioning should be similar to the static image. It doesn’t have to be pixel perfect.



Task #3 - Add "Clear completed" button in footer

- Clicking the button removes all the completed todos.

- Button is right-aligned and vertically centered inside the footer.

- Button is ONLY VISIBLE if there are completed todos, otherwise invisible.

- Style the button so it appears the same as in the static image.



BONUS



Task #4 - Add item filtering (e.g. all, active, completed) in footer

- Animated GIF: https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-640/todo-animated.gif

- Filters are placed in the footer, between the active item label on the left and the clear completed button on the right.

- Clicking a filter selects it and filters the list of todos.

- Style the filter buttons so they show a light gray border on hover and a light gray background color when selected.



Task #5 - Reset filter to "all" whenever todo list becomes empty

- If the last todo is deleted the filter should reset to "all".

- If Clear Completed is clicked and all the todos are removed the filter should reset to "all".



-->



<!-- TEMPLATES -->



<!-- APP -->



<script

	id="app-template"

	type="text/x-mustache-template"

>

	<div id="app">

		<!-- HEADER -->

		<!-- LIST -->

		<!-- FOOTER -->

	</div>

</script>



<!-- HEADER -->



<script

	id="header-template"

	type="text/x-mustache-template"

>

	<header class="header">

		<input

			class="new-todo"

  		autocomplete="off"

  		spellcheck="false"

  		type="text"

			placeholder="What needs to be done?"

		>

	</header>

</script>



<!-- LIST -->



<script

	id="list-template"

	type="text/x-mustache-template"

>

	<ul class="list">

		<!-- TODOS -->

	</ul>

</script>



<!-- TODO -->



<script

	id="todo-template"

	type="text/x-mustache-template"

>

	<li class="todo {{ isCompleted }}">

		<i class="far fa-check-circle toggle icon">

		</i>

		<div class="name">

			{{ name }}

		</div>

		<i class="fas fa-times destroy icon">

		</i>

	</li>

</script>



<!-- FOOTER -->



<script

	id="footer-template"

	type="text/x-mustache-template"

>

	<footer class="footer {{ hideFooter }}">



		<div><strong>{{ numActiveTodos }}</strong> item(s) left</div>

    <button class="clear-completed {{ hideClearButton }}">Clear completed</button>



	</footer>

</script>















/* VARIABLES */



:root {

	--foreground: #fff;

	--background: #f5f5f5;



	--light-gray: #ddd;

	--medium-gray: #c9c9c9;

	--heavy-gray: #666;

	--black: #333;



	--checked-green: #4bb543;

	--destroy-red: #cc9a9a;

	--destroy-red-hover: #af5b5b;

	--selected-blue: #39c;



	--border: 1px solid var(--light-gray);

	--border-radius: 8px;



	--button-padding: 6px 8px;

}



/* GENERAL */



* {

	margin: 0;

	padding: 0;

	box-sizing: border-box;

	outline: none;

}



body {

	display: flex;

	justify-content: center;

	font-family: Arial, sans-serif;

	font-size: 16px;

	background: var(--background);

	color: var(--black);

	user-select: none;

}



input,

button {

	font-size: inherit;

	font-family: inherit;

	font-weight: inherit;

	color: inherit;

	background: none;

	border: none;

}



ul {

	list-style: none;
}



.icon {

	width: 64px;

	font-size: 20px;

	cursor: pointer;

	display: flex;

	justify-content: center;

	align-items: center;

	flex-shrink: 0;

}



/* APP */



#app {

	background: var(--foreground);

	margin-top: 64px;

	width: 640px;

	border-radius: var(--border-radius);

	box-shadow:

		0 0 2px 0 rgba(30, 30, 30, 0.2),

		0 2px 2px 0 rgba(30, 30, 30, 0.3);

}



/* HEADER */



.header {

	display: flex;

}



.new-todo {

	flex-grow: 1;

	font-size: 24px;

	padding: 16px 64px;

}



.new-todo::placeholder {

	font-style: italic;

	color: var(--light-gray);

}



/* LIST */



.list {

	border-top: var(--border);

}



/* TODO */



.todo {

	display: flex;

	height: 64px;

	align-items: stretch;

	border-bottom: var(--border);

	font-size: 24px;

}



/* TODO TOGGLE */



.toggle {

	font-size: 28px;

	color: var(--light-gray);

	padding-right: 8px;

}



.todo.completed .toggle {

	color: var(--checked-green);

}



/* TODO NAME */



.name {

	flex-grow: 1;

	display: flex;

	align-items: center;

}



.todo.completed .name {

	font-style: italic;

	text-decoration: line-through;

	color: var(--medium-gray);

}



/* TODO DESTROY */



.destroy {

	color: var(--destroy-red);

	visibility: hidden;

}



.destroy:hover {

	color: var(--destroy-red-hover);

}



.todo:hover .destroy {

	visibility: visible;

}



/* TODO: add footer styles below */



.footer {

  padding: 10px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  color: var(--heavy-gray)

}



.clear-completed {

  border: var(--border);

  border-radius: var(--border-radius);

  padding: var(--button-padding)

}



/* UTILITIES */



.invisible {

	visibility: hidden;

}



.hidden {

	display: none;

}















console.clear();



// ----------------

// STATE MANAGEMENT

// ----------------



// INITIALIZING STATE



function defaultState() {

  /* defaultState is used to populate the store on the initial page load. We use localstorage to preserve the data between future reloads. Please clear your local storage if you want to see the changes you made to the default state. */

	return {

		todos: [

			{

				name: 'Example todo 1',

				completed: true,

			},

			{

				name: 'Example todo 2',

				completed: false,

			}

		],

  };

}



const store = {

	// loadState calls defaultState internally

	state: Framework.loadState(),



	// MUTATING STATE



	create(todo) {

		const newTodo = {

			name: 'example todo',

			completed: false,

			...todo,

		};

		this.state.todos.push(newTodo);

	},



	destroy(todo) {

		this.state.todos = this.state.todos.filter(item => item !== todo);

	},

  

  getUnfinishedTodos() {

    return this.state.todos.filter(item => !item.completed).length;

  },

  

  getFinishedTodos() {

    return this.state.todos.filter(item => item.completed);

  },



	// DERIVED STATE



	hasTodos() {

		return !!this.state.todos.length;

	},

};



// -------------------------

// RENDERING & EVENT BINDING

// -------------------------



// RENDER APP



function renderApp() {

	const id = 'app-template';

	const app = Framework.templateToElement(id);



	const header = renderHeader();

	addHeaderListeners(header);

	app.appendChild(header);



	const list = renderList();

	app.appendChild(list);



	const footer = renderFooter();

	addFooterListeners(footer);

	app.appendChild(footer);



	return app;

}



// RENDER HEADER



function renderHeader() {

	const id = 'header-template';

	const header = Framework.templateToElement(id);

	return header;

}



function addHeaderListeners(header) {

	const listeners = {};



	listeners['keyup .new-todo'] = (e) => {

		if (e.key === 'Enter') {

			const name = e.target.value.trim();

			if (!name) return;

			store.create({ name });

			e.target.value = '';

		}

	};



	return Framework.addListeners(header, listeners);

}



// RENDER LIST



function renderList() {

	const id = 'list-template';

	const list = Framework.templateToElement(id);



	const todos = store.state.todos;

	for (let todo of todos) {

		let todoElement = renderTodo(todo);

		addTodoListeners(todoElement, todo);

		list.appendChild(todoElement);

	}



	return list;

}



// RENDER TODO



function renderTodo(todo) {

	const id = 'todo-template';

	const data = {

		isCompleted: todo.completed ? 'completed' : '',

		...todo,

	};

	const todoElement = Framework.templateToElement(id, data);

	return todoElement;

}



function addTodoListeners(todoElement, todo) {

	const listeners = {};



	listeners['click .toggle'] = (e) => {

		todo.completed = !todo.completed;

	};



	listeners['click .destroy'] = (e) => {

		store.destroy(todo);

	};



	return Framework.addListeners(todoElement, listeners);

}



// RENDER FOOTER



function renderFooter() {

	const id = 'footer-template';

	const data = {

		hideFooter: !store.hasTodos() ? 'hidden' : '',

    hideClearButton: store.getFinishedTodos().length > 0 ? '' :'hidden',

    numActiveTodos: store.getUnfinishedTodos()

		// TODO: Add footer template variables here



	};

	const footer = Framework.templateToElement(id, data);

	return footer;

}



function addFooterListeners(footer) {

	const listeners = {};



	listeners['click .clear-completed'] = (e) => {

    

    const finishedTodos = store.getFinishedTodos();

    finishedTodos.forEach(todo => {

      store.destroy(todo)

    })

  }



	return Framework.addListeners(footer, listeners);

}





// RENDER APP AND INSERT IN DOM



Framework.updateApp();













/*

This app implements a small, custom framework to

help with rendering. Reviewing the framework code

is not necessary for the tech screen.



https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-640/todo-framework.js

*/













https://codepen.io/team/Square/collab/a012506fab0e6c16f3d01d51703b7484
