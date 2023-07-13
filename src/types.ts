
export interface NavebarItem {
    title: string,
    href: string
}

export interface ProductImage{
    _key:string,
    _type:string,
    assets:{
        _ref:string,
        _type: string
    },
    imagecaption:string,
    
}

interface Slug {
    _type: string,
    current:string,
}

export interface ProductType{
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    availableSizes: string[],
    dresstype: string[],
    offeredSizes: string[],
    productDescription:any,
    productImages:ProductImage[],
    productName:string,
    productSeason:string[],
    sale:string[],
    slug:Slug,
    price:string
}

export interface SanityProductsResponse{
    // query:string;
    result:ProductType[]
}