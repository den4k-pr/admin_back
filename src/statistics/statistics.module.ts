import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { MovieModel } from '../movie/movie.model'
import { ReviewModel } from '../review/review.model'
import { ViewsModel } from '../views/views.model'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'

@Module({
	imports: [SequelizeModule.forFeature([ReviewModel, MovieModel, ViewsModel])],
	controllers: [StatisticsController],
	providers: [StatisticsService]
})
export class StatisticsModule {}
