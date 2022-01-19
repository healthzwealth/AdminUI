import { Component, OnInit } from '@angular/core';
import { SingletonService } from 'src/app/services/singleton.service';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-cardTemplate',
  templateUrl: './cardTemplate.component.html',
  styleUrls: ['./cardTemplate.component.css']
})
export class CardTemplateComponent implements OnInit {

  cardTemplates;
  selectedCardTemplate;
  showDeleteCardTemplateDialog;
  showCardTemplateDialog;
  pagedetails;
  page = 0;
  isSearch = false;
  sortField ="id";
  direction=0;
  baseApi;
  

  constructor( private adminService: AdminService,
    private singletonService:SingletonService) { }
  setCardTemplates(data){
   this.cardTemplates = data;
        // this.pagedetails = {};
        // this.pagedetails.page = data['number'];
        // this.pagedetails.last = data['last'];
        // this.pagedetails.totalPages = data['totalPages'];
        // this.pagedetails.totalElements = data['totalElements'];
        // this.pagedetails.numberOfElements = data['numberOfElements'];
        // this.pagedetails.first = data['first'];
        // this.pagedetails.size = data['size'];
  }
  getCardTemplates(){
    this.adminService.getCardTemplates(this.page,this.sortField,this.direction).subscribe(
      (data) => { 
        this.setCardTemplates(data);
        console.log(this.cardTemplates);
      },
      err => console.error(err),
    );
  }

  setCategory(cardTemplate){
    this.selectedCardTemplate = cardTemplate;
  }

  ngOnInit() {
    this.pagedetails = {};
    this.pagedetails.totalPages=0;
    this.getCardTemplates();
    this.baseApi= this.singletonService.baseAPIUrl;
    
  }

  onSelectPage(pageNumber){
    this.page = pageNumber;
      this.getCardTemplates();

    /*if(this.isSearch==true){
      this.adminService.search(this.searchText,this.page,this.sortField,this.direction);
      console.log("Search");
    }else {
      
      this.adminService.getCategorys(this.page,this.sortField,this.direction);
      console.log("all");
    }*/
    window.scroll(0,0)
  }


  setSortField(field){
    this.sortField=field;

    if(this.direction==1)
      this.direction=0
    else  
      this.direction=1
      this.getCardTemplates();

      console.log("Search Mode " + this.isSearch);  
    /*if(this.isSearch==true){
      this.adminService.search(this.searchText,this.page,this.sortField,this.direction);
      console.log("Search");
    }else {
      this.adminService.getCategorys(this.page,this.sortField,this.direction);
      console.log("all");
    }*/
  }

  addCardTemplate(){
    this.selectedCardTemplate = {};
    

    this.showCardTemplateDialog = true;
  }

  editCardTemplate(cardTemplate){
    this.selectedCardTemplate = cardTemplate;
    
    this.showCardTemplateDialog = true;
  }

  saveCardTemplate(){
    
    this.adminService.saveCardTemplate(this.selectedCardTemplate).subscribe(
      data => { this.selectedCardTemplate = data;
        this.showCardTemplateDialog = false;
        this.getCardTemplates();
      },
      err => console.error(err),
    );
  }

  loadDeleteCardTemplate(cardTemplate){
    this.selectedCardTemplate = cardTemplate;
    this.showDeleteCardTemplateDialog = true;
  }


  deleteCardTemplate(){
    this.adminService.deleteCardTemplate(this.selectedCardTemplate).subscribe(
      data => { 
        this.showDeleteCardTemplateDialog = false;
        this.getCardTemplates();
      },
      err => console.error(err),
    );
  }



}