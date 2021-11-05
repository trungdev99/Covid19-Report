import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/service/mock.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles:any
  constructor(private service:MockService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe((data)=>{
      this.articles=data
      console.log(this.articles)
    })
  }

}
