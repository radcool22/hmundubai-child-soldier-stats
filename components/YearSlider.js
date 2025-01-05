function YearSlider({ selectedYear, onYearChange }) {
    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2023];
    
    const handleChange = (event) => {
        try {
            const yearIndex = parseInt(event.target.value);
            onYearChange(years[yearIndex]);
        } catch (error) {
            reportError(error);
        }
    };

    const getCurrentIndex = () => {
        return years.indexOf(selectedYear);
    };

    return (
<<<<<<< HEAD
        <div data-name="year-slider" className="w-72 mx-auto mt-4">
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold year-text">2015</span>
                <span className="text-sm font-bold text-center year-text">Year: {selectedYear}</span>
                <span className="text-sm font-bold year-text">2023</span>
=======
        <div data-name="year-slider" className="w-72 mx-auto mt-2">
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold">2015</span>
                <span className="text-xs font-bold text-center">Year: {selectedYear}</span>
                <span className="text-xs font-bold">2023</span>
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
            </div>
            <input
                type="range"
                min="0"
                max="6"
                value={getCurrentIndex()}
                onChange={handleChange}
                className="w-full"
                data-name="year-input"
            />
        </div>
    );
}
