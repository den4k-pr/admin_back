import {
	Controller,
	HttpCode,
	Param,
	Patch,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ViewsService } from './views.service'

@Controller('views')
export class ViewsController {
	constructor(private readonly viewsService: ViewsService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Patch('update/:moviedId')
	async updateViews(@Param('moviedId') moviedId: string) {
		return this.viewsService.updateViews(+moviedId)
	}
}
