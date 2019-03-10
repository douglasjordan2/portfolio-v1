import React from 'react';
import uuid from 'uuid';

import Search from './components/TodoComponents/Search';
import DailyTab from './components/Timeframes/Daily/Tab';
import MonthlyTab from './components/Timeframes/Monthly/Tab';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  state = {
    // true = daily, false = monthly
    activeTab: true,
    dailyTodos: dailyTodos,
    monthlyTodos: monthlyTodos,
    title: '',
    id: '',
    complete: false,
    position: '',
    search: ''
  }

  search = () => {
    if(this.state.activeTab) {
      this.setState(prevState => {
        return {
          dailyTodos: this.state.dailyTodos.filter(a => a.title.split(" ").includes(this.state.search)),
          search: ''
        }
      })
    } else {
      this.setState(prevState => {
        return {
          monthlyTodos: this.state.monthlyTodos.filter(a => a.title.split(" ").includes(this.state.search)),
          search: ''
        }
      })
    }
  }

  changeActive = () => {
    this.setState({ activeTab: !this.state.activeTab })
  }

  addTodo = event => {
    event.preventDefault();
    let newTodo = {
      title: this.state.title,
      id: uuid.v4(),
      complete: false,
      position: this.activeTab ? this.state.dailyTodos.length : this.state.monthlyTodos.length
    }
    if(this.state.activeTab) {
      this.setState(prevState => { 
        return {
          dailyTodos: [...prevState.dailyTodos, newTodo],
          title: '',
          id: '',
          complete: false,
          position: ''
        }
      })
    } else {
      this.setState(prevState => { 
        return {
          monthlyTodos: [...prevState.monthlyTodos, newTodo],
          title: '',
          id: '',
          complete: false
        }
      })
    }
  }

  clear = () => {
    if(this.state.activeTab) {
      this.setState({ dailyTodos: [...dailyTodos.filter(a => {
        if(!a.complete) {
          return a;
        }
      })] })
    } else {
      this.setState({ monthlyTodos: [...monthlyTodos.filter(a => {
        if(!a.complete) {
          return a;
        }
      })] })
    }
  }

  markComplete = id => {
    if(this.state.activeTab) {
      this.setState({ dailyTodos: this.state.dailyTodos = this.state.dailyTodos.map(a => {
        if(a.id == id) {
          a.complete = !a.complete;
          return a;
        }
        return a;
      }) })
    } else {
      this.setState({ monthlyTodos: this.state.monthlyTodos.map(a => {
        if(a.id == id) {
          a.complete = !a.complete;
        }
        return a;
      }) })
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div style = { container }>
        <h1 style = { h1 }>{ `What I'm doing ${this.state.activeTab ? 'today' : 'this month'}` }</h1>
        <Search 
          handleChange = { this.handleChange }
          search = { this.search }
          searchVal = { this.state.search }
        />
        <div style = { tabContainer }>
          <DailyTab 
            activeTab = {this.state.activeTab}
            changeActive = { this.changeActive }
            todos = { this.state.dailyTodos }
            markComplete = { this.markComplete }
          />
          <MonthlyTab 
            activeTab = {this.state.activeTab}
            changeActive = { this.changeActive }
            todos = { this.state.monthlyTodos }
            markComplete = { this.markComplete }
          />
        </div>
        <TodoForm 
          activeTab = { this.state.activeTab }
          addTodo = { this.addTodo }
          handleChange = { this.handleChange }
          title = { this.state.title }
          clear = { this.clear }
        />
      </div>
    );
  }
}

const dailyTodos = [
  {
    title: 'Complete Edabit challenges.',
    id: uuid.v4(),
    complete: false,
    position: 1
  },
  {
    title: 'Continue brainstorming ideas to improve this site',
    id: uuid.v4(),
    complete: false,
    position: 2
  },
  {
    title: `Study for this week's lessons.`,
    id: uuid.v4(),
    complete: false,
    position: 3
  }
]

const monthlyTodos = [
  {
    title: 'Give this website a responsive design',
    id: uuid.v4(),
    complete: false,
    position: 1
  },
  {
    title: 'Refactor my Texas Holdem game with React',
    id: uuid.v4(),
    complete: false,
    position: 2
  },
  {
    title: 'Continue to study animation libraries',
    id: uuid.v4(),
    complete: false,
    position: 3
  },
  {
    title: 'Apply for Internships.',
    id: uuid.v4(),
    complete: false,
    position: 4
  }
]

const container = {
  height: '500px',
  width: '500px',
  border: '1px solid #e9e9e9',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0',
  background: '#181712',
  color: 'white',
  position: 'relative'
}

const h1 = {
  fontSize: '1.5rem',
  margin: '3%',
  fontStyle: 'italic'
}

const tabContainer = {
  height: '80%',
  position: 'relative',
  overflow: 'scroll'
}

export default App;
