"use strict";
exports.__esModule = true;
var WeatherModel = /** @class */ (function () {
    function WeatherModel(modelName, modelFrames) {
        this.modelName = modelName;
        WeatherModel.modelHours = modelFrames;
    }
    WeatherModel.prototype.getModelName = function () {
        return this.modelName;
    };
    WeatherModel.prototype.getHours = function () {
        return JSON.stringify(WeatherModel.modelHours);
    };
    return WeatherModel;
}());
exports.WeatherModel = WeatherModel;
