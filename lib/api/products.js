import fetchAPI from './api'

export async function getProducts(limit) {
  console.log('GETTING PRODUCTS')
  const data = await fetchAPI(
    `query {
      products(${limit ? `limit:${limit}` : ''} ) {
        id
        name
        featured_image {
          id
          Image {
            height
            width
            url
            caption
          }
        }
      }
    }`
  )

  return data?.products
}
