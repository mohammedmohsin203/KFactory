import { defineQuery } from "next-sanity";

export const productBySlugQuery =
  defineQuery(`*[_type == "product" && slug.current == $slug][0]{
    id,
    name,
    images,
    color,
    weight,
    size,
    price,
    slug,
    description,
    features,
    yearRange,
    specifications,
    compatibleVehicles,
    condition,
    brand->{name},
    showOnHomePage,
    category->{name},
    warranty,
    installation
}`);

export const productsByCategoryQuery =
  defineQuery(`*[_type == "product" && category->slug.current == $categorySlug]{
    name,
    images[0],
    price,
    slug,
    category->{name}
}`);

export const productsByBrandQuery =
  defineQuery(`*[_type == "product" && brand->slug.current == $brandSlug]{
    name,
    images[0],
    price,
    slug,
    brand->{name}
}`);

export const featuredProductsQuery =
  defineQuery(`*[ _type == "product" && showOnHomePage == true ] {
  id,
  name,
  price,
  images[0],
  category->{
    name
  },  
  brand->{
    name
  },
  slug,
}`);

export const categoriesQuery = defineQuery(`*[_type == "category"]{
    name,
    slug,
    description,
    image
}`);

export const brandsQuery = defineQuery(`*[_type == "brand"]{
    name,
    slug,
    description,
    image
}`);

export const productsSlugQuery = defineQuery(`*[_type == "product"] {
  slug {
    current
  }
}`);

export const searchProductsQuery = defineQuery(`*[_type == "product" && (
  name match $searchTerm
  || description match $searchTerm
  || color match $searchTerm
  || size match $searchTerm
  || weight match $searchTerm
  || brand match $searchTerm
  || compatibleVehicles match $searchTerm
  || features match $searchTerm
  || yearRange match $searchTerm
  || specifications match $searchTerm
  || warranty match $searchTerm
  || installation match $searchTerm
  || condition match $searchTerm
  || compatibleVehicles match $searchTerm
  || category->name match $searchTerm
  || brand->name match $searchTerm
)] {
  id,
  name,
  price,
  images[0],
  category->{
    name
  },
  slug,
}`);