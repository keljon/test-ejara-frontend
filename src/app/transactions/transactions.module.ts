import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

import { DataTablesModule } from 'angular-datatables';


const transactionRoutes: Routes = [
  {path : 'transactions', component: TransactionListComponent},
  {path : 'transaction/:id', component: TransactionDetailComponent}
];

@NgModule({
  declarations: [
    TransactionDetailComponent,
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(transactionRoutes),
    DataTablesModule
  ]
})
export class TransactionsModule { }
