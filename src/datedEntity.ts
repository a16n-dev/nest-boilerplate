import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class DatedEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
