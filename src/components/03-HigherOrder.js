/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class WithMouse extends React.Component {
    state = {
      mouse: { x: 0, y: 0 },
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove = (event) => {
      this.setState({
        mouse: {
          x: event.clientX,
          y: event.clientY,
        },
      });
    }

    render() {
      return (<Component mouse={this.state.mouse} />);
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>We don&#39;t know the mouse position yet :(</h1>
        )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
