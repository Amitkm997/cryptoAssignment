interface Transaction {
    amount: number;
    date: Date;
    description: string;
  }
  
  class BankAccount {
    name: string;
    gender: string;
    dob: Date;
    email: string;
    mobile: string;
    address: string;
    balance: number;
    adharNo: string;
    panNo: string;
    transactions: Transaction[];
  
    constructor(
      name: string,
      gender: string,
      dob: Date,
      email: string,
      mobile: string,
      address: string,
      initialBalance: number,
      adharNo: string,
      panNo: string
    ) {
      this.name = name;
      this.gender = gender;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.address = address;
      this.balance = initialBalance;
      this.adharNo = adharNo;
      this.panNo = panNo;
      this.transactions = [];
    }
  
    openAccount(): void {
      // Perform any additional logic required to open the account
      console.log(`Account opened for ${this.name}`);
    }
  
    updateKYC(name: string, dob: Date, email: string, mobile: string, adharNo: string, panNo: string): void {
      this.name = name;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.adharNo = adharNo;
      this.panNo = panNo;
      console.log(`KYC updated for ${this.name}`);
    }
  
    depositMoney(amount: number): void {
      this.balance += amount;
      const transaction: Transaction = {
        amount: amount,
        date: new Date(),
        description: 'Deposit'
      };
      this.transactions.push(transaction);
      console.log(`${amount} deposited to ${this.name}'s account`);
    }
  
    withdrawMoney(amount: number): void {
      if (amount > this.balance) {
        console.log(`Insufficient balance for ${this.name}`);
        return;
      }
      this.balance -= amount;
      const transaction: Transaction = {
        amount: -amount,
        date: new Date(),
        description: 'Withdrawal'
      };
      this.transactions.push(transaction);
      console.log(`${amount} withdrawn from ${this.name}'s account`);
    }
  
    transferMoney(toName: string, amount: number): void {
      if (amount > this.balance) {
        console.log(`Insufficient balance for ${this.name}`);
        return;
      }
      this.balance -= amount;
      const transaction: Transaction = {
        amount: -amount,
        date: new Date(),
        description: `Transfer to ${toName}`
      };
      this.transactions.push(transaction);
      console.log(`${amount} transferred to ${toName}'s account`);
    }
  
    receiveMoney(fromName: string, amount: number): void {
      this.balance += amount;
      const transaction: Transaction = {
        amount: amount,
        date: new Date(),
        description: `Received from ${fromName}`
      };
      this.transactions.push(transaction);
      console.log(`${amount} received from ${fromName}'s account`);
    }

    // printStatement() {
    //   if (this.accountDetails === null) {
    //     throw  new Error(console.log(`Account details for ${this.accountDetails.name}: `;
    //     console.log(`Gender: ${this.accountDetails.gender}`);
    //     console.log(`Date of Birth: ${this.accountDetails.dob}`);
    //     console.log(`Email: ${this.accountDetails.email}`);
    //     console.log(`Mobile: ${this.accountDetails.mobile}`);
    //     console.log(`Address: ${this.accountDetails.address}`);
    //     console.log(`Adhar No.: ${this.accountDetails.adharNo}`);
    //     console.log(`PAN No.: ${this.accountDetails.panNo}`);
    //     console.log(`Balance: ${this.balance}\n`);
        
    //     console.log("Transaction history:");
    //     console.log("--------------------"));
    //   }
        
    //     for (const entry of this.ledger) {
    //       console.log(
    //         `${entry.date.toDateString()} - ${entry.type}: ${entry.amount}, Balance: ${entry.balance}`
    //       );
    //       }}

    // closeAccount() {
    //   if (this.accountDetails === null) {
    //   throw new Error("Account is not yet opened.");
    //   }
    //   this.accountDetails = null;
    //   this.balance = 0;
    //   this.ledger = [];
      
    //   console.log("Account has been closed.");
    // }
  }

  

const account1 = new BankAccount('John Doe', 'Male', new Date('1990-01-01'), 'john.doe@example.com', '9876543210', '123 Main St, Anytown', 1000, '123456789012', 'ABCDE1234F');
account1.openAccount();
account1.depositMoney(500);
// account1.withdraw;
