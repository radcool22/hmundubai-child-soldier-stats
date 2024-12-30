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
        <div data-name="year-slider" className="w-96 mx-auto mt-4">
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold">2015</span>
                <span className="text-xs font-bold text-center">Year: {selectedYear}</span>
                <span className="text-xs font-bold">2023</span>
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
