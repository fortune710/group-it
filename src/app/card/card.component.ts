import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { ObjectServiceService } from '../services/object-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('object') object:any ;

  foodArray:any = [];
  constructor(private appService:ObjectServiceService, 
    private modalCtrl:ModalController) { 
  }

  async presentModal(): Promise<any> {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        'data': this.object
      }
    })
    return await modal.present();
  }
  
  ngOnInit(): void {
    this.appService.getDocuments('food').subscribe((data)=>{
      this.foodArray = data
      console.log(this.foodArray)
    })
  }

}
