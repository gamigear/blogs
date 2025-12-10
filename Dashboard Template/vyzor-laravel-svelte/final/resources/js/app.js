import './bootstrap';
import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'
import '../css/app.scss'
import '../css/scss/switcher.scss'
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true })
    return pages[`./Pages/${name}.svelte`]
  },
  setup({ el, App, props }) {
    mount(App, { target: el, props })
  },
})

// 🔥 Global click handler to prevent scroll for dummy anchors
document.addEventListener('click', (e) => {
  const target = e.target.closest('a');
  if (!target) return;

  const href = target.getAttribute('href');
  if (href === '#' || href === '#!') {
    e.preventDefault();
  }
});

