function App() {
    const [selectedYear, setSelectedYear] = React.useState(2020);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleYearChange = (year) => {
        try {
            setSelectedYear(year);
        } catch (error) {
            reportError(error);
        }
    };

    const handleToggleDarkMode = () => {
        try {
            setIsDarkMode(!isDarkMode);
            document.body.classList.toggle('dark-mode');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="app" className="h-screen flex flex-col">
            <Header isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
            <main data-name="main" className="flex-1 relative">
                <YearSlider 
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                />
                <WorldMap selectedYear={selectedYear} />
                <ColorLegend />
                <Footer />
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
