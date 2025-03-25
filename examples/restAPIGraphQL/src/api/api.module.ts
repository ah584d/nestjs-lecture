import { Module, HttpModule } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './services/api.service';
import { ProxyService } from 'src/services/proxy/proxy.service';
import { DbService } from './services/db/db.service';

@Module({
	imports: [HttpModule],
	controllers: [ApiController],
	providers: [ApiService, ProxyService, DbService],
  })
export class ApiModule {}
