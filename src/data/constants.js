export const PHONE = '+923099128492'
export const PHONE_DISPLAY = '+92 309 9128492'
export const WHATSAPP_URL = 'https://wa.me/923099128492'
export const EMAIL = 'hello@playitforward.org'
export const ADDRESS = '123 Rescue Lane, Community District, Pakistan'

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Adopt', path: '/adopt' },
  { label: 'Events', path: '/events' },
  { label: 'Donate', path: '/donate' },
  { label: 'Report a Rescue', path: '/report' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const PETS = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Mixed Breed',
    age: '2 years',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Milo',
    breed: 'Tabby Cat',
    age: '1 year',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Rocky',
    breed: 'Lab Mix',
    age: '3 years',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Bella',
    breed: 'Persian Cat',
    age: '4 years',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop',
  },
]

export const EVENTS = [
  {
    id: 1,
    date: 'Jul 12, 2026',
    title: 'Community Adoption Fair',
    location: 'Central Park Pavilion',
    description: 'Meet adoptable pets, enjoy family activities, and connect with our rescue team.',
  },
  {
    id: 2,
    date: 'Aug 3, 2026',
    title: 'Youth Volunteer Day',
    location: 'Play It Forward Shelter',
    description: 'Hands-on mentorship for youth volunteers learning animal care and compassion.',
  },
  {
    id: 3,
    date: 'Sep 20, 2026',
    title: 'Fundraiser Gala',
    location: 'Grand Community Hall',
    description: 'An evening of stories, music, and impact celebrating rescued animals and youth leaders.',
  },
]

export const MAP_LOCATIONS = [
  {
    id: 1,
    lat: 31.5497,
    lng: 74.3436,
    category: 'RESCUE CENTER',
    name: 'Lahore Main Shelter',
  },
  {
    id: 2,
    lat: 31.582,
    lng: 74.329,
    category: 'EVENT LOCATION',
    name: 'Shahdara Drive Zone',
  },
  {
    id: 3,
    lat: 31.52,
    lng: 74.36,
    category: 'PARTNER SHELTER',
    name: 'Model Town Clinic',
  },
  {
    id: 4,
    lat: 31.47,
    lng: 74.41,
    category: 'HEALTH CAMP',
    name: 'Gulberg Wellness Hub',
  },
  {
    id: 5,
    lat: 31.56,
    lng: 74.31,
    category: 'YOUTH PROGRAM',
    name: 'Mentorship Center',
  },
]

export const DONATION_TIERS = [
  { amount: 25, impact: 'Provides a week of nutritious meals for one rescued pet.' },
  { amount: 50, impact: 'Covers vaccinations and basic medical checkups.' },
  { amount: 100, impact: 'Supports shelter care and youth mentorship sessions.' },
  { amount: null, impact: 'Choose your own amount to maximize your impact.' },
]

export const ADOPTION_STEPS = [
  { step: 1, title: 'Browse Pets', description: 'Explore our adoptable animals and find your perfect match.', icon: 'search' },
  { step: 2, title: 'Submit Application', description: 'Fill out a simple adoption form so we can learn about your home.', icon: 'form' },
  { step: 3, title: 'Meet & Greet', description: 'Visit our shelter for a supervised introduction with your chosen pet.', icon: 'heart' },
  { step: 4, title: 'Bring Them Home', description: 'Complete the adoption and welcome your new family member.', icon: 'home' },
]

export const PROGRAMS = [
  {
    title: 'Animal Rescue',
    description: 'Emergency response, rehabilitation, and rehoming for animals in need.',
  },
  {
    title: 'Youth Mentorship',
    description: 'Empowering young leaders through hands-on animal care and compassion training.',
  },
  {
    title: 'Community Events',
    description: 'Adoption fairs, wellness camps, and neighborhood outreach programs.',
  },
  {
    title: 'Volunteer Program',
    description: 'Join our team of dedicated volunteers making a difference every day.',
  },
]

export const STATS = [
  { value: '500+', label: 'Pets Rescued' },
  { value: '200+', label: 'Youth Mentored' },
  { value: '50+', label: 'Events Hosted' },
]
