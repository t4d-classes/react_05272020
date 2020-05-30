import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom';

const HomePage = () => <h1>Home</h1>;
const AboutPage = () => {

  const params = useParams();
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return <div>
    <h1>About</h1>
    <p>id: {params.id}</p>

    <button type="button" onClick={goHome}>Home</button>
  </div>;
};
const ContactPage = () => <h1>Contact</h1>;


const App = () => {

  return <>
    <header>
      <h1>The App</h1>
    </header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/1">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <main>
      <Switch>
        <Route path="/" exact><HomePage /></Route>
        <Route path="/about/:id"><AboutPage /></Route>
        <Route path="/contact"><ContactPage /></Route>
      </Switch>
    </main>
  </>

};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root'),
);