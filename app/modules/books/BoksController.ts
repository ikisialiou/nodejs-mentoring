import { Router, METHODS } from '../../services/router';
import { Request, Response, NextFunction } from 'express';

export class BooksController {
  @Router(METHODS.GET, '/books')
  getBooks(req: Request, res: Response, next: NextFunction): void {
    res.send('Aue');
  }
}
