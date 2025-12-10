import { Component, ViewChild } from '@angular/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import * as FilePond from 'filepond';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedModule } from '../../../../shared/shared.module';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
@Component({
  selector: 'app-create-blog',
  imports: [SharedModule, NgSelectModule, FormsModule, ReactiveFormsModule, SpkFlatpickr, NgxEditorModule, FilePondModule, FlatpickrModule, SpkNgSelect],
  providers: [FlatpickrDefaults],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.scss'
})
export class CreateBlog {
  editordoc = jsonDoc;

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [

  ];

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
  }

  pondHandleActivateFile(event: any) {
  }

  BlogCategory=[
    {label:"Select Category",value:1},
    {label:"Nature",value:2},
    {label:"Sports",value:3},
    {label:"Food",value:4},
    {label:"Travel",value:5},
    {label:"Fashion",value:6},
    {label:"Beauty",value:7},
  ]
  Tags=[
    {label:"Top Blog",value:2},
    {label:"Blogger",value:3},
    {label:"Adventure",value:4},
    {label:"Landscape",value:5},
  ]
  selectedTags=[2,5]
  Published = [
    { label: "Published", value: 2 },
    { label: "Hold", value: 3 },
]
}
