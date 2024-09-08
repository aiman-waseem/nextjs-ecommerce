
import {
    pgTable,
    serial,
    integer,
    uuid,
    text,
    varchar,
    timestamp,
    uniqueIndex,
    
  } from 'drizzle-orm/pg-core'
  import { InferInsertModel } from 'drizzle-orm'
  import { InferSelectModel } from 'drizzle-orm'

  import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'


// CREATE TABLE cartTable(
//   id SERIAL PRIMARY KEY,
//   user_id varchar(255),
//   productId varchar(255),
  
//   productName varchar(255),
//   productCategory VARCHAR(255),
//    price INTEGER,
//    qty INTEGER,
//    productImage VARCHAR(255)
//   )

// CREATE TABLE cart(
//   id SERIAL PRIMARY KEY,
//   user_id varchar(255),
//   pid varchar(255),
  
//   pname varchar(255),
//   pcategory VARCHAR(255),
//    price INTEGER,
//    qty INTEGER,
//    pimage VARCHAR(255)
//   )

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar('user_id', { length: 255 }),
  // productId: uuid("productId"),
  productId: varchar('pid',{length:255}),
  productName: varchar('pname', { length: 255 }),
  productCategory: varchar('pcategory', { length: 255 }),
  price: integer('price'),
  productImage: varchar('pimage', { length: 255 }),
  qty: integer('qty')
});

// //types for selecting rows
export type getCart = InferSelectModel<typeof cartTable>

// //type for inserting rows
export type addCart = InferInsertModel<typeof cartTable >

// //creating connection (passing sql from vercel/postgres to drizzle orm)
export const db = drizzle(sql)



