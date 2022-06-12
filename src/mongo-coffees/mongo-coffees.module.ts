import { Module } from '@nestjs/common';
import { MongoCoffeesService } from 'src/mongo-coffees/mongo-coffees.service';
import { MongoCoffeesController } from 'src/mongo-coffees/mongo-coffees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MongoCoffee,
  MongoCoffeeSchema,
} from 'src/mongo-coffees/entities/coffee.entity';
import {
  MongoEvent,
  MongoEventSchema,
} from 'src/events/entities/mongo-event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MongoCoffee.name,
        schema: MongoCoffeeSchema,
      },
      {
        name: MongoEvent.name,
        schema: MongoEventSchema,
      },
    ]),
  ],
  providers: [MongoCoffeesService],
  controllers: [MongoCoffeesController],
})
export class MongoCoffeesModule {}
