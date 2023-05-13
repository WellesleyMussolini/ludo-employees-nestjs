import { Connection } from 'mongoose';
import { EmployeeSchema } from './models/employees.model';

export const EmployeesProviders = [
    {
        provide: 'EMPLOYEE_MODEL',
        useFactory: (connection: Connection) => connection.model("Employees", EmployeeSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];

// REMOVER ESSE ARQUIVO E PASSAR A CONEXÃO PARA O APP.MODULE