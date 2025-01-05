const countryData = {
    "Afghanistan": {
        "2015": "48",
        "2016": "96",
        "2017": "84",
        "2018": "46",
        "2019": "64",
        "2020": "196",
        "2023": "-"
    },
    "Central African Republic": {
        "2015": "-",
        "2016": "-",
        "2017": "-",
        "2018": "-",
        "2019": "-",
        "2020": "584",
        "2023": "-"
    },
    "Colombia": {
        "2015": "289",
        "2016": "230",
        "2017": "169",
        "2018": "293",
        "2019": "107",
        "2020": "116",
        "2023": "-"
    },
    "Democratic Republic of the Congo": {
        "2015": "-",
        "2016": "-",
        "2017": "1049",
        "2018": "-",
        "2019": "601",
        "2020": "1164",
        "2023": "-"
    },
    "D.R of Congo": {
        "2015": "-",
        "2016": "-",
        "2017": "1049",
        "2018": "-",
        "2019": "601",
        "2020": "1164",
        "2023": "-"
    },
    "Mali": {
        "2015": "-",
        "2016": "-",
        "2017": "-",
        "2018": "-",
        "2019": "-",
        "2020": "186",
        "2023": "-"
    },
    "Mozambique": {
        "2015": "-",
        "2016": "-",
        "2017": "-",
        "2018": "-",
        "2019": "-",
        "2020": "-",
        "2023": "40"
    },
    "Myanmar": {
        "2015": "-",
        "2016": "-",
        "2017": "38",
        "2018": "7",
        "2019": "50",
        "2020": "790",
        "2023": "-"
    },
    "Nigeria": {
        "total": "685"
    },
    "Philippines": {
        "total": "12"
    },
    "Somalia": {
        "2015": "903",
        "2016": "1915",
        "2017": "2127",
        "2018": "2300",
        "2019": "1495",
        "2020": "1716",
        "2023": "-"
    },
    "South Sudan": {
        "2015": "2596",
        "2016": "1022",
        "2017": "1221",
        "2018": "453",
        "2019": "161",
        "2020": "62",
        "2023": "-"
    },
    "Syria": {
        "2015": "362",
        "2016": "851",
        "2017": "961",
        "2018": "806",
        "2019": "820",
        "2020": "813",
        "2023": "-"
    },
    "Ukraine": {
        "2015": "-",
        "2016": "-",
        "2017": "-",
        "2018": "-",
        "2019": "-",
        "2020": "-",
        "2023": "2"
    },
    "Yemen": {
        "2015": "762",
        "2016": "517",
        "2017": "842",
        "2018": "370",
        "2019": "686",
        "2020": "163",
        "2023": "-"
    }
};

function calculateYearlyAndCumulativeTotal(countryData, targetYear) {
    try {
        let yearTotal = countryData[targetYear] !== "-" ? parseInt(countryData[targetYear]) || 0 : 0;
        let cumulativeTotal = 0;
        const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2023"];
        
        for (const year of years) {
            if (parseInt(year) <= parseInt(targetYear) && countryData[year] && countryData[year] !== "-") {
                cumulativeTotal += parseInt(countryData[year]);
            }
        }
        
        return {
            yearTotal: yearTotal,
            cumulativeTotal: cumulativeTotal
        };
    } catch (error) {
        reportError(error);
        return {
            yearTotal: 0,
            cumulativeTotal: 0
        };
    }
}

function getCountryStatistics(countryName, year) {
    try {
        // Handle both names for Democratic Republic of the Congo
        if (countryName === "Democratic Republic of the Congo" || countryName === "D.R of Congo") {
            const data = countryData["Democratic Republic of the Congo"] || countryData["D.R of Congo"];
            if (data) {
                const stats = calculateYearlyAndCumulativeTotal(data, year);
                return {
                    yearTotal: stats.yearTotal.toString(),
                    cumulativeTotal: stats.cumulativeTotal.toString(),
                    year: year
                };
            }
        }

        if (countryData[countryName]) {
            if (countryData[countryName].total) {
                return {
                    total: countryData[countryName].total,
                    isTotal: true
                };
            } else {
                const stats = calculateYearlyAndCumulativeTotal(countryData[countryName], year);
                if (stats.yearTotal > 0 || stats.cumulativeTotal > 0) {
                    return {
                        yearTotal: stats.yearTotal.toString(),
                        cumulativeTotal: stats.cumulativeTotal.toString(),
                        year: year
                    };
                }
            }
        }
        return null;
    } catch (error) {
        reportError(error);
        return null;
    }
}
