import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'oders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sku: string;

  @Column({ unique: true })
  value: number;

  @Column({ unique: true })
  buyer: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}
