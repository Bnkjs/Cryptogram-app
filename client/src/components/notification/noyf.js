import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

export const myNotyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'info',
      background: '#2929ff',
      icon: {
        className: 'info',
        tagName: 'span',
        text:'i',
        color: '#fff'
      }
    },
    {
      type: 'warning',
      background: '#ff911c',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'warning'
      }, 
    },
    {
      type: 'destruct',
      background: '#ff461c',
      icon: {
        className: 'material-icons',
        tagName: 'i'
      }, 
    }
    
  ]
});

