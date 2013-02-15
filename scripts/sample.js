$(document).ready(function () {
     var wm4 = WorldMap({
        id: 'map4',
        selector: '#svgWorldMap4',
        scale: 0.2,
        margin: '0',
        top: '50',
        height: '300',
        width: '550',
        inactiveCountryFill: '#686',
        inactiveCountryStroke: '#fff',
        inactiveCountryStrokeWidth: 6,
        showCountryBoxOnMouserEnter: false,
        drawNorthAmerica: true,
        drawCentralAmerica: true,
        drawSouthAmerica: true,
        drawEurope: true,
        drawAfrica: true,
        drawAsia: true,
        drawOceania: true,
        drawAntarctic: true,
        onCountryMouseEnter: function (config) {
            var id = config.countryId;
        },
        onCountryMouseMove: function (config) {
            var id = config.countryId;
        },
        onCountryMouseOut: function (config) {
            var id = config.countryId;
        },
        onCountryMouseClick: function (countryId) {
            var id = countryId;
        }
    });
});
