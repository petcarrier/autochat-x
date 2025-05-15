import React from 'react';

const App: React.FC = () => {
    const openOptionsPage = () => {
        browser.runtime.openOptionsPage();
    };

    return (
        <div className="mt-6 flex justify-center">
            <button
                onClick={openOptionsPage}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 p-4 rounded-md flex items-center gap-2"
            >
                <span className="material-icons">settings</span>
                Config AI
            </button>
        </div>
    );
};

export default App; 