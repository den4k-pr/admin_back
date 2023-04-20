import { IsNumber, IsString } from 'class-validator'

export class ReviewDto {
	@IsString()
	description: string

	@IsNumber()
	moviedId: number
}
