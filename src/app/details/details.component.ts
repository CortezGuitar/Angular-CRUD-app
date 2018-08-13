import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthorService } from '../author.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() author: Author;

constructor(
  private authorService: AuthorService,
  private route: ActivatedRoute,
  private location: Location
) { }


ngOnInit(): void {
  this.getAuthor();

}

getAuthor(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.authorService.getAuthor(id)
    .subscribe(author => this.author = author);
}

goBack(): void {
  this.location.back();
}

save(): void {
  this.authorService.updateAuthor(this.author)
    .subscribe(() => this.goBack());
}

}
