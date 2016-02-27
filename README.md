# React App Init

### install
`npm install react-app-init --save`

### what ?
React App Init is an opinionated simple way to kick off a react/redux app without any of the weird imperative stuff in your root `componentDidMount`

### how ? 
```js
import store from '../store';
import App from './app';
import init from './init';
import { loadData } from '../actions';

init(<App />, { store, init: [loadData] });
```

React App init will put the store into Provider, and call dispatch on all actions in the init array. You can optionally pass in a `renderTarget` using something like `{ store, init: [loadData], renderTarget: document.getElementById('app') });` but if you do not one will be created for you.

### why ? 

Because I want to remove this boilerplate from my life and think this looks like a much cleaner way to start an app and I like being able to declaritevely show the actions needed to load my app without searching for the root `componentDidMount`. Inspired by <a href="https://github.com/evancz/start-app/blob/master/src/StartApp.elm#L67">StartApp and the elm architechture</a>.
