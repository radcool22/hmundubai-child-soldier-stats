function App() {
    const [selectedCountry, setSelectedCountry] = React.useState(null);
    const [isPanelOpen, setIsPanelOpen] = React.useState(false);
    const [selectedYear, setSelectedYear] = React.useState(2020);

    const handleCountryClick = (country) => {
        try {
            setSelectedCountry(country);
            setIsPanelOpen(true);
        } catch (error) {
            reportError(error);
        }
    };

    const handlePanelClose = () => {
        try {
            setIsPanelOpen(false);
            setSelectedCountry(null);
        } catch (error) {
            reportError(error);
        }
    };

    const handleYearChange = (year) => {
        try {
            setSelectedYear(year);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="app" className="h-screen flex flex-col">
            <Header />
            <main data-name="main" className="flex-1 relative">
                <YearSlider 
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                />
                <WorldMap onCountryClick={handleCountryClick} />
                <SidePanel 
                    isOpen={isPanelOpen}
                    selectedCountry={selectedCountry}
                    selectedYear={selectedYear}
                    onClose={handlePanelClose}
                />
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
