import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ContentEditor } from './content-editor.enum';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {
  markdown = '# Content Editor \n' +
   'If you want to play with Markdown, you can edit me';
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
    console.log('aaaaaaaaaa', event);
    if (event.value === null) {
        this.markdown = '';
        return;
    }
    if (event.value.name === 'Headers') {
      this.markdown = ContentEditor.HEADER;
    }
    if (event.value.name === 'Lists') {
      this.markdown = ContentEditor.LIST;
    }

    if (event.value.name === 'Code') {
      this.markdown = ContentEditor.CODE;
    }
    if (event.value.name === 'Tables') {
      this.markdown = ContentEditor.TABLE;
    }
  }
}
