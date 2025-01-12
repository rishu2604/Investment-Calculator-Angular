import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CurrencyPipe], // In-built pipe for transforming currency output
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() result?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  // result = input<
  //   {
  //     year: number;
  //     interest: number;
  //     valueEndOfYear: number;
  //     annualInvestment: number;
  //     totalInterest: number;
  //     totalAmountInvested: number;
  //   }[]
  // >();

  // private investmentService = inject(InvestmentService);
  constructor(private readonly investmentService: InvestmentService) {}

  // get result() {
  //   return this.investmentService.resultData;
  // }

  // result = computed(() => this.investmentService.resultData());

  result = this.investmentService.resultData.asReadonly();
}
