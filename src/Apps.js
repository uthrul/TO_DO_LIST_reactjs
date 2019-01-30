import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import uuid from 'uuid';

import './styles.css';

class TodoList extends React.Component {

  render() {
    const { items } = this.state;
    return (
      <Grid>
        <ListGroup>
          <TransitionGroup>
            {items.map(({ id, text }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="fade"
              >
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    type="button"
                    bsStyle="danger"
                    bsSize="xs"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(
                          item => item.id !== id
                        ),
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {text}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Grid>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
