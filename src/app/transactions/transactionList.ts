import {Transactions} from './transaction-schema';

export const transactionList: Transactions[] = [
	{
		key : "1",
		transaction_type : "buy",
		transaction_status : "pending",
		emitter: "Vianney Keljon",
		receiver: "Maurice User",
		amount_raw: 1100,
		amount_net: 1000,
		fiat_currency: "XAF",
		crypto_currency: "USD",
		crypto_amount: 1.9,
		date_creation : new Date()
	},
	{
		key : "2",
		transaction_type : "sell",
		transaction_status : "pending",
		emitter: "Vianney Keljon",
		receiver: "Maurice User",
		amount_raw: 1100,
		amount_net: 1000,
		fiat_currency: "XAF",
		crypto_currency: "USD",
		crypto_amount: 1.1,
		date_creation : new Date()
	},
	{
		key : "3",
		transaction_type : "Buy",
		transaction_status : "Confirmed",
		emitter: "Maurice User",
		receiver: "Vianney Keljon",
		amount_raw: 1100,
		amount_net: 1000,
		fiat_currency: "XAF",
		crypto_currency: "USD",
		crypto_amount: 1.1,
		date_creation : new Date()
	},
	{
		key : "4",
		transaction_type : "Buy",
		transaction_status : "rejected",
		emitter: "Maurice User",
		receiver: "Vianney Keljon",
		amount_raw: 1100,
		amount_net: 1000,
		fiat_currency: "XAF",
		crypto_currency: "USD",
		crypto_amount: 1.1,
		date_creation : new Date()
	}
];