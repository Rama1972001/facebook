// import * as React from 'react';
// import './ToDoForm.css';
// class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       desc: "",
//       lists: [],

//       editing: false,
     
//       toggleSubmit: true,
//     };
//   }

//   render() {
//     const { toggleSubmit } = this.state;

//     return (
//       <div className="first">
//         <div className='HEADER'>
//           <h1>ToDoList</h1>
//           <label>title</label>
//           <input type="text" value={this.state.name}
//             onChange={this.handleChange.bind(this, 'name')} />
//           <br></br>
// <label>description</label>
//           <textarea type="text" value={this.state.desc}
//             onChange={this.handleChange.bind(this, 'desc')} />

//           <br></br>



//           {
//             toggleSubmit ? <button className="add" onClick={this.handleAddClick.bind(this)}>Add</button> : <button className="add" onClick={this.handleAddClick.bind(this)}>Update</button>
//           }





//           <button className="clear" onClick={() => this.clearAll()}>Clear</button>
//         </div>
//         <ul className='todo_wrapper'>
//           {this.state.lists.map((data, key) => (
//             <li className='todo_item' key={key.id}>
//               <div>
//                 <h3> {data.name} </h3>
//                 <h5>{data.desc}</h5>
//               </div>

//               <button onClick={() => this.onEditTask()}>Edit</button>

//               <button onClick={() => this.onDeleteTask(data.id)}>Remove</button>

//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }




//   onEditTask = () => {
//     let newEditItem = ''; let newEditItemDesc = '';

//     newEditItem = Object.entries(this.state.lists[0])[0][1]

//     newEditItemDesc = Object.entries(this.state.lists[0])[1][1]



//     this.setState({ toggleSubmit: false });
//     this.setState({ name: newEditItem });
//     this.setState({ desc: newEditItemDesc });
//   }
//   onSubmitTodo = (e) => {
//     e.preventDefault();
//     // this.onEditTask(this.state.name, this.state.desc);
//     this.setState({ name: this.state.name });
//     this.setState({ desc: this.state.desc });
//     this.setState({ toggleSubmit: true });
//   };


//   handleChange(name, e) {
//     var change = {};
//     change[name] = e.target.value;
//     this.setState(change);
//   }
//   // function to remove a todo item from the todo array
//   onDeleteTask = (itemId) => {
//     this.setState({
//       lists: [...this.state.lists].filter((id) => id.id !== itemId),
//     });
//   };

//   clearAll = () => {
//     this.setState({
//       lists: []
//     })
//   }

//   handleAddClick() {
//     if (!this.state.name.length || !this.state.desc.length) {
//       alert('plz fill title and Desc!!')
//     }
//     // else if (this.state.name.length && this.state.desc.length  && !this.state.toggleSubmit){


//     // }
//     else {


//       this.setState({
//         name: "", desc: "", id: Date.now(),
//         lists: [...this.state.lists, this.state],
//       });
//     }
//   }
// }

// export default Form;