import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/module/employees.module';
import { WorkScheduleModule } from './work-schedule/module/work-schedule.module';

@Module({
  imports: [EmployeesModule, WorkScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
