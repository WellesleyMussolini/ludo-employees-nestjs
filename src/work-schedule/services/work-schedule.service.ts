import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { WorkScheduleInterface } from '../interface/work-schedule.interface';

@Injectable()
export class WorkScheduleService {
    constructor(@Inject('WORK_SCHEDULE_MODEL') private workSchedule: Model<WorkScheduleInterface>) { }

    async findAll(): Promise<WorkScheduleInterface[]> {
        return this.workSchedule.find().exec();
    }

    async findById(id: string): Promise<WorkScheduleInterface> {
        return this.workSchedule.findById(id).exec();
    }

    async create(workSchedule: WorkScheduleInterface): Promise<WorkScheduleInterface> {
        const createdEmployee = new this.workSchedule(workSchedule);
        return createdEmployee.save();
    }

    async update(id: string, workSchedule: WorkScheduleInterface): Promise<WorkScheduleInterface> {
        return this.workSchedule.findByIdAndUpdate(id, workSchedule, { new: true }).exec();
    }

    async delete(id: string): Promise<WorkScheduleInterface> {
        return this.workSchedule.findByIdAndRemove(id).exec();
    }
}