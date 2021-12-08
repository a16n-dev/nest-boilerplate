import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { DatedEntity } from 'src/datedEntity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class User extends DatedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  constructor(data: Partial<User> = {}) {
    super();
    Object.assign(this, data);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    if (!/^\$2a\$\d+\$/.test(this.password)) {
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  async checkPassword(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.password);
  }
}
