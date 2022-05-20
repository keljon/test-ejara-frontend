import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import {Transactions} from './transaction-schema';
import {HttpResponse} from './http-response-schema';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactionsList(): Observable<Transactions[]>{
    const headers = {
      Authorization : 'Bearer token'
    }
    return this.http.get<Transactions[]>('https://test-ejara-backend-new.herokuapp.com/api/transactions', {headers}).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.log(error);
        return of([])
      })
    )
  }

  getTransactionsBycriteria(): Observable<Transactions[]>{
    const headers = {
      Authorization : 'Bearer token'
    }
    const body = {
        status : $("#transactionStatus").val(),
        crypto_currency : $("#transactioncc").val(),
        dateTo : $("#dateTo").val(),
        dateAt : $("#dateAt").val()
    };
    return this.http.post<Transactions[]>('https://test-ejara-backend-new.herokuapp.com/api/transactions/criterias', body, {headers}).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.log(error);
        return of([])
      })
    )
  }

  getTransaction(transactionKey: string): Observable<object>{
    const headers = {
      Authorization : 'Bearer token'
    }
    return this.http.get<any>('https://test-ejara-backend-new.herokuapp.com/api/transactions/'+transactionKey, {headers}).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.log(error);
        return of({})
      })
    )
  }

}
