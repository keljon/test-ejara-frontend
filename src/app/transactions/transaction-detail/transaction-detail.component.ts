import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Transactions} from '../transaction-schema';
import {TransactionService} from '../transaction.service';


@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['../../app.component.css']
})


export class TransactionDetailComponent implements OnInit {
  transactionSelected: any;

  constructor(private route: ActivatedRoute, private router: Router, private transactionsService: TransactionService) { }

  ngOnInit(): void {
    const transactionKey: string|null = this.route.snapshot.paramMap.get('id');
    if(transactionKey){
      this.transactionsService.getTransaction(transactionKey).subscribe((transaction)  =>{ 
        this.transactionSelected = transaction;
        console.log(transaction);
      });
    }
    
  }

  loadTransactionsPage(){
    this.router.navigate(['/transactions']);
  }


}
