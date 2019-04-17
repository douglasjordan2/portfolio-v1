import React from 'react';
import Info from '../components/TopIconsContent/Info/Content';
import Projects from '../components/TopIconsContent/Projects/Content';
import Contact from '../components/TopIconsContent/Contact/Content';

export const TopContentData = [
  {
    icon: <i class="fas fa-info-circle"></i>,
    content: <Info />,
    open: false,
    close: false,
    id: 'info'
  },
  {
    icon: <i class="fas fa-project-diagram"></i>,
    content: <Projects />,
    open: false,
    close: false,
    id: 'projects'
  },
  {
    icon: <i class="far fa-envelope"></i>,
    content: <Contact />,
    open: false,
    close: false,
    id: 'contact'
  }
]