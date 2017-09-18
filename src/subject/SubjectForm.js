import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./SubjectForm.css";

class SubjectForm extends Component {
    render() {
        return (
            <div>
                <button>
                    <Link to="/adults/">
                        Add adult information
                    </Link>
                </button>
                <button>
                    <Link to="/children/">
                        Add children information
                    </Link>
                </button>
                <button>
                    <Link to="/financial/">
                        Add financial data
                    </Link>
                </button>
                <button>
                    <Link to="/results/">
                        Fetch results
                    </Link>
                </button>
            </div>
        );
    }
}

export default SubjectForm;