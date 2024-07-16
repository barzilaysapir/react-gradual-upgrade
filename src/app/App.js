import React, {Suspense} from 'react';
import logo from '../logo.svg';
import lazyLegacyRoot from "./lazyLegacyRoot";

const Legacy = lazyLegacyRoot(() => import('./legacy'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<p>Loading...</p>}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                    <pre>
                        App: {React.version}
                    </pre>
                    
                    <Legacy/>
            </header>
        </Suspense>
        </div>
    );
}

export default App;
