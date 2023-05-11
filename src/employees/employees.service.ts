import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeesService {
    constructor(
        @Inject('EMPLOYEE_MODEL')
        private employeeModel: Model<Employee>,
    ) { }

    async create(employee: Employee): Promise<Employee> {
        const createdEmployee = new this.employeeModel(employee);
        return createdEmployee.save();
    }

    async findAll(): Promise<Employee[]> {
        return this.employeeModel.find().exec();
    }

    async findById(id: string): Promise<Employee> {
        return this.employeeModel.findById(id).exec();
    }

    async updateById(id: string, employee: Employee): Promise<Employee> {
        return this.employeeModel.findByIdAndUpdate(id, employee, { new: true }).exec();
    }

    async deleteById(id: string): Promise<Employee> {
        return this.employeeModel.findByIdAndRemove(id).exec();
    }
}