import { Component } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { AlertController } from "@ionic/angular";
import { TouchSequence } from 'selenium-webdriver';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})

export class HomePage {

  valueID: string;
  amount = "0";
  list: any[] = []
  nevative: boolean = false

  constructor(private splashScreen: SplashScreen, public alertController: AlertController) {
    this.splashScreen.show();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Warning",
      message: "Please enter a valid value ;)",
      buttons: ["OK"]
    });

    await alert.present();
  }

  actionButton() {
    const newItem = this.valueID
    
    if (this.valueID == null || this.valueID == "" || isNaN(Number(this.valueID))) {
      this.valueID = "";
      this.presentAlert();
    } else {
      
      if(Number(this.valueID) < 0){
        this.nevative=true
      } 

      this.list.unshift(newItem)
      let amountInt = Number(this.amount) + Number(this.valueID);

      this.amount = String(amountInt);


      this.valueID = "";
    }
  }

  removeItem(item){
  
      for (let i = 0; i< this.list.length;i++){
        if(this.list[i]==item){
          this.list.splice(i, 1);
          this.amount = String(Number(this.amount) - Number(item) )
        }
      }
  }
}
