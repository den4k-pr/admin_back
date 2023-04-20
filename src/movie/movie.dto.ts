import { IsNumber, IsString } from 'class-validator'

export class MovieDto {
	@IsString()
	name: string

	@IsNumber()
	fess: number

	@IsString()
	poster: string
}
