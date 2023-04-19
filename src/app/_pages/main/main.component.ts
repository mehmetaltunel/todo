import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  model: any = {
    yazi: '',
    tiklamaSayisi: 0
  }
  hata: string = '';
  hataGoster: any = false;
  yazilanlar: any[] = [];

  ngOnInit(): void {
  }
  banaTikla() {
    if (this.yazilanlar.find(x => x.yazi == this.model.yazi)) {
      this.hata = "Daha önceden girdiğin şeyi niye giriyosun mal mısın?";
      this.hataGoster = true;
    }
    else {
      this.hataGoster = false;
      this.model.tiklamaSayisi = ++this.model.tiklamaSayisi;
      this.yazilanlar.push({
        tik: this.model.tiklamaSayisi,
        yazi: this.model.yazi
      });
    }

  }

}
