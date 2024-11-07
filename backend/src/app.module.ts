import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BuyModule } from './buy/buy.module';
import { MyHasmterModule } from './my-hasmter/my-hasmter.module';

@Module({
  imports: [UserModule, ProductModule, BuyModule, MyHasmterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
