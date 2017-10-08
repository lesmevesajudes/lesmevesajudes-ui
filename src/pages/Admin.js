import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

class AdminPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/adults/">
                        <button>
                            Informació dels adults
                        </button>
                    </Link>

                    <Link to="/children/">
                        <button>
                            Informació dels menors
                        </button>
                    </Link>
                    <Link to="/household/">
                        <button>
                            Informació sobre la família
                        </button>
                    </Link>
                    <Link to="/rent/">
                        <button>
                            Informació sobre el lloguer
                        </button>
                    </Link>
                    <Link to="/properties/">
                        <button>
                            Informació sobre les propietats
                        </button>
                    </Link>
                    <Link to="/financial/">
                        <button>
                            Informació sobre els ingressos
                        </button>
                    </Link>
                    <Link to="/results/">
                        <button>
                            Veure els resultats
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <button>
                            Tornar
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default AdminPage;