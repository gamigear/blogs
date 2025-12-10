export const basicTable1 =` 

<SpkTablescomponent
                Responsive={true}
                tableClass="text-nowrap"
                header={[
                    { title: "Name" },
                    { title: "Created On" },
                    { title: "Number" },
                    { title: "Status" },
                ]}
            >
                {#each Basictable as idx}
                    <tr>
                        <th scope="row">{idx.name}</th>
                        <td>{idx.date}</td>
                        <td>{idx.number}</td>
                        <td
                            ><SpkBadge
                                Color=""
                                CustomClass={bg-outline-{idx.color}}
                                >{idx.status}</SpkBadge
                            ></td
                        >
                    </tr>
                {/each}
            </SpkTablescomponent>`;

export let BasictableData =`
export const Basictable: Basic[] = [
    { id: 1, name: "Mark", date: "21,Dec 2024", number: "+1234-12340", status: "Completed", color: "primary" },
    { id: 2, name: "Monika", date: "29,April 2024", number: "+1523-12459", status: "Failed", color: "warning" },
    { id: 3, name: "Madina", date: "30,Nov 2024", number: "+1982-16234", status: "Successful", color: "success" },
    { id: 4, name: "Bhamako", date: "18,Mar 2024", number: "+1526-10729", status: "Pending", color: "secondary" },
]`

