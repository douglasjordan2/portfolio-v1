import React from 'react';
import Calc from '../components/ReactProjects/Calculator/App';
import Todo from '../components/ReactProjects/Todo/App';

export const ReactProjects = [
  {
    icon: <i class="fas fa-calculator"></i>,
    content: <Calc />,
    open: false,
    close: false,
    id: 'calc'
  },
  {
    icon: <i class="fas fa-tasks"></i>,
    content: <Todo />,
    open: false,
    close: false,
    id: 'todo'
  },
  {
    icon: <i class="fas fa-user-clock"></i>,
    id: 'pom',
    open: false,
    close: false,
    id: 'pom'
  }
]