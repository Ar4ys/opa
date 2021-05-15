import Sq, {
  Optional
} from 'sequelize'
import type { ModelFactory, Models, ModelStatic } from './index.js'

const { Model, DataTypes } = Sq

export interface UserAttributes {
  id: number
  googleId: string
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

  export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  id!: number
  googleId!: string

  readonly createdAt!: Date
  readonly updatedAt!: Date

  static async get(id: number): Promise<User | null> {
    return await this.findByPk(id)
  }

  static async getByGoogleId(googleId: string): Promise<User | null> {
    return await this.findOne({ where: { googleId }})
  }

  static async createFiltered(attributes: UserCreationAttributes) {
    const { googleId } = attributes
    return await this.create({ googleId })
  }

  static async updateById(
    id: number | string,
    fields: Partial<UserAttributes>
  ): Promise<User | undefined> {
    const user = (typeof id === 'number')
      ? await this.get(id)
      : await this.getByGoogleId(id)
    return user?.update(fields)
  }

  static async changeGoogleId(
    id: number | string,
    { googleId }: Pick<UserAttributes, 'googleId'>
  ): Promise<User | undefined> {
    return await this.updateById(id, { googleId })
  }

  static async delete(id: number): Promise<boolean> {
    const user = await this.get(id)
    return user ? !user.destroy() : false
  }
}

export const UserFactory: ModelFactory<User> = (sequelize) =>
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, { sequelize }) as unknown as ModelStatic<User>
// Need to do this convertion ^ because sequelize type is incorrect.
// Model.init() type returns Model instance, while actually it returns constructor
