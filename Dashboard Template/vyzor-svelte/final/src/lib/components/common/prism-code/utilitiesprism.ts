export const border1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span class="border border-container"></span>
    <span class="border-top border-container"></span>
    <span class="border-end border-container"></span>
    <span class="border-bottom border-container"></span>
    <span class="border-start border-container"></span>
// End Prism Code//`;

export const border2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span class="border-0 border-container"></span>
    <span class="border border-top-0 border-container"></span>
    <span class="border border-end-0 border-container"></span>
    <span class="border border-bottom-0 border-container"></span>
    <span class="border border-start-0 border-container"></span>
// End Prism Code//`;

export const border3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span class="border border-container border-1"></span>
    <span class="border border-container border-2"></span>
    <span class="border border-container border-3"></span>
    <span class="border border-container border-4"></span>
    <span class="border border-container border-5"></span>
// End Prism Code//`;

export const border4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <span class="border border-container border-primary"></span>
    <span class="border border-container border-secondary"></span>
    <span class="border border-container border-success"></span>
    <span class="border border-container border-danger"></span>
    <span class="border border-container border-warning"></span>
    <span class="border border-container border-info"></span>
    <span class="border border-container border-light"></span>
    <span class="border border-container border-dark"></span>
    <span class="border border-container border-white"></span>
// End Prism Code//`;

export const border5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <div class="mb-4">
    <label htmlFor="exampleFormControlInput1" class="form-label">Email
        address</label>
    <input type="email" class="form-control border-success"
        id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class="h4 pb-3 mb-4 text-danger border-bottom border-danger">
    Below Shows Danger Border
</div>
    <div
    class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
    Customizing borders with background colors
    </div>
// End Prism Code//`;

export const border6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <div class="border border-success p-2 mb-2">This is default success border</div>
    <div class="border border-success p-2 mb-2 border-opacity-75">This is 75%
    opacity
    success border
    </div>
    <div class="border border-success p-2 mb-2 border-opacity-50">This is 50%
    opacity
    success border
    </div>
    <div class="border border-success p-2 mb-2 border-opacity-25">This is 25%
    opacity
    success border
    </div>
    <div class="border border-success p-2 border-opacity-10">This is 10% opacity
    success
    border
    </div>
// End Prism Code//`;

export const border7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img rounded" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img rounded-top" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img rounded-end" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img rounded-bottom" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img rounded-start" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img rounded-circle" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img  rounded-pill" alt="..." />
// End Prism Code//`;

export const border8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
    <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                        <Image src="../../images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
// End Prism Code//`;

//Avatars

