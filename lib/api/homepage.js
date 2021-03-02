import fetchAPI from './api'

export async function getHomepageData() {
  const data = await fetchAPI(
    `query {
      homePage {
        pageHeader {
          heroImage {
            Image {
              height
              width
              url
              caption
            }
          }
          blurb {
            headerBlurb
          }
          headerTextImage {
            height
            width
            url
            
          }
        }
      }
    }

    `
  )

  return data?.homePage
}
