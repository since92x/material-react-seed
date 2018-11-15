import React from 'react';
import { Switch, Route } from 'react-router-dom';
import indexRoutes from 'routes/index.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
