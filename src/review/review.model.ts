import {
	BelongsTo,
	Column,
	ForeignKey,
	Model,
	Table
} from 'sequelize-typescript'
import { UserModel } from '../auth/user.model'
import { MovieModel } from '../movie/movie.model'

@Table({ tableName: 'Review', deletedAt: false, version: false })
export class ReviewModel extends Model<ReviewModel> {
	@Column({ defaultValue: '' })
	description: string

	@ForeignKey(() => UserModel)
	@Column
	userId: number

	@BelongsTo(() => UserModel)
	user: UserModel

	@ForeignKey(() => MovieModel)
	@Column
	moviedId: number

	@BelongsTo(() => MovieModel)
	movie: MovieModel
}
