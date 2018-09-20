
import React from 'react';
import './ToggleButtons.scss';

class ToggleButtons extends React.Component {
  render() {
    return (
      <section>      
        <div className={this.props.showDetails ? 'toggle__button menu--toggle details--expanded' : 'toggle__button menu--toggle'} onClick={() => {this.props.onClick(false)}}>
          {this.props.showDetails ? (
            <i className="material-icons">
              chevron_right
            </i>
          ) : (
            <i className="material-icons">
              chevron_left
            </i>
          )}
        </div>
        <div className={this.props.showDetails ? 'toggle__button scroll--top details--expanded' : 'toggle__button scroll--top'}>
          <i className="material-icons">
            expand_less
          </i>
        </div>
      </section>
    )
  }
}

export default ToggleButtons;