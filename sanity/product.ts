import { type } from "os"

const Product = {
    name: 'products',
    title: 'Products',
    type:'document',
    fields:[
        {
            name:'productName',
            title:'Product Title',
            type: 'string',
            validation: (Rule:any) => Rule.required().min(10).max(80)
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'productName',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input:any) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
          {
            name: 'productDescription',
            title: 'description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
          },

          {
            name: 'productImages',
            title: 'Product Images',
            type: 'array',
            of:[
                {
                    name: 'productImage',
                    title: 'Product Image',
                    type:  'image',
                    fields: [
                        {
                            name:'imageCaption',
                            title:'Caption',
                            type: 'string',
                        },
                    ]
                }
            ],
            validation: (Rule:any) => Rule.required().min(1).max(4)
          },

          {
            title: 'Product Category',
            name: 'productCategory',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'Men', value: 'men'},
                {title: 'Women', value: 'women'},
                {title: 'Kids', value: 'kids'},
              ]
            },
            validation: (Rule:any) => Rule.required().min(1).max(1)
          },
          {
            title: 'Dress Type',
            name: 'dresstype',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'Dress', value: 'dress'},
                {title: 'Jackets', value: 'jackets'},
                {title: 'Pants', value: 'pants'},
                {title: 'T Shirts', value: 'tShirt'},
                {title: 'Sweaters', value: 'sweaters'},
              ]
            },
            validation: (Rule:any) => Rule.required().min(1).max(1)
          },
          {
            title: 'Product Use Season',
            name: 'productSeason',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'Summer', value: 'summer'},
                {title: 'Winter', value: 'winter'},
                {title: 'Spring', value: 'spring'},
                {title: 'All Seasons', value: 'allSeason'},
              ]
            }
          },
           {
             title: 'Offered Sizes',
            name: 'offeredSizes',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'XS', value: 'xs'},
                {title: 'S', value: 's'},
                {title: 'M', value: 'm'},
                {title: 'L', value: 'l'},
                {title: 'XL', value: 'xl'},
                {title: 'All', value: 'all'},
              ]
            },
            validation: (Rule:any) => Rule.required().min(1).max(5)
          },
           {
             title: 'Available Sizes',
            name: 'availableSizes',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'XS', value: 'xs'},
                {title: 'S', value: 's'},
                {title: 'M', value: 'm'},
                {title: 'L', value: 'l'},
                {title: 'XL', value: 'xl'},
                {title: 'All', value: 'all'},
              ]
            },
            validation: (Rule:any) => Rule.required().min(1).max(5)
          },

          {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule:any) => Rule.required()
          },

          {
            title: 'Sale',
           name: 'sale',
           type: 'array',
           of: [{type: 'string'}],
           options: {
             list: [
               {title: 'Regular Price', value: 'noSale'},
               {title: '10%', value: '10'},
               {title: '20%', value: '20'},
               {title: '30%', value: '30'},
               {title: '40%', value: '40'},
               {title: '50%', value: '50'},
               {title: '60%', value: '60'},
             ]
           }
         },



    ]

}

export default Product