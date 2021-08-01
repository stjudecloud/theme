import * as components from './components';

const ComponentLibrary = {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName];
      console.log(`Loading up ${JSON.stringify(component)}.`);

      Vue.component(component.name, component);
    }
  },
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
