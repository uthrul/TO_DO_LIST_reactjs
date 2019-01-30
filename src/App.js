import React, { Component } from 'react';
import './App.css';
import Header from './header';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] }
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({ jam, aktivitas });

    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  removeTodo = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <form ref="formulir" className="form-inline">
          <input type="text" className="form-control" size="8" ref="jam" placeholder="jam aktivitas" />
          <input type="text" className="form-control" size="30" ref="aktivitas" placeholder="jenis aktivitas" />
          <button onClick={this.addTodo} className="btn btn-info">simpan</button>
        </form>
        <hr />
        <div>
          <ul>
            <CSSTransitionGroup
              transitionName="animasi"
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={500}>

              {this.state.todos.map((data, i) =>
                <li key={i}>
                  <div className="todo-wrapper">
                    <button onClick={() => this.removeTodo(i)} className="btn btn-outline-danger">hapus</button> {data.jam} : {data.aktivitas}
                  </div>
                </li>
              )}
            </CSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
