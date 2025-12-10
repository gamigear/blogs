import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'pages/form',
    children: [
      {
        path: 'form-advanced',
        title: 'Vyzor - Form Advanced',
        loadComponent: () => import('./form-advanced/form-advanced').then(m => m.FormAdvanced),
      },
      {
        path: 'quill-editor',
        title: 'Vyzor - Quill Editor',
        loadComponent: () => import('./quill-editor/quill-editor').then(m => m.QuillEditor),
      },
      {
        path: 'form-elements/inputs',
        title: 'Vyzor - Inputs',
        loadComponent: () => import('./form-elements/inputs/inputs').then(m => m.Inputs),
      },
      {
        path: 'form-elements/checks-radios',
        title: 'Vyzor - Checks Radio',
        loadComponent: () => import('./form-elements/checks-radio/checks-radio').then(m => m.ChecksRadio),
      },
      {
        path: 'form-elements/input-group',
        title: 'Vyzor - Input Group',
        loadComponent: () => import('./form-elements/input-group/input-group').then(m => m.InputGroup),
      },
      {
        path: 'form-elements/form-select',
        title: 'Vyzor - Form Select',
        loadComponent: () => import('./form-elements/form-select/form-select').then(m => m.FormSelect),
      },
      {
        path: 'form-elements/range-slider',
        title: 'Vyzor - Range Slider',
        loadComponent: () => import('./form-elements/range-slider/range-slider').then(m => m.RangeSlider),
      },
      {
        path: 'form-elements/input-masks',
        title: 'Vyzor - Input Masks',
        loadComponent: () => import('./form-elements/input-masks/input-masks').then(m => m.InputMasks),
      },
      {
        path: 'form-elements/file-uploads',
        title: 'Vyzor - File Uploads',
        loadComponent: () => import('./form-elements/file-uploads/file-uploads').then(m => m.FileUploads),
      },
      {
        path: 'form-elements/datetimepicker',
        title: 'Vyzor - Date Time Picker',
        loadComponent: () => import('./form-elements/date-time-picker/date-time-picker').then(m => m.DateTimePicker),
      },
      {
        path: 'form-elements/colorpicker',
        title: 'Vyzor - Color Picker',
        loadComponent: () => import('./form-elements/color-picker/color-picker').then(m => m.ColorPicker),
      },

      {
        path: 'floating-labels',
        title: 'Vyzor - Floating Labels',
        loadComponent: () => import('./floating-labels/floating-labels').then(m => m.FloatingLabels),
      },
      {
        path: 'form-layouts',
        title: 'Vyzor - Form Layouts',
        loadComponent: () => import('./form-layouts/form-layouts').then(m => m.FormLayouts),
      },
      {
        path: 'form-wizards',
        title: 'Vyzor - Form Wizards',
        loadComponent: () => import('./form-wizards/form-wizards').then(m => m.FormWizards),
      },
      {
        path: 'form-validation',
        title: 'Vyzor - Form Validation',
        loadComponent: () => import('./form-validation/form-validation').then(m => m.FormValidation),
      },
      {
        path: 'select2',
        title: 'Vyzor - Select2',
        loadComponent: () => import('./select2/select2').then(m => m.Select2),
      },
    ],
  },
];

@NgModule ({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class FormRoutingModule {
  static routes=routes


}
