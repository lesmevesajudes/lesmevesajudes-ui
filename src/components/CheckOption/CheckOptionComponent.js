import React, { Component } from 'react';

class CheckOptionComponent extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
          <div className="checkOption">
          Si
          </div>

          <div className="checkOption active">
          No
          </div>
      </div>
    );
  }
}


export default CheckOptionComponent;
