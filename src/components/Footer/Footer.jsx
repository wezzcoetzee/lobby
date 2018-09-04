
import React from 'react';
import './Footer.scss';

class footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <p className="copyright">Wesley Coetzee &copy;</p>
      </footer>
    )
  }
}

export default footer;