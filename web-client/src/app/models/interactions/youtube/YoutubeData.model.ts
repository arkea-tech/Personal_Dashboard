import { SecondStep } from "./SecondStep.model";

export class YoutubeData {

    first_step: string;
    second_step: SecondStep;

    constructor(first_step: string, second_step: SecondStep)
    {
        this.first_step = first_step;
        this.second_step = second_step;
    }
}
