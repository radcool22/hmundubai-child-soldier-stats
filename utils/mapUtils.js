function getCountryData(countryFeature) {
    try {
        return {
            name: countryFeature.properties.name,
            // Add more country data processing as needed
        };
    } catch (error) {
        reportError(error);
        return null;
    }
}
