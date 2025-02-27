function WorldMap({ selectedYear }) {
    const mapRef = React.useRef(null);
    const tooltipRef = React.useRef(null);

<<<<<<< HEAD
    const getColorClass = (countryName) => {
        try {
            const stats = getCountryStatistics(countryName, selectedYear);
            if (!stats) return 'country';
            
            if (stats.isTotal) {
                if (stats.total >= 8000) return 'country has-total-highest';
                if (stats.total >= 2000) return 'country has-total-medium';
                return 'country has-total-low';
            }

            const value = stats.cumulativeTotal;
            if (value >= 10000) return 'country has-data-highest';
            if (value >= 7500) return 'country has-data-high';
            if (value >= 5000) return 'country has-data-medium';
            if (value >= 2500) return 'country has-data-low';
            return 'country has-data-lowest';
        } catch (error) {
            reportError(error);
            return 'country';
        }
    };

    React.useEffect(() => {
        try {
            const width = window.innerWidth;
            const height = window.innerHeight - 120;

=======
    React.useEffect(() => {
        try {
            const width = window.innerWidth;
            const height = window.innerHeight - 100;

            // Clear previous content
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
            d3.select(mapRef.current).selectAll("*").remove();

            const svg = d3.select(mapRef.current)
                .attr('width', width)
                .attr('height', height);

            const tooltip = d3.select(tooltipRef.current);

            const projection = d3.geoMercator()
<<<<<<< HEAD
                .scale(width / 7)
                .center([0, 35])
=======
                .scale(width / 6.5)
                .center([0, 20])
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
                .translate([width / 2, height / 2]);

            const path = d3.geoPath().projection(projection);

            d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
                .then(data => {
                    const countries = topojson.feature(data, data.objects.countries);

                    svg.selectAll('path')
                        .data(countries.features)
                        .enter()
                        .append('path')
<<<<<<< HEAD
                        .attr('class', d => getColorClass(d.properties.name))
                        .attr('d', path)
                        .on('mouseover', (event, d) => {
                            const countryName = d.properties.name;
                            const stats = getCountryStatistics(countryName, selectedYear);
=======
                        .attr('class', d => {
                            const countryName = d.properties.name;
                            if (countryName === 'Nigeria' || countryName === 'Philippines') {
                                return 'country has-total';
                            }
                            const hasData = countryData[countryName] && 
                                          countryData[countryName][selectedYear] && 
                                          countryData[countryName][selectedYear] !== "-";
                            return `country ${hasData ? 'has-data' : ''}`;
                        })
                        .attr('d', path)
                        .on('mouseover', (event, d) => {
                            const countryName = d.properties.name;
                            const stats = countryData[countryName]?.[selectedYear];
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
                            
                            const bounds = path.bounds(d);
                            const x = (bounds[0][0] + bounds[1][0]) / 2;
                            const y = (bounds[0][1] + bounds[1][1]) / 2;
                            
                            const [tooltipX, tooltipY] = projection.invert([x, y]);
                            const [screenX, screenY] = projection([tooltipX, tooltipY]);
                            
                            tooltip
                                .style('display', 'block')
                                .style('left', `${screenX}px`)
                                .style('top', `${screenY - 20}px`);

<<<<<<< HEAD
                            if (stats) {
                                if (stats.isTotal) {
                                    tooltip.html(`
                                        <strong>${countryName}</strong><br>
                                        Total Child Soldiers: ${stats.total}<br>
                                        (Total across all years)
                                    `);
                                } else {
                                    tooltip.html(`
                                        <strong>${countryName}</strong><br>
                                        Children recruited in ${selectedYear}: ${stats.yearTotal}<br>
                                        Children recruited since 2015: ${stats.cumulativeTotal}
                                    `);
                                }
=======
                            if (stats && stats !== "-") {
                                tooltip.html(`
                                    <strong>${countryName}</strong><br>
                                    Child Soldiers: ${stats}<br>
                                    Year: ${selectedYear}
                                `);
                            } else if (countryData[countryName]?.total) {
                                tooltip.html(`
                                    <strong>${countryName}</strong><br>
                                    Child Soldiers: ${countryData[countryName].total}<br>
                                    (Total across all years)
                                `);
>>>>>>> 29b6ed2cc773db419db846555362a065f8ba412e
                            } else {
                                tooltip.html(`<strong>${countryName}</strong>`);
                            }
                        })
                        .on('mouseout', () => {
                            tooltip.style('display', 'none');
                        });
                });
        } catch (error) {
            reportError(error);
        }
    }, [selectedYear]);

    return (
        <div data-name="map-container" className="map-container">
            <svg data-name="map" ref={mapRef}></svg>
            <div data-name="tooltip" ref={tooltipRef} className="tooltip"></div>
        </div>
    );
}
