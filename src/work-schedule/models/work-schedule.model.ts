import { Schema, Document } from 'mongoose';

interface Employee {
  name: string;
  date: string;
}

interface WeekDate {
  started_at: string;
  end_at: string;
}

interface WorkSchedule extends Document {
  week_date: WeekDate;
  monday: Employee[];
  tuesday: Employee[];
  wednesday: Employee[];
  thursday: Employee[];
  friday: Employee[];
  saturday: Employee[];
  sunday: Employee[];
}

export const WorkScheduleSchema = new Schema<WorkSchedule>({
  week_date: {
    started_at: { type: String },
    end_at: { type: String },
  },
  monday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
  tuesday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
  wednesday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
  thursday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
  friday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
  saturday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
  sunday: [
    {
      name: { type: String },
      date: { type: String },
      _id: false,
    },
  ],
});