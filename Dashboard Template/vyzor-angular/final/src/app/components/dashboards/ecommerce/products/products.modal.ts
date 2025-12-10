export interface productsType{
    id: number;
    title?: string;
    img?: string;
    starText?: number;
    review?: string;
    lastValue?: string;
    newValue?: string;
    bageText?: string;
    textStatus: string;
    children : img[];
    badge:string;
    offer:string;
    bgcolor:string;
}

interface img {
    img: string;
}
