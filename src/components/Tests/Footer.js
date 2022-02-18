const {
  Router,
  Route,
  IndexLink,
  IndexRoute,
  Link,
  hashHistory
} = ReactRouter;

const NavBarLink = props => {
  return <Link {...props} activeClassName="active"/>
}

const NavigationBar = props => {
  return (<nav>
        <ul>
          {/* The new NavBarLink component is for Link, no IndexLink, so just use activeClassName here */}
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          {/* Use the new NavBarLinkComponenth for these 2 links */}
          <li><NavBarLink to="/pictures">Pictures</NavBarLink></li>
          <li><NavBarLink to="/time">Time</NavBarLink></li>
      </ul>
</nav>)
}

const Footer = props => {
  return <footer><p>I am the end of the page!</p></footer>
}

class CommonElementsComponent extends React.Component {
  render() {
    return (<div>
    <NavigationBar />    
    {this.props.children}
    <Footer />    
    </div>);
  }
}
class HomePage extends React.Component {
  render() {
    return (<section>
      <h1>Home</h1>
      <p>This is the default route</p>
      </section>);
  }
}

class PicturesPage extends React.Component {
  render() {
    return (<section>
      <h1>Pictures Page</h1>
      <img src="https://unsplash.it/200?random" height="200" width="200"/>
      <img src="https://unsplash.it/201?random" height="200" width="200"/>
      <p><Link to="/">Show me home</Link></p>
     </section>);
  }
}

class TimePage extends React.Component {
    render() {
      return (<section>
      <h1>Time Page</h1>
        <p>{new Date().toLocaleString()}</p>
      <p><Link to="/">Show me home</Link></p>
     </section>);
    }
  }
  /**
   * The router is just another component, and is rendered the same way
   */
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={CommonElementsComponent}>
          <IndexRoute component={HomePage} />
          <Route path="/pictures" component={PicturesPage}/>
          <Route path="/time" component={TimePage}/>
        </Route>
      </Router>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))