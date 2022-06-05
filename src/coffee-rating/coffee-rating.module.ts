import { Module } from '@nestjs/common';
import { CoffeeRatingService } from 'src/coffee-rating/coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'postgres',
      host: 'localhost',
      password: 'password',
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