export const reusableTable1 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
{Basictable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.date}</td>
        <td>{idx.number}</td>
        <td><SpkBadge Customclass={'bg-outline-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const basicTable2 =`

<SpkTablescomponent
                Responsive={true}
                Bordered={true}
                tableClass="text-nowrap"
                header={[
                    { title: "User" },
                    { title: "Status" },
                    { title: "Email" },
                    { title: "Action" },
                ]}
            >
                {#each Bordertable as idx }
                    <tr>
                        <th scope="row">
                            <div class="d-flex align-items-center">
                                <span
                                    class="avatar avatar-xs me-2 online avatar-rounded"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={idx.src}
                                        alt="img"
                                    />
                                </span>{idx.name}
                            </div>
                        </th>
                        <td
                            ><SpkBadge
                                Color={idx.color}
                                CustomClass={{idx.class}}
                                >{idx.text}</SpkBadge
                            ></td
                        >
                        <td>{idx.mail}</td>
                        <td>
                            <div class="hstack gap-2 flex-wrap">
                                
                                <a
                                    href="#!"
                                    class="text-info fs-14 lh-1"
                                >
                                    <i class="ri-edit-line"></i>
                                </a>
                                <a
                                    href="#!"
                                    class="text-danger fs-14 lh-1"
                                >
                                    <i class="ri-delete-bin-5-line"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                {/each}
            </SpkTablescomponent>`;
export const loopTable2 = `

interface Bordertable {
    id: number
    src: string
    name: string
    mail: string
    color: string
    class: string
    class1: string
    text: string
}
export const Bordertable: Bordertable[] = [
    { id: 1, src: "../../assets/images/faces/13.jpg", name: "Sukuro Kim", mail: "kimosukuro@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" },
    { id: 2, src: "../../assets/images/faces/6.jpg", name: "Hasimna", mail: "hasimna2132@gmail.com", color: "light", class: "text-default", text: "Inactive", class1: "offline" },
    { id: 3, src: "../../assets/images/faces/15.jpg", name: "Azimo Khan", mail: "azimokhan421@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" },
    { id: 4, src: "../../assets/images/faces/5.jpg", name: "Samantha Julia", mail: "	julianasams143@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" }
];`

export const reusableTable2 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-bordered" header={[{ title: 'User' }, { title: 'Status' }, { title: 'Email' }, { title: 'Action' }]}>
{Bordertable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <Image width={20} height={20} src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </th>
        <td><SpkBadge variant={idx.color} Customclass={'&#60{idx.class}'}>{idx.text}</SpkBadge></td>
        <td>{idx.mail}</td>
        <td>
            <div className="hstack gap-2 flex-wrap">
                <Link href="#!" className="text-info fs-14 lh-1">
                    <i className="ri-edit-line"></i>
                </Link>
                <Link href="#!" className="text-danger fs-14 lh-1">
                    <i className="ri-delete-bin-5-line"></i>
                </Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`

export const loopTable3 = `
interface Primarytable {
    id: number
    src: string
    order: string
    date: string
    name: string
}
export const Primarytable: Primarytable[] = [
    { id: 1, src: "../../assets/images/faces/3.jpg", order: "#0007", date: "26-04-2022", name: "Mayor Kelly", },
    { id: 2, src: "../../assets/images/faces/6.jpg", order: "#0008", date: "	15-02-2022", name: "Wicky Kross", },
    { id: 3, src: "../../assets/images/faces/1.jpg", order: "#0009", date: "23-05-2022", name: "Julia Cam", }
];`

export const basicTable3 =
    `<SpkTablescomponent tableClass="text-nowrap table-bordered border-primary" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Action' }]}>
                                {#each Primarytable as idx}
                                     <tr >
                                        <th scope="row">
                                            {idx.order}
                                        </th>
                                        <td>
                                            <SpkBadge Color="light" CustomClass="text-dark">{idx.date}</SpkBadge>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                    <Image width={20} height={20} src={idx.src} alt="img" />
                                                </span>{idx.name}
                                            </div>
                                        </td>
                                        <td><SpkBadge Color="" CustomClass="bg-primary-transparent">Booked</SpkBadge></td>
                                    </tr>
                                {/each}
                            </SpkTablescomponent>`;

export const reusableTable3 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

  <SpkTables tableClass="text-nowrap table-bordered border-primary" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Action' }]}>
{Primarytable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <Image width={20} height={20} src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="primary-transparent">Booked</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const loopTable4 = `

interface Primarytable {
    id: number
    src: string
    order: string
    date: string
    name: string
}

export const Successtable: Primarytable[] = [
    { id: 1, src: "../../assets/images/faces/10.jpg", order: "#0011", date: "07-01-2022", name: "Helsenky", },
    { id: 2, src: "../../assets/images/faces/14.jpg", order: "#0012", date: "18-05-2022", name: "Brodus", },
    { id: 3, src: "../../assets/images/faces/12.jpg", order: "#0013", date: "19-03-2022", name: "Chikka Alen", }
];`
export const basicTable4 =
    `SpkTablescomponent
                    Responsive={true}
        Bordered={true}
        tableClass="text-nowrap border-success"
                    header={[
                        { title: "Order" },
                        { title: "Date" },
                        { title: "Customer" },
                        { title: "Status" },
                    ]}
                >
                    {#each Successtable as idx}
                        <tr>
                            <th scope="row">
                                {idx.order}
                            </th>
                            <td>
                                <SpkBadge Color="light" CustomClass=" text-dark"
                                    >{idx.date}</SpkBadge
                                >
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span
                                        class="avatar avatar-xs me-2 online avatar-rounded"
                                    >
                                        <Image
                                            width={20}
                                            height={20}
                                            src={idx.src}
                                            alt="img"
                                        />
                                    </span>{idx.name}
                                </div>
                            </td>
                            <td
                                ><SpkBadge
                                    Color=""
                                    CustomClass="bg-success-transparent"
                                    >Delivered</SpkBadge
                                ></td
                            >
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable4 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-bordered border-success" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Successtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass=" text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <Image width={20} height={20} src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="success-transparent">Delivered</SpkBadge></td>
    </tr>
))}
</SpkTables>`

export const loopTable5 = `

export const Warningtable: Primarytable[] = [
    { id: 1, src: "../../assets/images/faces/13.jpg", order: "#0014", date: "21-02-2022", name: "Sukuro Kim", },
    { id: 2, src: "../../assets/images/faces/11.jpg", order: "#0018", date: "26-03-2022", name: "Alex Carey", },
    { id: 3, src: "../../assets/images/faces/2.jpg", order: "#0020", date: "14-03-2022", name: "Pamila Anderson", }
];`

export const BasicTable5 =

    `<SpkTablescomponent
                    Responsive={true}
        Bordered={true}
        tableClass="text-nowrap border-warning"
                    header={[
                        { title: "Order" },
                        { title: "Date" },
                        { title: "Customer" },
                        { title: "Status" },
                    ]}
                >
                    {#each Warningtable as idx}
                        <tr>
                            <th scope="row">
                                {idx.order}
                            </th>
                            <td>
                                <SpkBadge Color="light" CustomClass="text-dark"
                                    >{idx.date}</SpkBadge
                                >
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span
                                        class="avatar avatar-xs me-2 online avatar-rounded"
                                    >
                                        <Image
                                            width={20}
                                            height={20}
                                            src={idx.src}
                                            alt="img"
                                        />
                                    </span>{idx.name}
                                </div>
                            </td>
                            <td
                                ><SpkBadge
                                    Color=""
                                    CustomClass="bg-warning-transparent"
                                    >Accepted</SpkBadge
                                ></td
                            >
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable5 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-bordered border-warning" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Warningtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <Image width={20} height={20} src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="warning-transparent">Accepted</SpkBadge></td>
    </tr>
))}
</SpkTables>`


export const basicTable6 =
    `<SpkTablescomponent
                    Responsive={true}
        borderless={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Borderdata as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.transactionid}</td>
                            <td>{idx.date}</td>
                            <td
                                ><SpkBadge
                                    Color=""
                                    CustomClass={bg-{idx.color}}
                                    >{idx.status}</SpkBadge
                                ></td
                            >
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable6 = `
interface Border {
    id: number;
    name: string;
    transactionid: string;
    date: string;
    status: string;
    color: string;
}
export const Borderdata: Border[] = [
    { id: 1, name: "Harshrath", transactionid: "#5182-3467", date: "24 May 2022", status: "Fixed", color: "primary" },
    { id: 2, name: "Zozo Hadid", transactionid: "#5182-3412", date: "02 July 2022", status: "In Progress", color: "warning" },
    { id: 3, name: "Martiana", transactionid: "#5182-3423", date: "15 April 2022", status: "Completed", color: "success" },
    { id: 4, name: "Alex Carey", transactionid: "#5182-3456", date: "17 March 2022", status: "Pending", color: "danger" },
]`

export const reusableTable6 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-borderless" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Borderdata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.transactionid}</td>
        <td>{idx.date}</td>
        <td><SpkBadge variant="" Customclass={'bg-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</SpkTables>`

export const basicTable7 =
    `<SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
        tBodyClass="table-group-divider"
                    header={[
                        { title: "Product" },
                        { title: "Seller" },
                        { title: "Sale Percentage" },
                        { title: "Quantity Sold" },
                    ]}
                >
                    {#each Groupdata as idx}
                        <tr>
                            <th scope="row">{idx.product}</th>
                            <td>{idx.seller}</td>
                            <td
                                ><a href="#!" class={text-{idx.color}}
                                    >{idx.percent}<i
                                        class={ri-arrow-{idx.icon}-fill ms-1}
                                    ></i></a
                                ></td
                            >
                            <td>{idx.sold}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable7=`
interface Group {
    id: number;
    product: string;
    seller: string;
    percent: string;
    sold: string;
    icon: string;
    color: string;
}
export const Groupdata: Group[] = [
    { id: 1, product: "Smart Watch", seller: "Slowtrack.inc", percent: "	24.23%", sold: "250/1786", icon: "up", color: "success" },
    { id: 2, product: "White Sneakers", seller: "American & Co.inc", percent: "12.45%", sold: "123/985", icon: "down", color: "danger" },
    { id: 3, product: "Baseball Bat", seller: "Sports Company", percent: "06.64%", sold: "124/232", icon: "up", color: "success" },
    { id: 4, product: "Black Hoodie", seller: "Renonds Fabrics", percent: "14.42%", sold: "192/2456", icon: "up", color: "success" },
]`

export const reusableTable7 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" tBodyClass="table-group-divider" header={[{ title: 'Product' }, { title: 'Seller' }, { title: 'Sale Percentage' }, { title: 'Quantity Sold' }]}>
{Groupdata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.product}</th>
        <td>{idx.seller}</td>
        <td><Link href="#!" scroll={false} className={'text-&#60{idx.color}'}>{idx.percent}<i
            className={'ri-arrow-&#60{idx.icon}-fill ms-1'}></i></Link></td>
        <td>{idx.sold}</td>
    </tr>
))}
</SpkTables>`

export const loopTable8 = `
interface Strippedtable {
    id: number
    order: string
    name: string
    date: string
}
export const Strippedtable: Strippedtable[] = [
    { id: 1, order: "2022R-01", date: "27-010-2022", name: "Moracco" },
    { id: 2, order: "2022R-02", date: "28-10-2022", name: "Thornton" },
    { id: 3, order: "2022R-03", date: "22-10-2022", name: "Larry Bird" },
    { id: 4, order: "2022R-04", date: "29-09-2022", name: "Erica Sean" }
];`;

export const basicTable8 =
    `
<SpkTablescomponent
                    Responsive={true}
        Striped={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "ID" },
                        { title: "Date" },
                        { title: "Customer" },
                        { title: "Action" },
                    ]}
                >
                    {#each Strippedtable as idx}
                        <tr>
                            <th scope="row">{idx.order}</th>
                            <td>{idx.date}</td>
                            <td>{idx.name}</td>
                            <td>
                                <SpkButton
                                    color="success"
                                    size="sm"
                                    customClass="waves-effect waves-light"
                                >
                                    <i
                                        class="ri-download-2-line align-middle me-2 d-inline-block"
                                    ></i>Download
                                </SpkButton>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable8 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-striped" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Strippedtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <SpkButton Buttonvariant="success" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download </SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const basicTable9 =
    `<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap table-striped-columns"
                    header={[
                        { title: "ID" },
                        { title: "Date" },
                        { title: "Customer" },
                        { title: "Action" },
                    ]}
                >
                    {#each Strippedtable as idx}
                        <tr>
                            <th scope="row">{idx.order}</th>
                            <td>{idx.date}</td>
                            <td>{idx.name}</td>
                            <td>
                                <SpkButton
                                    color="danger"
                                    size="sm"
                                    customClass="waves-effect waves-light"
                                >
                                    <i
                                        class="ri-delete-bin-line align-middle me-2 d-inline-block"
                                    ></i>Delete
                                </SpkButton>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable9 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-striped-columns" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Strippedtable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <SpkButton Buttonvariant="danger" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete </SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const loopTable10 = `
export const tablePrimary: tablePrimary[] = [
    { id: 1, text1: "Mark", text2: "Otto", text3: "@mdo" },
    { id: 2, text1: "Jacob", text2: "Thornton", text3: "@fat" },
    { id: 3, text1: "Larry the Bird", text2: "Thornton", text3: "@twitter" }
];`
export const basicTable10 =
    `
 <SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap table-primary"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    {#each tablePrimary as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.text1}</td>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusabletable10 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-primary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`

export const basicTable11 =
    `<SpkTablescomponent
                    tResponsive={true}
        tableClass="text-nowrap table-secondary"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    {#each tablePrimary as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.text1}</td>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable11 = ` 
 <SpkTables tableClass="text-nowrap table-secondary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`

export const basicTable12 =
    `
<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap table-warning"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    {#each tablePrimary as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.text1}</td>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable12 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-warning" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`

export const basicTable13 =
    ` 
<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap table-danger"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    {#each tablePrimary as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.text1}</td>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable13 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-danger" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`

export const basicTable14 =
    `<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap table-dark"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    {#each tablePrimary as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.text1}</td>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                        </tr>
                    {/each}=
                </SpkTablescomponent>`;

export const reusableTable14 = `  
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap table-dark" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescompo>`

export const basicTable15 =
    `<SpkTablescomponent
                    Responsive={true}
        Striped={true}
        tableClass="text-nowrap table-success"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    {#each tablePrimary as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.text1}</td>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable15 = `
 <SpkTables tableClass="text-nowrap table-success table-striped" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{tablePrimary.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTables>`

export const basicTable16 =
    ` <SpkTablescomponent
                    Responsive={true}
        Hover={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "Product Manager" },
                        { title: "Category" },
                        { title: "Team" },
                        { title: "Status" },
                    ]}
                >
                    {#each Hoverabledata as idx}
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div
                                        class="avatar avatar-sm me-2 avatar-rounded"
                                    >
                                        <Image
                                            height={28}
                                            width={28}
                                            src={idx.src}
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <div class="lh-1">
                                            <span>{idx.product}</span>
                                        </div>
                                        <div class="lh-1">
                                            <span class="fs-11 text-muted"
                                                >{idx.mail}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td
                                ><SpkBadge
                                    CustomClass={bg-{idx.color}-transparent}
                                    >{idx.category}</SpkBadge
                                ></td
                            >
                            <td>
                                {idx.team}
                            </td>
                            <td>
                                <!-- <SpkProgress color='primary' mainClass='progress-xs' now={idx.status} animated /> -->
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable16 =`
export const Hoverabledata = [
    { id: 1, product: "Joanna Smith", src: "../../assets/images/faces/10.jpg", mail: "joannasmith14@gmail.com", category: "Fashion", color: "primary", team: avatar1, status: 52 },
    { id: 2, product: "Kara Kova", src: "../../assets/images/faces/2.jpg", mail: "milesakara@gmail.com", category: "Clothing", color: "warning", team: avatar2, status: 40 },
    { id: 3, product: "Donald Trimb", src: "../../assets/images/faces/16.jpg", mail: "donaldo21@gmail.com", category: "Electronics", color: "dark", team: avatar3, status: 17 },
    { id: 4, product: "Justin Gaethje", src: "../../assets/images/faces/13.jpg", mail: "justingae@gmail.com", category: "Sports", color: "danger", team: avatar4, status: 72 },
]`

export const reusableTable16 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

  <SpkTables tableClass="text-nowrap table-hover" header={[{ title: 'Product Manager' }, { title: 'Category' }, { title: 'Team' }, { title: 'Status' }]}>
{Hoverabledata.map((idx,index) => (
    <tr key={index}>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <Image width={28} height={28} src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.product}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><span className={'badge bg-&#60{idx.color}-transparent'}>{idx.category}</span></td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress variant='primary' mainClass='progress-xs' now={idx.status} />
        </td>
    </tr>
))}
</SpkTables>`

export const loopTable17 = `
interface Hoverable {
    id: number
    src: string
    name: string
    mail: string
    date: string
    text1: string
    text2: string
    color: string
    class: string
    icon: string
}
export const Hoverable: Hoverable[] = [
    { id: 1, src: "../../assets/images/faces/15.jpg", name: "Mark Cruise", mail: "markcruise24@gmail.com", date: "Jul 26,2022", text1: "IN-2032", text2: "Paid", color: "success-transparent", class: "", icon: "check-fill" },
    { id: 2, src: "../../assets/images/faces/12.jpg", name: "Charanjeep", mail: "charanjeep@gmail.in", date: "Mar 14,2022", text1: "IN-2022", text2: "Paid", color: "success-transparent", class: "", icon: "check-fill" },
    { id: 3, src: "../../assets/images/faces/5.jpg", name: "Samantha Julie", mail: "julie453@gmail.com", date: "Feb 1,2022", text1: "IN-2014", text2: "Cancelled", color: "danger-transparent", class: "", icon: "close-fill" },
    { id: 4, src: "../../assets/images/faces/11.jpg", name: "Simon Cohen", mail: "simon@gmail.com", date: "Apr 24,2022", text1: "IN-2036", text2: "	Refunded", color: "light", class: "text-default", icon: "reply-line" }
];`
export const basicTable17 =
    `<SpkTablescomponent
                    Responsive={true}
        Striped={true}
        Hover={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "Invoice" },
                        { title: "Customer" },
                        { title: "Status" },
                        { title: "Date" },
                    ]}
                >
                    {#each Hoverable as idx}
                        <tr>
                            <th scope="row">{idx.text1}</th>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div
                                        class="avatar avatar-sm me-2 avatar-rounded"
                                    >
                                        <Image
                                            height={28}
                                            width={28}
                                            src={idx.src}
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <div class="lh-1">
                                            <span>{idx.name}</span>
                                        </div>
                                        <div class="lh-1">
                                            <span class="fs-11 text-muted"
                                                >{idx.mail}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td
                                ><SpkBadge
                                    Color={idx.color}
                                    CustomClass={idx.class}
                                    ><i
                                        class={ri-{idx.icon} align-middle me-1}
                                    ></i>{idx.text2}</SpkBadge
                                ></td
                            >
                            <td>{idx.date}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable17 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-striped table-hover" header={[{ title: 'Invoice' }, { title: 'Customer' }, { title: 'Status' }, { title: 'Date' }]}>
{Hoverable.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.text1}</th>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <Image width={28} height={28} src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.name}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><SpkBadge variant={idx.color} Customclass={idx.class}><i
            className={'ri-&#60{idx.icon} align-middle me-1'}></i>{idx.text2}</SpkBadge></td>
        <td>{idx.date}</td>
    </tr>
))}
</SpkTablescompon>`

export const loopTable18 = `
interface Primaryhead {
    id: number
    text: string
    date: string
    name: string
}
export const Primaryhead: Primaryhead[] = [
    { id: 1, name: "Harshrath", date: "24 May 2022", text: "	#5182-3467" },
    { id: 2, name: "Zozo Hadid", date: "02 July 2022", text: "#5182-3412" },
    { id: 3, name: "Martiana", date: "15 April 2022", text: "#5182-3423" },
    { id: 4, name: "Alex Carey", date: "17 March 2022", text: "#5182-3456" }
];`
export const basicTable18 =
    `<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap"
        headerClass="table-primary"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Primaryhead as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.text}</td>
                            <td>{idx.date}</td>
                            <td>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="hstack gap-2 fs-15">
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-success-light rounded-pill"
                                        ><i class="ri-download-2-line"></i></a
                                    >
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-info-light rounded-pill"
                                        ><i class="ri-edit-line"></i></a
                                    >
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-danger-light rounded-pill"
                                        ><i class="ri-delete-bin-line"></i></a
                                    >
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable18 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

  <SpkTables headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Primaryhead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link href="#!" scroll={false}
                    className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
                        className="ri-download-2-line"></i></Link>
                <Link href="#!" scroll={false}
                    className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
                        className="ri-edit-line"></i></Link>
                <Link href="#!" scroll={false}
                    className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
                        className="ri-delete-bin-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`

