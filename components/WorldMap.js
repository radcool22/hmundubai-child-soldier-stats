function WorldMap({ onCountryClick }) {
    const mapRef = React.useRef(null);

    React.useEffect(() => {
        try {
            const width = window.innerWidth;
            const height = window.innerHeight - 140; // Increased spacing for header and slider

            const svg = d3.select(mapRef.current)
                .attr('width', width)
                .attr('height', height);

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
                            return `country ${countryData[countryName] ? 'has-data' : ''}`;
                        })
                        .attr('d', path)
                        .on('click', (event, d) => {
                            onCountryClick(d);
                        });
                });
        } catch (error) {
            reportError(error);
        }
    }, []);

    return (
        <div data-name="map-container" className="map-container mt-4">
            <svg data-name="map" ref={mapRef}></svg>
        </div>
    );
}
