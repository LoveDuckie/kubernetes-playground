export interface IResult
{
    imageEncoded: string;
    timeCompleted: Date;
    timeStarted: Date;
}

export type IResults = Array<IResult>;