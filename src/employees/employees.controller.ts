import { Controller, Get, Post, Put, Delete, Req, Res, Param, HttpStatus } from '@nestjs/common';
import { Request, Response } from "express";
import { EmployeesService } from './employees.service';
import { Employee } from './employee.interface';

@Controller("employees")
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    async find_all(@Res() res: Response) {
        const employees = await this.employeesService.findAll();
        return res.status(HttpStatus.OK).json(employees);
    }

    @Get(":id")
    async get_by_id(@Param("id") id: string, @Res() res: Response) {
        const employee = await this.employeesService.findById(id);
        return res.status(HttpStatus.OK).json(employee);
    }

    @Post()
    async create(@Req() req: Request, @Res() res: Response) {
        const employee: Employee = req.body;
        const createdEmployee = await this.employeesService.create(employee);
        return res.status(HttpStatus.CREATED).json(createdEmployee);
    }
    
    @Put(":id")
    async update(@Param("id") id: string, @Req() req: Request, @Res() res: Response) {
        const employee: Employee = req.body;
        const updatedEmployee = await this.employeesService.updateById(id, employee);
        return res.status(HttpStatus.OK).json(updatedEmployee);
    }
    
    @Delete(":id")
    async remove(@Param("id") id: string, @Res() res: Response) {
        await this.employeesService.deleteById(id);
        return res.status(HttpStatus.OK).json("employee deleted!");
    }
}
