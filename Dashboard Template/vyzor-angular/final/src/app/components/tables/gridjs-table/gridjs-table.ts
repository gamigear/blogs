
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridJsAngularComponent } from 'gridjs-angular';
import { SharedModule } from '../../../shared/shared.module';
import { delay, of } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
type GridData = Array<[string, string, string, string, string, string, string]>;
@Component({
  selector: 'app-gridjs-table',
  imports: [SharedModule,GridJsAngularComponent,MatProgressBarModule],
  templateUrl: './gridjs-table.html',
  styleUrl: './gridjs-table.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridjsTable {

  public gridConfig = {
    columns: [{
      name: "Date",
      width: "150px",
  }, {
      name: "Name",
      width: "150px",
  }, {
      name: "Email",
      width: "200px",
  }, {
      name: "ID",
      width: "150px",
  }, {
      name: "Price",
      width: "100px",
  }, {
      name: "Quantity",
      width: "100px",
  }, {
      name: "Total",
      width: "100px",
  }],
  data: [
      ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
      ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
      ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
      ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
      ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
  ],
  };
  loading: boolean = true;
  ngOnInit(): void {
    of(this.LoadingConfig).pipe(delay(3000)).subscribe(fetchedData => {
      this.LoadingConfig = fetchedData;
      this.loading = false;  // Turn off the loading once the data is fetched
    });
  }

  public LoadingConfig: any = {
    columns: [{
      name: "Date",
      width: "150px",
    }, {
      name: "Name",
      width: "150px",
    }, {
      name: "Email",
      width: "200px",
    }, {
      name: "ID",
      width: "150px",
    }, {
      name: "Price",
      width: "100px",
    }, {
      name: "Quantity",
      width: "100px",
    }, {
      name: "Total",
      width: "100px",
    }],
    data: [
      ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
      ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
      ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
      ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
      ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
    ]

  };
  //ngAfterViewInit(): void {
  //  setTimeout(() => {
  //    this.LoadingConfig = {
  //      ...this.LoadingConfig, // preserve columns and other settings
  //      data: [
  //        ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
  //        ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
  //        ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
  //        ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
  //        ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
  //      ]
  //    };
  //  }, 2000);
  //}

  public FixedConfig:any = {

    search: true,
    sort: true,
    fixedHeader: true,
    height: '350px',
    columns: [{
        name: "Date",
        width: "150px",
    }, {
        name: "Name",
        width: "150px",
    }, {
        name: "Email",
        width: "200px",
    }, {
        name: "ID",
        width: "150px",
    }, {
        name: "Price",
        width: "100px",
    }, {
        name: "Quantity",
        width: "100px",
    }, {
        name: "Total",
        width: "100px",
    }],
    data: [
        ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
        ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
        ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
        ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
        ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"],
        ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
        ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
        ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
        ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
        ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"],
        ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"]
    ],
  };
  public WideConfig:any = {
    columns: [{
      name: "Date",
      width: "150px",
  }, {
      name: "Name",
      width: "150px",
  }, {
      name: "Email",
      width: "200px",
  }, {
      name: "Order ID",
      width: "150px",
  }, {
      name: "Product",
      width: "150px",
  }, {
      name: "Category",
      width: "150px",
  }, {
      name: "Price",
      width: "100px",
  }, {
      name: "Quantity",
      width: "100px",
  }, {
      name: "Total",
      width: "100px",
  }],
  style: {
      table: {
          'white-space': 'nowrap'
      }
  },
  resizable: true,
  sort: true,
  pagination: true,
  data: [
      ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "smart watch", "electronics", "$1799", "1", "$1799"],
      ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "blue Jeans", "clothing", "$2479", "2", "$4958"],
      ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "g phone", "mobiles", "$769", "1", "$769"],
      ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "head phones", "electronics", "$1299", "3", "$3997"],
      ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "chair", "furniture", "$1449", "1", "$1449"]
  ],
  };
  public HiddenConfig:any = {
    columns: [{
      name: "Date",
      hidden: true,
  }, {
      name: "Name",
      width: "150px",
  }, {
      name: "Email",
      width: "200px",
  }, {
      name: "ID",
      width: "150px",
  }, {
      name: "Price",
      width: "100px",
  }, {
      name: "Quantity",
      width: "100px",
  }, {
      name: "Total",
      width: "100px",
  }],
  sort: true,
  search: true,
  data: [
      ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
      ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
      ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
      ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
      ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
  ],
  };
  handleCellClick(event: any) {
    console.log('cellClicked', event);
  }

  handleRowClick(event: any) {
    console.log('rowClicked', event);
  }

  handleBeforeLoad(event: any) {
    console.log('beforeLoad', event);
  }

  handleGridLoad(event: any) {
    console.log('load', event);
  }
}
