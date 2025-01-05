<<<<<<< HEAD
function Header({ isDarkMode, onToggleDarkMode }) {
    const [showSources, setShowSources] = React.useState(false);

    return (
        <div data-name="header" className="flex justify-between items-center px-4 py-2 bg-white">
            <div className="flex-1">
                {/* Empty div for flex spacing */}
            </div>
            <div className="flex-1 text-center">
                <h1 data-name="title" className="text-xl font-bold inline-block">
                    <span className="mr-2">⚔️</span>
                    Global Child Soldier Statistics
                </h1>
                <div data-name="statistics" className="text-xs text-red-600 mt-1">
                    According to the UN, approximately 105,000 child soldiers have been recruited between 2005 and 2022.
                </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-2">
                <div className="relative">
                    <button
                        data-name="sources-button"
                        onClick={() => setShowSources(!showSources)}
                        className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
                    >
                        Sources ▾
                    </button>
                    {showSources && (
                        <div data-name="sources-dropdown" className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-md z-50">
                            <ul className="py-1 text-xs">
                                <li className="px-3 py-1 hover:bg-gray-100">
                                    <a 
                                        href="https://childrenandarmedconflict.un.org/document/secretary-general-annual-report-on-children-and-armed-conflict-3/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        UN Secretary General Report 2024
                                    </a>
                                </li>
                                <li className="px-3 py-1 hover:bg-gray-100">
                                    <a 
                                        href="https://carleton.ca/landonpearsoncentre/wp-content/uploads/Child-Soldier-Index-.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Child Soldier Index
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <button 
                    data-name="settings-button"
                    onClick={onToggleDarkMode}
                    className="p-2 hover:bg-gray-100 rounded-full"
                    title="Toggle Dark Mode"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        {isDarkMode ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                            />
                        ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        )}
                    </svg>
                </button>
=======
function Header() {
    return (
        <div data-name="header" className="flex flex-col items-center p-2 bg-white border-b border-black">
            <div className="flex items-center mb-2">
                <span data-name="logo" className="text-2xl mr-3">⚔️</span>
                <h1 data-name="title" className="text-xl font-bold">Global Child Soldier Statistics</h1>
            </div>
            <div data-name="statistics" className="text-sm text-red-600">
                Since 2005, approximately <span className="font-bold">300,000</span> child soldiers have been recruited
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
            </div>
        </div>
    );
}
