function SidePanel({ isOpen, selectedCountry, selectedYear, onClose }) {
    const [statistics, setStatistics] = React.useState(null);

    React.useEffect(() => {
        if (selectedCountry) {
            try {
                const stats = getCountryStatistics(selectedCountry.properties.name, selectedYear);
                setStatistics(stats);
            } catch (error) {
                reportError(error);
            }
        }
    }, [selectedCountry, selectedYear]);

    return (
        <div 
            data-name="side-panel"
            className={`side-panel fixed top-[72px] right-0 w-96 h-[calc(100vh-72px)] bg-white border-l border-black p-4 ${
                isOpen ? 'open' : ''
            }`}
        >
            <button 
                data-name="close-button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100"
            >
                ✕
            </button>
            <div data-name="country-info" className="mt-8">
                {selectedCountry ? (
                    <div>
                        <h2 className="text-xl font-bold mb-4">{selectedCountry.properties.name}</h2>
                        <div className="p-4 bg-red-50 border border-red-200 rounded">
                            <h3 className="text-lg font-semibold text-red-800 mb-2">Child Soldier Statistics</h3>
                            {statistics ? (
                                <div>
                                    <p className="text-red-700">
                                        Number of child soldiers: {statistics.total}
                                    </p>
                                    <p className="text-sm text-red-600 mt-2">
                                        Year: {statistics.year}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-red-700">No data available for this country in {selectedYear}</p>
                            )}
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Click another country to compare statistics
                        </p>
                    </div>
                ) : (
                    <p>Select a country to view child soldier statistics</p>
                )}
            </div>
        </div>
    );
}
