import { WeatherModel } from  "./classes/WeatherModel";

let wModel = new WeatherModel("GFS", [
    {    frameHour : 3, validTime : "Fri 11/22 09Z", maxTemp : 2, minTemp : 1,
        "850MbTemps" : 3, "500MbTemps" : -17, thickness: 549
    },
    {    frameHour : 3, validTime : "Fri 11/22 09Z", maxTemp : 2, minTemp : 1,
        "850MbTemps" : 3, "500MbTemps" : -17, thickness: 549
    },
    {    frameHour : 3, validTime : "Fri 11/22 09Z", maxTemp : 2, minTemp : 1,
        "850MbTemps" : 3, "500MbTemps" : -17, thickness: 549
    },
    {    frameHour : 3, validTime : "Fri 11/22 09Z", maxTemp : 2, minTemp : 1,
        "850MbTemps" : 3, "500MbTemps" : -17, thickness: 549
    }
]);

console.log( wModel.getHours() );
