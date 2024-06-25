export class SequentialCreationDto {
    department: string = '';
    type: string =  '';
    sequential_date: string = '';
    fromEmployeeId: number = 0;
    toEmployeeId: number = 0;
    ccEmployeeIds: number[] = [];
    subject: string = '';
}