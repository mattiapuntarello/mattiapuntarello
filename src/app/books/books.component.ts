import { Component, OnInit } from '@angular/core';
import {Book} from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: 'clean code',
      author: 'mattia puntarello',
      image: 'https://pngimg.com/uploads/book/book_PNG2105.png',
      amount: 700,
    },
    {
      name: 'how to fuck a mother',
      author: 'mattia puntarello',
      image: 'https://pngimg.com/uploads/book/book_PNG2105.png',
      amount: 800,
    },
    {
      name: 'how to fuck a mother 2 - your sister is included',
      author: 'mattia puntarello',
      image: 'https://pngimg.com/uploads/book/book_PNG2105.png',
      amount: 800,
    },
    {
      name: 'the art of programming in javascript',
      author: 'mattia puntarello',
      image: 'https://pngimg.com/uploads/book/book_PNG2105.png',
      amount: 200,
    },
  ]

  cart: Book[] = [];

  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(book: Book) {
    console.log(book);
  }

}
