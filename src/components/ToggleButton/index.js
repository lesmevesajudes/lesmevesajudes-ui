import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class ToggleButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Button className="checkOption">
            Si
          </Button>

          <Button className="checkOption">
            No
          </Button>
        </div>
    );
  }
}


export default ToggleButton;
