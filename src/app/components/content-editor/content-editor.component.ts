import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {
  markdown = '';
  templates: SelectItem[];

  constructor() {}

  ngOnInit() {
    this.templates = [
      { label: 'Headers', value: { id: 1, name: 'Headers' } },
      { label: 'Lists', value: { id: 2, name: 'Lists' } },
      { label: 'Code', value: { id: 3, name: 'Code' } },
      { label: 'Tables', value: { id: 4, name: 'Tables' } }
    ];
  }

  public templateSelected(event) {
    console.log('aaaaaaaaaa', event.value.name);
    if (event.value.name === 'Headers') {
      this.markdown =
        '# H1 ' + '## H2' + '### H3 ' + '#### H4 ' + '##### H5 ' + '###### H6';
    }
    if (event.value.name === 'Lists') {
      this.markdown = '';
    }

    if (event.value.name === 'Code') {
      this.markdown = '';
    }
    if (event.value.name === 'Tables') {
      this.markdown = '';
    }
  }
}
