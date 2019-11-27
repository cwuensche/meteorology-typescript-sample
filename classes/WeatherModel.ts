export class WeatherModel {
    protected modelName : string;

    public static modelHours : ModelFrame[];

    public constructor(modelName:string, modelFrames:ModelFrame[]) {
        this.modelName = modelName;
        WeatherModel.modelHours = modelFrames;
    }

    public getModelName() : string {
        return this.modelName;
    }

    public getHours() : string {
        return JSON.stringify(WeatherModel.modelHours );
    }
}

interface ModelFrame {
    frameHour : number;
    validTime : string;
    maxTemp : number;
    minTemp : number;
    thickness : number;
    "850MbTemps" : number;
    "500MbTemps" : number;
}