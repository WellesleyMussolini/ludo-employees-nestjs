import { Module } from '@nestjs/common';
import { WorkScheduleController } from '../controller/work-schedule.controller';
import { WorkScheduleService } from '../services/work-schedule.service';
import { WorkScheduleProviders } from '../provider/work-schedule.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkScheduleController],
  providers: [
    WorkScheduleService,
    ...WorkScheduleProviders
  ],
})

export class WorkScheduleModule { }