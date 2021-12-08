import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';

import { User } from '../user/user.entity';
import { DatedEntity } from 'src/datedEntity';

@Entity()
export class Todo extends DatedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  done: boolean;

  @ManyToOne(() => User, { nullable: false, onDelete: 'RESTRICT' })
  @Exclude()
  owner: User | number;
}
