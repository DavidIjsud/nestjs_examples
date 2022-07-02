import { PrimaryGeneratedColumn, Column, Check, Entity } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( { type:'varchar' , length: 255,  }  )
    //@Check('must have at least 3 charactrs', 'value => value.length >= 3' )
    name: string;
    @Column( { type:'text' } )
    description: string;
    @Column( { type:'int' } )
    price: number;
    @Column( { type:'int' } )
    stock: number;
    @Column( { type:'varchar' } )
    image: string;
  }