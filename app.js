function App() {
    const [selectedYear, setSelectedYear] = React.useState(2020);
<<<<<<< HEAD
    const [isDarkMode, setIsDarkMode] = React.useState(false);
=======
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e

    const handleYearChange = (year) => {
        try {
            setSelectedYear(year);
        } catch (error) {
            reportError(error);
        }
    };

<<<<<<< HEAD
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
=======
    return (
        <div data-name="app" className="h-screen flex flex-col">
            <Header />
            <main data-name="main" className="flex-1">
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
                <YearSlider 
                    selectedYear={selectedYear}
                    onYearChange={handleYearChange}
                />
                <WorldMap selectedYear={selectedYear} />
<<<<<<< HEAD
                <ColorLegend />
                <Footer />
=======
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