export const loopTable19 = `
interface Warninghead {
    id: number
    text: string
    date: string
    name: string
    btn: string
    color: string
}
export const Warninghead: Warninghead[] = [
    { id: 1, name: "Harshrath", date: "24 May 2022", text: "	#5182-3467", btn: "Pending", color: "primary-light" },
    { id: 2, name: "Zozo Hadid", date: "02 July 2022", text: "#5182-3412", btn: "Pending", color: "primary-light" },
    { id: 3, name: "Martiana", date: "15 April 2022", text: "#5182-3423", btn: "Rejected", color: "danger-light" },
    { id: 4, name: "Alex Carey", date: "17 March 2022", text: "#5182-3456", btn: "Processed", color: "success-light" }
];`;
export const basicTable19 =
    `<SpkTablescomponent
                   Responsive={true}
        tableClass="text-nowrap"
        headerClass="table-warning"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Warninghead as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.text}</td>
                            <td>{idx.date}</td>
                            <td>
                                <SpkButton color={idx.color} size="sm"
                                    >{idx.btn}</SpkButton
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable19 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-warning" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const basicTable20 =
    `<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap"
        headerClass="table-success"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Warninghead as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.text}</td>
                            <td>{idx.date}</td>
                            <td>
                                <SpkButton color={idx.color} size="sm"
                                    >{idx.btn}</SpkButton
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable20 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-success" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const basicTable21 =
    ` <SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
        headerClass="table-info"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Warninghead as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.text}</td>
                            <td>{idx.date}</td>
                            <td>
                                <SpkButton color={idx.color} size="sm"
                                    >{idx.btn}</SpkButton
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable21 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-info" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const basicTable22 =
    `<SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
        headerClass="table-secondary"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Warninghead as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.text}</td>
                            <td>{idx.date}</td>
                            <td>
                                <SpkButton color={idx.color} size="sm"
                                    >{idx.btn}</SpkButton
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable22 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-secondary" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const basicTable23 =
    ` <SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
        headerClass="table-danger"
                    header={[
                        { title: "User Name" },
                        { title: "Transaction Id" },
                        { title: "Created" },
                        { title: "Status" },
                    ]}
                >
                    {#each Warninghead as idx}
                        <tr>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.text}</td>
                            <td>{idx.date}</td>
                            <td>
                                <SpkButton color={idx.color} size="sm"
                                    >{idx.btn}</SpkButton
                                >
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable23 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" headerClass="table-danger" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Warninghead.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTables>`

