// url format = https://www.algoexpert.io/api/testimonials?limit=2&after=55

//after 55 meaning it will fetch after id 55 and limit is 2

// create infinite scroll container

const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials';
const PAGE_SIZE = 5;

// boolean which will only make call after scroll event reach to container
// end and not with every scroll 
let canFetchTestimonials = true
let afterID = null

const testimonialContainer = document.getElementById('testimonial-container')

testimonialContainer.addEventListener('scroll', handleScroll)

fetchAndAppendTestimonials()

function handleScroll() {
  if(!canFetchTestimonials) return
  const bottomSpaceLeftToScroll = (
    this.scrollHeight - this.scrollTop - this.clientHeight
  )
  if(bottomSpaceLeftToScroll > 0) return;
  fetchAndAppendTestimonials()
}

async function fetchAndAppendTestimonials() {
  canFetchTestimonials = false
  const url = createTestimonialsUrl()
  console.log('url', url)
  const response = await fetch(url)
  const {testimonials, hasNext} = await response.json()

  // creating fragment and not appending directly to container
  // as it will be inside loop and elment will get appended in each 
  // iteration which will refresh browser and very expensive
  // instead creating fragment and appending fragment to the dom
  
  const fragment = document.createDocumentFragment()
  testimonials.forEach(({ message}) => {
    fragment.appendChild(createTestimonialElement(message))
  })
  testimonialContainer.appendChild(fragment)
  if(hasNext) {
    afterID = testimonials[testimonials.length - 1].id
  } else {
    testimonialContainer.removeEventListener('scroll', handleScroll)
  }
  canFetchTestimonials = true
}

function createTestimonialsUrl() {
  const url = new URL(API_BASE_URL)
  url.searchParams.set('limit', PAGE_SIZE)

  if(afterID != null) {
    url.searchParams.set('after', afterID)
  }
  return url
}

function createTestimonialElement(message) {
  const testimonialElement = document.createElement('p')
  testimonialElement.classList.add('testimonial')
  testimonialElement.textContent = message
  return testimonialElement
}
