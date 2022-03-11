import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DocumentData } from 'firebase/firestore';
import { ObjectServiceService } from 'src/app/services/object-service.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  category: any;
  items: DocumentData[] = [];
  constructor(private route: ActivatedRoute,
      private database: ObjectServiceService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.category = params.get('name')
    })

    this.database.getDocuments(this.category).subscribe((data)=>{
      this.items = data
    })
    
  }

}