export const avatar1 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{#each Avatardata as idx}
                <span class={avatar me-2 {idx.class}}>
                    <img src={idx.src} alt="img" />
                </span>
            {/each}

// End Prism Code//`;

export const avatardata1 =`
interface AvatarType {
    id: number;
    class: string;
    src: string;
}
export const Avatardata: AvatarType[] = [
    { id: 1, class: "avatar-radius-0", src: "../../assets/images/faces/1.jpg" },
    { id: 1, class: "", src: "../../assets/images/faces/2.jpg" },
    { id: 1, class: "avatar-rounded", src: "../../assets/images/faces/3.jpg" },
]`

export const avatar2 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{#each Avatarsize as idx}
                <span class="avatar avatar-{idx.class} me-2">
                    <Image src={idx.src} alt="Avatar" />
                </span>
            {/each}
// End Prism Code//`;

export const avatardata2 = `
export const Avatarsize: AvatarType[] = [
    { id: 1, class: "xs", src: "../../assets/images/faces/4.jpg" },
    { id: 2, class: "sm", src: "../../assets/images/faces/5.jpg" },
    { id: 3, class: "md", src: "../../assets/images/faces/6.jpg" },
    { id: 4, class: "lg", src: "../../assets/images/faces/7.jpg" },
    { id: 5, class: "xl", src: "../../assets/images/faces/8.jpg" },
    { id: 6, class: "xxl", src: "../../assets/images/faces/9.jpg" },
]`

export const avatar3 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
 {#each Avataricon as idx}
                <span class="avatar avatar-{idx.class} me-2 avatar-rounded">
                    <Image src={idx.src} alt="img" />
                    <a
                        href="#!"
                        class="badge bg-{idx.class1} rounded-pill avatar-badge
                        ><i class="fe fe-{idx.icon}></i></a
                    >
                </span>
            {/each}
// End Prism Code//`;

export const avatardata3 = `
interface Icontype {
    id: number;
    class: string;
    src: string;
    icon: string;
    class1: string;
}
export const Avataricon: Icontype[] = [
    { id: 1, class: "xs", src: "../../assets/images/faces/2.jpg", icon: "camera", class1: "success" },
    { id: 2, class: "sm", src: "../../assets/images/faces/3.jpg", icon: "edit", class1: "secondary" },
    { id: 3, class: "md", src: "../../assets/images/faces/14.jpg", icon: "plus", class1: "warning" },
    { id: 4, class: "lg", src: "../../assets/images/faces/13.jpg", icon: "edit", class1: "info" },
    { id: 5, class: "xl", src: "../../assets/images/faces/15.jpg", icon: "camera", class1: "success" },
    { id: 6, class: "xxl", src: "../../assets/images/faces/9.jpg", icon: "plus", class1: "danger" },
]`

export const avatar4 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{#each Avataronline as idx}
                <span class="avatar avatar-{idx.class} me-2 avatar-rounded>
                    <Image src={idx.src} alt="img" />
                </span>
            {/each}
// End Prism Code//`;

export const avatardata4 =`
export const Avataronline: AvatarType[] = [
    { id: 1, class: "xs online", src: "../../assets/images/faces/8.jpg" },
    { id: 2, class: "sm online", src: "../../assets/images/faces/10.jpg" },
    { id: 3, class: "md online", src: "../../assets/images/faces/12.jpg" },
    { id: 4, class: "lg online", src: "../../assets/images/faces/13.jpg" },
    { id: 5, class: "xl online", src: "../../assets/images/faces/14.jpg" },
    { id: 6, class: "xxl online", src: "../../assets/images/faces/15.jpg" },
]`

export const avatar5 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{#each Avataroffline as idx}
                <span class="avatar avatar-{idx.class} me-2 avatar-rounded>
                    <Image src={idx.src} alt="img" />
                </span>
            {/each}`;

export const avatardata5 =`
export const Avataroffline: AvatarType[] = [
    { id: 1, class: "xs offline", src: "../../assets/images/faces/2.jpg" },
    { id: 2, class: "sm offline", src: "../../assets/images/faces/3.jpg" },
    { id: 3, class: "md offline", src: "../../assets/images/faces/4.jpg" },
    { id: 4, class: "lg offline", src: "../../assets/images/faces/5.jpg" },
    { id: 5, class: "xl offline", src: "../../assets/images/faces/6.jpg" },
    { id: 6, class: "xxl offline", src: "../../assets/images/faces/7.jpg" },
]`

export const avatar6 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{#each Avatarnumber as idx}
                <span class="avatar avatar-{idx.class} me-2 avatar-rounded>
                    <img src={idx.src} alt="img" />
                    <Badge
                        color=""
                        class="badge rounded-pill bg-{idx.class1} avatar-badge
                        >{idx.data}</Badge
                    >
                </span>
            {/each}
// End Prism Code//`;

export const avatardata6 =`
export const Avatarnumber = [
    { id: 1, class: "xs", src: "../../assets/images/faces/2.jpg", icon: "camera", class1: "primary", data: '2' },
    { id: 2, class: "sm", src: "../../assets/images/faces/3.jpg", icon: "edit", class1: "secondary", data: '5' },
    { id: 3, class: "md", src: "../../assets/images/faces/14.jpg", icon: "plus", class1: "warning", data: '1' },
    { id: 4, class: "lg", src: "../../assets/images/faces/13.jpg", icon: "edit", class1: "info", data: '7' },
    { id: 5, class: "xl", src: "../../assets/images/faces/15.jpg", icon: "camera", class1: "success", data: '3' },
    { id: 6, class: "xxl", src: "../../assets/images/faces/9.jpg", icon: "plus", class1: "danger", data: '9' },
]`

export const avatar7 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
{#each Avatarinitial as idx}
                <span class="avatar avatar-{idx.data} m-2 bg-{idx.color}>
                    {idx.data1}
                </span>
            {/each}
// End Prism Code//`;

export const avatardata7 =`
interface InitialType {
    id: number;
    data: string;
    color: string;
    data1: string
}
export const Avatarinitial: InitialType[] = [
    { id: 1, data: "xs", color: "primary", data1: "XS" },
    { id: 2, data: "sm", color: "secondary", data1: "SM" },
    { id: 3, data: "md", color: "warning", data1: "MD" },
    { id: 4, data: "lg", color: "danger", data1: "LG" },
    { id: 5, data: "xl", color: "success", data1: "XL" },
    { id: 6, data: "xxl", color: "info", data1: "XXL" },
]`

export const avatar8 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div class="avatar-list-stacked">
                {#each Avatarstack as idx}
                    <span class="avatar">
                        <img src={idx.src} alt="img" />
                    </span>
                {/each}
                <a class="avatar bg-primary" href="#!"> +8 </a>
            </div>

// End Prism Code//`;

export const avatardata8 =`
interface StackType {
    id: number;
    src: string;
}
export const Avatarstack: StackType[] = [
    { id: 1, src: "../../assets/images/faces/2.jpg" },
    { id: 2, src: "../../assets/images/faces/8.jpg" },
    { id: 3, src: "../../assets/images/faces/2.jpg" },
    { id: 4, src: "../../assets/images/faces/10.jpg" },
    { id: 5, src: "../../assets/images/faces/4.jpg" },
    { id: 6, src: "../../assets/images/faces/13.jpg" },
]`

export const avatar9 = `
//<!-- Prism Code: This code is only used for showcode purpose -->//
<div class="avatar-list-stacked">
                {#each Avatarstack as idx}
                    <span class="avatar avatar-rounded">
                        <img src={idx.src} alt="img" />
                    </span>
                {/each}
                <a
                        class="avatar bg-primary avatar-rounded"
                        href="#!"
                    >
                        +8
                    </a>
            </div>
// End Prism Code//`;


