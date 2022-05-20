import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Transactions} from '../transaction-schema';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['../../app.component.css']
})

export class TransactionListComponent implements OnInit {

  Listtransaction: Transactions[];
  totalRawAmount: number=0;
  totalNetAmount: number=0;
  totalCryptoAmount: number=0;
  dataTableOccurence: number=0;

  constructor(private transactionsService: TransactionService) { }

  ngOnInit(): void {
  
    this.transactionsService.getTransactionsList().subscribe((transactions)  =>{ 
      let transacs: Transactions[]  = transactions;
      
      transacs.sort(function(a: Transactions, b: Transactions){
        return ((a.date_creation) > (b.date_creation)) ? 1 : -1;
      });

      transacs.forEach((transac) => {
        this.totalRawAmount+= Number(transac.amount_raw);
        this.totalNetAmount+= Number(transac.amount_net);
        this.totalCryptoAmount+= Number(transac.crypto_amount);

      });

      this.Listtransaction = transacs;

      setTimeout(()=>{   
        $('#datatable').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25]
        } );
      }, 1);
    });

    
  }

  searchTransaction(): void {
    this.transactionsService.getTransactionsBycriteria().subscribe((transactions)  =>{ 
      let transacs: Transactions[]  = transactions;

      $('#datatable').DataTable().destroy();

      this.totalRawAmount= 0;
      this.totalNetAmount= 0;
      this.totalCryptoAmount= 0;
      
      transacs.sort(function(a: Transactions, b: Transactions){
        return ((a.date_creation) > (b.date_creation)) ? 1 : -1;
      });

      transacs.forEach((transac) => {
        this.totalRawAmount+= Number(transac.amount_raw);
        this.totalNetAmount+= Number(transac.amount_net);
        this.totalCryptoAmount+= Number(transac.crypto_amount);

      });

      this.Listtransaction = transacs;
      setTimeout(()=>{  
        $('#datatable').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25]
        } );
      }, 1);
    });
  }

}