export const loopTable24 = `
interface Tablefoot {
    id: number
    text1: string
    text2: string
    text3: string
    text4: string
}
export const Tablefoot: Tablefoot[] = [
    { id: 1, text1: "01", text2: "Manchester", text3: "232", text4: "42%" },
    { id: 2, text1: "02", text2: "Barcelona", text3: "175", text4: "58%" },
    { id: 3, text1: "03", text2: "Portugal", text3: "126", text4: "32%" }
];`
export const basicTable24 =
    ` <SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
        footerClass="table-primary"
        headerClass="table-primary"
                    header={[
                        { title: "S.No" },
                        { title: "Team" },
                        { title: "Matches Won" },
                        { title: "Win Ratio" },
                    ]}
                >
                    {#each Tablefoot as idx}
                        <tr>
                            <th scope="row">
                                {idx.text1}
                            </th>
                            <td>{idx.text2}</td>
                            <td>{idx.text3}</td>
                            <td
                                ><SpkBadge Color="primary">{idx.text4}</SpkBadge
                                ></td
                            >
                        </tr>
                    {/each}
                    <tr class="table-primary">
                        <th scope="row"> Total </th>
                        <td>United States</td>
                        <td>558</td>
                        <td><SpkBadge Color="primary">56%</SpkBadge></td>
                    </tr>
                </SpkTablescomponent>`;

