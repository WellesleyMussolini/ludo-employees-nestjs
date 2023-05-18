import { Module } from '@nestjs/common';
import { EmployeesController } from '../controller/employees.controller';
import { EmployeesService } from '../services/employees.service';
import { EmployeesProviders } from '../provider/employees.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    ...EmployeesProviders
  ],
})

export class EmployeesModule { }