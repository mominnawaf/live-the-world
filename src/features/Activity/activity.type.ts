export interface ActivityState {
    activity: Activity | {}
}
export interface Activity {
    id: number
    location: any
    name: string
    tripadvisor_key: any
    description_short: string
    latitude: number
    longitude: number
    tips_tricks: string
    description_long: string
    slug: string
    anecdote_caption: any
    opening_hours: string
    seasonality: string
    price: string
    covid_impact: string
    anecdote: any
    published_at: string
    created_by: any
    updated_by: number
    created_at: string
    updated_at: string
    local_name: any
    address: string
    inactive: any
    author: number
    activity_type: any
    active_start_date: any
    active_end_date: any
    content_views: number
    highlighted_explore: any
    neighbourhood: any
    ticket_link: any
    tour_link: any
    intro: any
    anecdotes: any[]
    images: Image[]
    cities: City[]
    labels: Label[]
    keywords: Keyword[]
    external_pages: ExternalPage[]
    type: string
  }
  
  export interface Image {
    id: number
    name: string
    alternativeText: string
    sourceText: string
    url: string
    width: number
    height: number
    thumbnail: string
    small: string
  }
  
  export interface City {
    id: number
    name: string
    description: string
    latitude: number
    longitude: number
    province: Province
    created_by: any
    updated_by: number
    created_at: string
    updated_at: string
    published_at: string
    slug: string
    detailed_content: boolean
    content_views: number
    get_inspired_subtitle: any
    screenshots_set: string
    popular_priority: any
  }
  
  export interface Province {
    id: number
    name: string
    description: string
    country: Country
    created_by: any
    updated_by: number
    created_at: string
    updated_at: string
    slug: string
    latitude: number
    longitude: number
    detailed_content: boolean
    content_views: number
    get_inspired_subtitle: any
    screenshots_set: string
    popular_priority: any
  }
  
  export interface Country {
    id: number
    name: string
    code: string
    location: any
    description: string
    latitude: number
    longitude: number
    created_by: any
    updated_by: number
    created_at: string
    updated_at: string
    slug: string
    enabled: boolean
    content_views: number
    screenshots_set: string
    enabled_landing_only: any
  }
  
  export interface Label {
    id: number
    name: string
    index: number
    created_by: any
    updated_by: number
    created_at: string
    updated_at: string
    slug: string
    get_inspired_title: string
    get_inspired_subtitle: string
    get_inspired_description: string
    get_inspired_cta_text: string
    activities_count: number
  }
  
  export interface Keyword {
    id: number
    name: string
    created_by?: number
    updated_by?: number
    created_at: string
    updated_at: string
    slug: string
  }
  
  export interface ExternalPage {
    id: number
    name: string
    link: string
    homepage: any
    description: string
    created_by: any
    updated_by: any
    created_at: string
    updated_at: string
    image: Image2
  }
  
  export interface Image2 {
    id: number
    name: string
    alternativeText: any
    sourceText: string
    url: string
    thumbnail: string
    small: string
    width: number
    height: number
  }
  