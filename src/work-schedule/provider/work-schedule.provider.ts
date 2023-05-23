import { Connection } from 'mongoose';
import { WorkScheduleSchema } from '../models/work-schedule.model';

export const WorkScheduleProviders = [
    {
        provide: 'WORK_SCHEDULE_MODEL',
        useFactory: (connection: Connection) => connection.model("WORK_SCHEDULE", WorkScheduleSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];