import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-description',
  templateUrl: './form-description.component.html',
  styleUrls: ['./form-description.component.scss'],
})
export class FormDescriptionComponent implements OnInit {
  @Input() item: number;
  page = 0;
  textList = [
    {
      headerText: 'This is Header Text',
      bodyText: `This is Body Text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      headerText: 'This is Header Text 2',
      bodyText: `This is Body Text 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      headerText: 'This is Header Text 3',
      bodyText: `This is Body Text 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];

  headerText = this.textList[this.page].headerText;
  bodyText = this.textList[this.page].bodyText;

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
