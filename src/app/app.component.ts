import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Arpit-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle('Arpit Kumar | Backend Software Engineer | Distributed Systems');
    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'Backend Engineer, Distributed Systems, Go, Node.js, Kafka, Kubernetes, Paytm, microservices, SDE-2',
      },
      {
        name: 'description',
        content:
          'Backend Software Engineer with 4+ years building production microservices, Kafka pipelines, and reliable fintech integrations.',
      },
    ]);
    
    AOS.init();


  }
}
