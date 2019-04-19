import React from 'react';
import { connect } from 'react-redux'
import ConnectedGoals from './goals'
import ConnectedTodos from './todos'
import {
    handleInitialData 
} from '../actions/share'

class App extends React.Component {
  componentDidMount() {
      // this.props.store.subscribe(() => this.forceUpdate())
      this.props.dispatch(handleInitialData())
  }
  render() {
      const {loading} = this.props

      if(loading === true ) {
          return <h3>Loading data...</h3>
      }

      return <div>
              <ConnectedTodos/>
              <ConnectedGoals/>
            </div>
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)

export default App;
