import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import lazyLegacyRoot from "./lazyLegacyRoot";

const Legacy = lazyLegacyRoot(() => import('../../legacy/src/index'));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Suspense fallback={<p>Loading...</p>}>
                    <p>
                        {React.version}
                    </p>
                    <hr/>
                    <Legacy/>
                </Suspense>
            </header>
        </div>
    );
}

export default App;
