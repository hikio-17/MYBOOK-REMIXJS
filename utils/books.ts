import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type Book = {
   title: string;
   author: string;
}

export function getBooks() {
   return prisma.book.findMany();
}

export function getBookById(id: string) {
   return prisma.book.findUnique({
      where: { id: parseInt(id) },
   });
}

export function createBook(book: Book) {
   return prisma.book.create({ data: book });
}

export function updateBook(id: string, book: Book) {
   return prisma.book.update({
      where: { id: parseInt(id) },
      data: book,
   });
}

export function deleteBook(id: string) {
   return prisma.book.delete({
      where: { id: parseInt(id) },
   });
}

