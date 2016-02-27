import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

class Root extends React.Component {
  componentDidMount() {
    const { store, init } = this.props;
    init.forEach(action => store.dispatch(action()));
  }
  render() {
    const { store, children } = this.props;
    return <Provider store={store}>{children}</Provider>
  }
}

export default function(component, {store, init = [], renderTarget}) {
  if (!renderTarget) {
    const div = document.createElement('div');
    div.id = 'app';
    document.body.appendChild(div);
    renderTarget = document.getElementById('app');
  }
  render(<Root store={store} init={init}>{component}</Root>, renderTarget);
}

