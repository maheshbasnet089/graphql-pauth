import {Sequelize} from 'sequelize'
import { $db } from '../../config'
import {IModels} from '../types'

const sequelize = new Sequelize($db.connectionString)
const models:IModels = {
    User : require('./User').default(sequelize,Sequelize)
}
export default models