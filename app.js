function App() {
    const [selectedYear, setSelectedYear] = React.useState(2020);

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
            <main data-name="main" className="flex-1">
                <YearSlider 
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                />
                <WorldMap selectedYear={selectedYear} />
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
