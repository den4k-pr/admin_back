import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ReviewController } from './review.controller'
import { ReviewModel } from './review.model'
import { ReviewService } from './review.service'

@Module({
	imports: [SequelizeModule.forFeature([ReviewModel])],
	controllers: [ReviewController],
	providers: [ReviewService]
})
export class ReviewModule {}
