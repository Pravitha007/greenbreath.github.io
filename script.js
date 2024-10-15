function calculateCarbonFootprint() {
    // Get input values
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const naturalGas = parseFloat(document.getElementById('naturalGas').value) || 0;
    const heatingOil = parseFloat(document.getElementById('heatingOil').value) || 0;
    const propane = parseFloat(document.getElementById('propane').value) || 0;
    const miles = parseFloat(document.getElementById('miles').value) || 0;
    const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value) || 0;
    const publicTransit = parseFloat(document.getElementById('publicTransit').value) || 0;
    const airTravel = parseFloat(document.getElementById('airTravel').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;
    const recycledWaste = parseFloat(document.getElementById('recycledWaste').value) || 0;
    const diet = document.getElementById('diet').value;

    // Emission factors
    const electricityFactor = 0.92; // kg CO2e per kWh
    const naturalGasFactor = 5.3; // kg CO2e per therm
    const heatingOilFactor = 10.16; // kg CO2e per gallon
    const propaneFactor = 5.75; // kg CO2e per gallon
    const milesFactor = 0.411; // kg CO2e per mile
    const fuelFactor = 8.89; // kg CO2e per gallon of gasoline
    const publicTransitFactor = 0.1; // kg CO2e per mile
    const airTravelFactor = 0.25; // kg CO2e per mile
    const wasteFactor = 0.25; // kg CO2e per kg
    const recycledWasteFactor = -0.25; // kg CO2e per kg (negative for recycling)
    const dietFactors = {
        average: 2.5, // kg CO2e per day
        vegetarian: 1.7, // kg CO2e per day
        vegan: 1.5 // kg CO2e per day
    };

    // Calculate emissions
    const electricityEmissions = electricity * electricityFactor;
    const naturalGasEmissions = naturalGas * naturalGasFactor;
    const heatingOilEmissions = heatingOil * heatingOilFactor;
    const propaneEmissions = propane * propaneFactor;
    const milesEmissions = miles * milesFactor;
    const fuelEmissions = fuelConsumption * fuelFactor;
    const publicTransitEmissions = publicTransit * publicTransitFactor;
    const airTravelEmissions = airTravel * airTravelFactor;
    const wasteEmissions = waste * wasteFactor;
    const recycledWasteEmissions = recycledWaste * recycledWasteFactor;
    const dietEmissions = dietFactors[diet] * 30; // Assuming input is for a month

    if (electricityEmissions == 0 || naturalGasEmissions == 0 || heatingOilEmissions == 0 || propaneEmissions == 0 || milesEmissions == 0 || fuelEmissions == 0 || publicTransitEmissions == 0 || airTravelEmissions == 0 || wasteEmissions == 0 || recycledWasteEmissions == 0 || dietEmissions) {
        const totalEmissions = electricityEmissions + naturalGasEmissions + heatingOilEmissions + propaneEmissions +
            milesEmissions + fuelEmissions + publicTransitEmissions + airTravelEmissions +
            wasteEmissions + recycledWasteEmissions + dietEmissions;

        // Display result
        document.getElementById('result').textContent = totalEmissions.toFixed(2);
    }
}
