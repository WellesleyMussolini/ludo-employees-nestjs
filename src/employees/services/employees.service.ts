import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Employee } from '../interface/employee.interface';

@Injectable()
export class EmployeesService {
    constructor(@Inject('EMPLOYEE_MODEL') private employee: Model<Employee>) { }

    async findAll(): Promise<Employee[]> {
        return this.employee.find().exec();
    }

    async findById(id: string): Promise<Employee> {
        return this.employee.findById(id).exec();
    }

    async create(employee: Employee): Promise<Employee> {
        const createdEmployee = new this.employee(employee);
        return createdEmployee.save();
    }

    async update(id: string, employee: Employee): Promise<Employee> {
        return this.employee.findByIdAndUpdate(id, employee, { new: true }).exec();
    }

    async delete(id: string): Promise<Employee> {
        return this.employee.findByIdAndRemove(id).exec();
    }
}