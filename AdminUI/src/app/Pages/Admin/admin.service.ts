import { Injectable } from '@angular/core';
import { DataProviderService } from '../../services/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private dataService:DataProviderService) { }

  getCardTemplates(page,sortField,direction){
  return this.dataService.getData(`CardTemplate`);
}



saveCardTemplate(cardTemplate){
  return this.dataService.postData(`CardTemplate`,cardTemplate);
}

public deleteCardTemplate(cardTemplate){
  return this.dataService.getData(`CardTemplate/Delete/${cardTemplate.id}`)
}

}