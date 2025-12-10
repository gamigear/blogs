// data.js
export const BasicTable = [
    ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
    ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
    ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
    ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
    ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
];
export const Data1 =() => {
    return new Promise(resolve => {
        setTimeout(() =>
            resolve([
     ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
     ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
     ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
     ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
     ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
       ]), 2000);
    });
  };

export const data2 = [
    ['Jonathan', 'jonathan@example.com', 'Senior Implementation Architect', 'Hauck Inc', 'Holy See'],
    ['Harold', 'harold@example.com', 'Forward Creative Coordinator', 'Metz Inc', 'Iran'],
    ['Shannon', 'shannon@example.com', 'Legacy Functionality Associate', 'Zemlak Group', 'South Georgia'],
    ['Robert', 'robert@example.com', 'Product Accounts Technician', 'Hoeger', 'San Marino'],
    ['Noel', 'noel@example.com', 'Customer Data Director', 'Howell - Rippin', 'Germany'],
    ['Traci', 'traci@example.com', 'Corporate Identity Director', 'Koelpin - Goldner', 'Vanuatu'],
    ['Kerry', 'kerry@example.com', 'Lead Applications Associate', 'Feeney, Langworth and Tremblay', 'Niger'],
    ['Patsy', 'patsy@example.com', 'Dynamic Assurance Director', 'Streich Group', 'Niue'],
    ['Cathy', 'cathy@example.com', 'Customer Data Director', 'Ebert, Schamberger and Johnston', 'Mexico'],
    ['Tyrone', 'tyrone@example.com', 'Senior Response Liaison', 'Raynor, Rolfson and Daugherty', 'Qatar']
];
export const Data2=  [
    ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "smart watch", "electronics", "$1799", "1", "$1799"],
    ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "blue Jeans", "clothing", "$2479", "2", "$4958"],
    ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "g phone", "mobiles", "$769", "1", "$769"],
    ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "head phones", "electronics", "$1299", "3", "$3997"],
    ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "chair", "furniture", "$1449", "1", "$1449"]
  ];
  
   export const Data3 =  [
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
  ];
  export const Columns=[{
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
  }];