export const reusableTable24 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables footerClass="table-primary" headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Team' }, { title: 'Matches Won' }, { title: 'Win Ratio' }]}>
{Tablefoot.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            {idx.text1}
        </th>
        <td>
            {idx.text2}
        </td>
        <td>
            {idx.text3}
        </td>
        <td>
            <SpkBadge variant="primary">{idx.text3}</SpkBadge>
        </td>
    </tr>
))}
<tr className="table-primary">
    <th scope="row">
        Total
    </th>
    <td>
        United States
    </td>
    <td>
        558
    </td>
    <td><SpkBadge variant="primary">56%</SpkBadge></td>
</tr>
</SpkTablescomponent>`

export const basicTable25 =
    `<SpkTablescomponent
                     Responsive={true}
        tableClass="text-nowrap"
        headerContent={<caption class='px-3'>Top 3 Countries</caption>}
                    header={[
                        { title: "S.No" },
                        { title: "Country" },
                        { title: "Medals Won" },
                        { title: "No Of Athletes" },
                    ]}
                >
                    {#each Captiondata as idx}
                        <tr>
                            <th scope="row">0{idx.id}</th>
                            <td>{idx.country}</td>
                            <td>{idx.won}<i class="ri-medal-line mx-2"></i></td>
                            <td>{idx.athletes}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable25 =`
interface Caption {
    id: number;
    country: string;
    won: string;
    athletes: string;
}
export const Captiondata: Caption[] = [
    { id: 1, country: "United States", won: "2012", athletes: "1823" },
    { id: 2, country: "United Kingdom", won: "1012", athletes: "992" },
    { id: 3, country: "Germany", won: "914", athletes: "875" },
]`

export const reusableTable25 = `  
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables headerContent={<caption className='px-3'>Top 3 Countries</caption>} tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Medals Won' }, { title: 'No Of Athletes' }]}>
{Captiondata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">0{idx.id}</th>
        <td>{idx.country}</td>
        <td>{idx.won}<i className="ri-medal-line mx-2"></i></td>
        <td>{idx.athletes}</td>
    </tr>
))}
</SpkTables>`

export const basicTable26 =
    `<SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap caption-top"
        headerContent={<caption>Top IT Companies</caption>}
                    header={[
                        { title: "S.No" },
                        { title: "Name" },
                        { title: "Revenue" },
                        { title: "Country" },
                    ]}
                >
                    {#each Topcaptuiondata as idx}
                        <tr>
                            <th scope="row">{idx.id}</th>
                            <td>{idx.name}</td>
                            <td>{idx.revenue}</td>
                            <td>{idx.country}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable26= `
interface Topcaption {
    id: number;
    name: string;
    revenue: string;
    country: string;
}
export const Topcaptuiondata: Topcaption[] = [
    { id: 1, name: "Microsoft", revenue: "$170 billion", country: "United States" },
    { id: 2, name: "HP", revenue: "$72 billion", country: "United States" },
    { id: 3, name: "IBM", revenue: "$60 billion", country: "United States" },
]`

export const reusableTable26 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

  <SpkTables headerContent={<caption className="px-2">Top IT Companies</caption>} tableClass="text-nowrap caption-top" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Revenue' }, { title: 'Country' }]}>
{Topcaptuiondata.map((idx,index) => (
    <tr key={index}>
        <th scope="row">{idx.id}</th>
        <td>{idx.name}</td>
        <td>{idx.revenue}</td>
        <td>{idx.country}</td>
    </tr>
))}
</SpkTables>`

export const basicTable27 =
    ` <SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "Name" },
                        { title: "Created On" },
                        { title: "Number" },
                        { title: "Status" },
                    ]}
                >
                    {#each Activedata as idx}
                        <tr class={idx.class}>
                            <th scope="row">{idx.name}</th>
                            <td>{idx.create}</td>
                            <td class={idx.tdclass}>{idx.number}</td>
                            <td
                                ><SpkBadge CustomClass={bg-{idx.color}}
                                    >{idx.status}</SpkBadge
                                ></td
                            >
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

 export const loopTable27=`
 interface Active {
    id: number;
    name: string;
    create: string;
    number: string;
    status: string;
    color: string;
    class: string;
    tdclass: string;
}
export const Activedata: Active[] = [
    { id: 1, name: 'Mark', create: "21,Dec 2021", number: "+1234-12340", status: "Completed", color: "primary", class: "table-active", tdclass: '' },
    { id: 2, name: 'Monika', create: "29,April 2022", number: "+1523-12459", status: "Failed", color: "warning", class: "", tdclass: '' },
    { id: 3, name: 'Madina', create: "30,Nov 2022", number: "+1982-16234", status: "Successful", color: "success", class: "", tdclass: 'table-active' },
    { id: 4, name: 'Bhamako', create: "18,Mar 2022", number: "+1526-10729", status: "Pending", color: "secondary", class: "", tdclass: '' },
]`

 export const reusableTable27 = `
 <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
 {Activedata.map((idx,index) => (
     <tr key={index} className={idx.class}>
         <th scope="row">{idx.name}</th>
         <td>{idx.create}</td>
         <td className={idx.tdclass}>{idx.number}</td>
         <td><span className={'badge bg-&#60{idx.color}'}>{idx.status}</span></td>
     </tr>
 ))}
</SpkTablescomponent>`

export const loopTable28 = `
interface Smalltables {
    id: string
    text: string
    date: string
    name: string
    class: string
}
export const Smalltables: Smalltables[] = [
    { id: "1", name: "Zelensky", date: "25-Apr-2021", text: "Paid", class: "success-transparent" },
    { id: "2", name: "Kim Jong", date: "29-April-2022", text: "Pending", class: "danger-transparent" },
    { id: "3", name: "Obana", date: "30-Nov-2022", text: "Paid", class: "success-transparent" },
    { id: "4", name: "Sean Paul", date: "01-Jan-2022", text: "Paid", class: "success-transparent" },
    { id: "5", name: "Karizma", date: "14-Feb-2022", text: "Pending", class: "danger-transparent" }
];`
export const basicTable28 =
    `i      <SpkTablescomponent
                     Responsive={true}
        Size="sm"
        tableClass="text-nowrap"
                    header={[
                        { title: "Invoice" },
                        { title: "Created Date" },
                        { title: "Status" },
                        { title: "Action" },
                    ]}
                >
                    {#each Smalltables as idx}
                        <tr>
                            <th scope="row">
                                <div class="form-check">
                                    <input
                                        id={idx.id}
                                        defaultChecked={idx.checked ===
                                            "defaultChecked"}
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                    />
                                    <div class="form-check-label">
                                        {idx.name}
                                    </div>
                                </div>
                            </th>
                            <td>{idx.date}</td>
                            <td
                                ><SpkBadge
                                    Color={idx.class}
                                    CustomClass="bg-success-transparent"
                                    >{idx.text}</SpkBadge
                                ></td
                            >
                            <td>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="hstack gap-2 fs-15">
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-light"
                                        ><i class="ri-download-2-line"></i></a
                                    >
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-light"
                                        ><i class="ri-edit-line"></i></a
                                    >
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable28 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap table-sm" header={[{ title: 'Invoice' }, { title: 'Created Date' }, { title: 'Status' }, { title: 'Action' }]}>
{Smalltables.map((idx,index) => (
    <tr key={index}>
        <th scope="row">
            <div className="form-check">
                <input id={idx.id} defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" value="" />
                <div className="form-check-label">
                    {idx.name}
                </div>
            </div>
        </th>
        <td>{idx.date}</td>
        <td><SpkBadge variant={idx.class} Customclass="bg-success-transparent">{idx.text}</SpkBadge></td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`

export const basicTable29 =
    `<SpkTablescomponent
                    Responsive={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "Color" },
                        { title: "Client" },
                        { title: "State" },
                        { title: "Quantity" },
                        { title: "Total Price" },
                    ]}
                >
                    {#each ColorTables as idx}
                        <tr class={idx.bgcolor}>
                            <th scope="row">{idx.text}</th>
                            <td>{idx.name}</td>
                            <td
                                ><SpkBadge
                                    Color={idx.color}
                                    CustomClass={idx.class2}>Processed</SpkBadge
                                ></td
                            >
                            <td>{idx.quantity}</td>
                            <td>{idx.price}</td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable29 = `
interface ColorTables {
    id: number
    text: string
    color: string
    quantity: string
    price: string
    class1: string
    class2: string
    name: string
    bgcolor: string
}
export const ColorTables: ColorTables[] = [
    { id: 1, text: "Default", color: "primary-transparent", quantity: "22", price: "$2,012", class1: "", class2: "", name: "Rita Book", bgcolor: "" },
    { id: 2, text: "Primary", color: "primary", quantity: "22", price: "$4,254", class1: "table-primary", class2: "", name: "Rhoda Report", bgcolor: "table-primary" },
    { id: 3, text: "Secondary", color: "secondary", quantity: "26", price: "$1,234", class1: "table-secondary", class2: "", name: "Rita Book", bgcolor: "table-secondary" },
    { id: 4, text: "Success", color: "success", quantity: "42", price: "$2,623", class1: "table-success", class2: "", name: "Anne Teak", bgcolor: "table-success" },
    { id: 5, text: "Danger", color: "danger", quantity: "52", price: "$32,132", class1: "table-danger", class2: "", name: "Dee End", bgcolor: "table-danger" },
    { id: 6, text: "Warning", color: "warning", quantity: "10", price: "$1,434", class1: "table-warning", class2: "", name: "Lee Nonmi", bgcolor: "table-warning" },
    { id: 7, text: "Info", color: "info", quantity: "63", price: "$1,854", class1: "table-info", class2: "", name: "Lynne Gwistic", bgcolor: "table-info" },
    { id: 8, text: "Light", color: "light", quantity: "05", price: "$823", class1: "table-light", class2: "text-default", name: "Fran Tick", bgcolor: "table-light" },
    { id: 9, text: "Dark", color: "dark", quantity: "35", price: "$1,832", class1: "table-dark", class2: "text-light", name: "Polly Pipe", bgcolor: "table-dark" }
];`

export const reusableTable29 = ` 
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

<SpkTables tableClass="text-nowrap" header={[{ title: 'Color' }, { title: 'Client' }, { title: 'State' }, { title: 'Quantity' }, { title: 'Total Price' }]}>
{ColorTables.map((idx,index) => (
    <tr key={index} className={idx.bgcolor}>
        <th scope="row">{idx.text}</th>
        <td>{idx.name}</td>
        <td><SpkBadge variant={idx.color} Customclass={idx.class2}>Processed</SpkBadge></td>
        <td>{idx.quantity}</td>
        <td>{idx.price}</td>
    </tr>
))}
</SpkTables>`

export const basicTable30 =
    `<SpkTablescomponent
                     Responsive={true}
        Bordered={true}
        Striped={true}
        tableClass="text-nowrap"
                    header={[
                        { title: "#" },
                        { title: "First" },
                        { title: "Last" },
                        { title: "Handle" },
                    ]}
                >
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <table class="table text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Alphabets</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">A</th>
                                        <td>Dino King</td>
                                        <td>dinoking231@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">B</th>
                                        <td>Poppins sams</td>
                                        <td>pops@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">C</th>
                                        <td>Brian Shaw</td>
                                        <td>swanbrian@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jimmy</td>
                        <td>the Ostrich</td>
                        <td>Dummy Text</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Cobra Kai</td>
                        <td>the Snake</td>
                        <td>Another Name</td>
                    </tr>
                </SpkTablescomponent>`;

export const reusableTable30 = `  
 <SpkTablescomponent tableClass="text-nowrap table-striped table-bordered" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
<tr>
    <td colSpan={4}>
        <table className="table text-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col">Alphabets</th>
                    <th scope="col">Users</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">A</th>
                    <td>Dino King</td>
                    <td>dinoking231@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">B</th>
                    <td>Poppins sams</td>
                    <td>pops@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">C</th>
                    <td>Brian Shaw</td>
                    <td>swanbrian@gmail.com</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
</tr>
<tr>
    <th scope="row">4</th>
    <td>Jimmy</td>
    <td>the Ostrich</td>
    <td>Dummy Text</td>
</tr>
<tr>
    <th scope="row">5</th>
    <td>Cobra Kai</td>
    <td>the Snake</td>
    <td>Another Name</td>
</tr>
</SpkTablescomponent>`

export const basicTable31 =
    ` <SpkTablescomponent
                    Responsive={true}
        showCheckClass=""
        showCheckbox={true}
        showCheckid="checkboxNoLabel"
        tableClass="text-nowrap"
                    header={[
                        { title: "Team Head" },
                        { title: "Category" },
                        { title: "Role" },
                        { title: "Gmail" },
                        { title: "Team" },
                        { title: "Work Progress" },
                        { title: "Revenue" },
                        { title: "Action" },
                    ]}
                >
                    {#each Responsivedata as idx}
                        <tr>
                            <th scope="row"
                                ><input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="checkboxNoLabel1"
                                    value=""
                                    aria-label="..."
                                /></th
                            >
                            <td>
                                <div class="d-flex align-items-center">
                                    <span
                                        class="avatar avatar-xs me-2 online avatar-rounded"
                                    >
                                        <Image
                                            width={20}
                                            height={20}
                                            src={idx.src}
                                            alt="img"
                                        />
                                    </span>{idx.name}
                                </div>
                            </td>
                            <td>{idx.category}</td>
                            <td
                                ><SpkBadge
                                    Color="primary-transparent"
                                    CustomClass={bg-{idx.color}-transparent}
                                    >{idx.role}</SpkBadge
                                ></td
                            >
                            <td>{idx.mail}</td>
                            <td>
                                {idx.team}
                            </td>
                            <td>
                                <!-- <SpkProgress mainClass="progress progress-xs" Color='primary' now={idx.progress} /> -->
                            </td>
                            <td>{idx.revenue}</td>

                            <td>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="hstack gap-2 fs-15">
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-success"
                                        ><i class="ri-download-2-line"></i></a
                                    >
                                    <a
                                        href="#!"
                                        class="btn btn-icon btn-sm btn-info"
                                        ><i class="ri-edit-line"></i></a
                                    >
                                </div>
                            </td>
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const loopTable31 = `
export const Responsivedata = [
    { id: 1, src: "../../assets/images/faces/3.jpg", name: "Mayor Kelly", category: "Manufacturer", role: "Team Lead", color: "primary", team: Avatar, progress: 52, revenue: "$10,984.29", mail: "mayorkrlly@gmail.com" },
    { id: 2, src: "../../assets/images/faces/12.jpg", name: "Andrew Garfield", category: "Managing Director", role: "Director", color: "warning", team: Avatar1, progress: 91, revenue: "$1.4billion", mail: "andrewgarfield@gmail.com" },
    { id: 3, src: "../../assets/images/faces/14.jpg", name: "Simon Cowel", category: "Service Manager", role: "Manager", color: "success", team: Avatar2, progress: 45, revenue: "$7,123.21", mail: "simoncowel234@gmail.com" },
    { id: 4, src: "../../assets/images/faces/5.jpg", name: "Mirinda Hers", category: "Recruiter", role: "Employee", color: "danger", team: Avatar3, progress: 21, revenue: "$2,325.45", mail: "mirindahers@gmail.com" },
]
`
export const reusableTable31 = `
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";

 <SpkTables tableClass="text-nowrap" showCheckbox={true} header={[{ title: 'Team Head' }, { title: 'Category' }, { title: 'Role' }, { title: 'Gmail' }, { title: 'Team' }, { title: 'Work Progress' }, { title: 'Revenue' }, { title: 'Action' }]}>
{Responsivedata.map((idx,index) => (
    <tr key={index}>
        <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <Image width={20} height={20} src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td>{idx.category}</td>
        <td><SpkBadge variant="primary-transparent">{idx.role}</SpkBadge></td>
        <td>{idx.mail}</td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress mainClass="progress progress-xs" variant='primary' now={idx.progress} />
        </td>
        <td>{idx.revenue}</td>

        <td>
            <div className="hstack gap-2 fs-15">
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTables>`

export const loopTable32 = `
interface VerticalTables {
    id: number
    text1: string
    text2: string
    text3: string
    text4: string
    class1: string
    class2: string
    code1: string
    code2: string
}

export const VerticalTables: VerticalTables[] = [
    { id: 1, text1: "This cell inherits", text2: " from the table", text3: "This cell inherits ", text4: "from the table", class1: "", class2: "", code1: "vertical-align: middle;", code2: "vertical-align: middle;" },
    { id: 2, text1: "This cell inherits", text2: "from the table row", text3: "This cell inherits ", text4: "from the table row", class1: "align-bottom", class2: "", code1: "vertical-align: bottom;", code2: "vertical-align: bottom;" },
    { id: 3, text1: "This cell inherits", text2: " from the table", text3: "This cell is aligned to the top.", text4: "", class1: "", class2: "align-top", code1: "vertical-align: middle;", code2: "" },

];`
export const basicTable32 =
    `<SpkTablescomponent
                    Responsive={true}
        tableClass="align-middle"
                    header={[
                        { title: "Heading 1", headerclass: "w-25" },
                        { title: "Heading 2", headerclass: "w-25" },
                        { title: "Heading 3", headerclass: "w-25" },
                        { title: "Heading 4", headerclass: "w-25" },
                    ]}
                >
                    {#each VerticalTables as idx}
                        <tr class={idx.class1}>
                            <td
                                >{idx.text1} <code>{idx.code1}</code>
                                {idx.text2}</td
                            >
                            <td
                                >{idx.text1} <code>{idx.code1}</code>
                                {idx.text2}</td
                            >
                            <td class={idx.class2}
                                >{idx.text3} <code>{idx.code2}</code>
                                {idx.text4}</td
                            >
                            <td
                                >This here is some placeholder text, intended to
                                take up quite a bit of vertical space, to
                                demonstrate how the vertical alignment works in
                                the preceding cells.</td
                            >
                        </tr>
                    {/each}
                </SpkTablescomponent>`;

export const reusableTable32 = `
 <SpkTablescomponent tableClass="align-middle" header={[{ title: 'Heading 1' }, { title: 'Heading 2' }, { title: 'Heading 3' }, { title: 'Heading 4' }]}>
{Table12data.map((idx,index) => (
    <tr key={index} className={idx.class1}>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
        <td>This here is some placeholder text, intended to take up
            quite a
            bit of vertical space, to demonstrate how the vertical
            alignment
            works in the preceding cells.</td>
    </tr>
))}
</SpkTablescomponent>`