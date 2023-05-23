import { Schema, Document } from 'mongoose';

interface Employee {
  name: string;
}

interface WorkSchedule extends Document {
  monday: Employee[];
  tuesday: Employee[];
  wednesday: Employee[];
  thursday: Employee[];
  friday: Employee[];
  saturday: Employee[];
  sunday: Employee[];
}

export const WorkScheduleSchema = new Schema<WorkSchedule>({
  monday: [{ type: Schema.Types.Mixed }],
  tuesday: [{ type: Schema.Types.Mixed }],
  wednesday: [{ type: Schema.Types.Mixed }],
  thursday: [{ type: Schema.Types.Mixed }],
  friday: [{ type: Schema.Types.Mixed }],
  saturday: [{ type: Schema.Types.Mixed }],
  sunday: [{ type: Schema.Types.Mixed }],
});
