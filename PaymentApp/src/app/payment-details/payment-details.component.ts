import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetail)
  {
    this.service.formData =Object.assign({},selectedRecord);
  }
  onDelete(id:number)
  {
    if(confirm('Are you sure to delete this record?')){
    this.service.deletePaymentDetail(id)
    .subscribe(
      res=>
      {
        this.service.refreshList();
        this.toastr.error("Deleted sucessfully","Payment Detail Register ");
      },
      err =>{console.log(err)}
    )
  }
 }

}