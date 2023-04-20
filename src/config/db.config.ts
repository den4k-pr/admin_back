import { ConfigService } from '@nestjs/config'
import { SequelizeModuleOptions } from '@nestjs/sequelize'

export const getSequelizeConfig = async (
	configService: ConfigService
): Promise<SequelizeModuleOptions> => {
	return {
		dialect: 'postgres',
		host: 'localhost',
		port: 5432,
		database: 'admin',
		username: 'postgres',
		password: 'Naruto228',
		autoLoadModels: true,
		synchronize: true,
		logging: false
	}
}
