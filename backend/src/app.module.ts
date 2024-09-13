import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

interface ITest {
  hola: string;
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  test: ITest = {
    hola: 'hola',
  };
}
