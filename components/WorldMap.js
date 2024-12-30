function WorldMap({ selectedYear }) {
    const mapRef = React.useRef(null);
    const tooltipRef = React.useRef(null);

    React.useEffect(() => {
        try {
            const width = window.innerWidth;
            const height = window.innerHeight - 100;

            // Clear previous content
            d3.select(mapRef.current).selectAll("*").remove();

            const svg = d3.select(mapRef.current)
                .attr('width', width)
                .attr('height', height);

            const tooltip = d3.select(tooltipRef.current);

            const projection = d3.geoMercator()
                .scale(width / 6.5)
                .center([0, 20])
                .translate([width / 2, height / 2]);

            const path = d3.geoPath().projection(projection);

            d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
                .then(data => {
                    const countries = topojson.feature(data, data.objects.countries);

                    svg.selectAll('path')
                        .data(countries.features)
                        .enter()
                        .append('path')
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
                            
                            const bounds = path.bounds(d);
                            const x = (bounds[0][0] + bounds[1][0]) / 2;
                            const y = (bounds[0][1] + bounds[1][1]) / 2;
                            
                            const [tooltipX, tooltipY] = projection.invert([x, y]);
                            const [screenX, screenY] = projection([tooltipX, tooltipY]);
                            
                            tooltip
                                .style('display', 'block')
                                .style('left', `${screenX}px`)
                                .style('top', `${screenY - 20}px`);

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
