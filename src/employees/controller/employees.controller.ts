import { Controller, Get, Post, Put, Delete, Req, Res, Param, HttpStatus } from '@nestjs/common';
import { Request, Response } from "express";
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../interface/employee.interface';

@Controller("employees")
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    
    @Get()
    async find_all(@Res() response: Response) {
        const employees = await this.employeesService.findAll();
        return response.status(HttpStatus.OK).json(employees);
    }

    @Get(":id")
    async get_by_id(@Param("id") id: string, @Res() response: Response) {
        const employee = await this.employeesService.findById(id);
        return response.status(HttpStatus.OK).json(employee);
    }

    @Post()
    async create(@Req() request: Request, @Res() response: Response) {
        const employee: Employee = request.body;
        const createdEmployee = await this.employeesService.create(employee);
        return response.status(HttpStatus.CREATED).json(createdEmployee);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Req() request: Request, @Res() response: Response) {
        const employee: Employee = request.body;
        const updatedEmployee = await this.employeesService.update(id, employee);
        return response.status(HttpStatus.OK).json(updatedEmployee);
    }

    @Delete(":id")
    async remove(@Param("id") id: string, @Res() response: Response) {
        await this.employeesService.delete(id);
        return response.status(HttpStatus.OK).send("Employee fired!");
    }
}