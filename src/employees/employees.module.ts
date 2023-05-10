import { Module } from '@nestjs/common';
import { PetsController } from './employees.controller';

@Module({
  imports: [],
  controllers: [PetsController],
  providers: [],
})
export class PetsModule {}
