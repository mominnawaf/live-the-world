export interface CredentialType {
    identifier: string,
    password: string
}

export interface UserState {
    user: RootUser,
    loginStatus: 'idle' | 'pending' | 'success' | 'rejected',
    loginError: string,
    trips: TripActivityType
}
export interface RootUser {
    jwt: string
    user: User
}

export interface User {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: any
    role: Role
    first_name: string
    last_name: string
    birth_date: string
    country: Country
    created_at: string
    updated_at: string
    is_test: any
    test_expiry_date: any
    registered_with_free_trial: any
    onboarded: any
    anecdote_caption: any
    avatar: any
    homepages: any[]
    trips: Trip[]
    content_views: ContentView[]
    payments: any[]
    routes: any[]
    local_cities: any[]
    articles: any[]
    is_existing_user: boolean
    login_method: string
    newsletter_subscription: NewsletterSubscription
}

export interface Role {
    id: number
    name: string
    description: string
    type: string
}

export interface Country {
    id: number
    name: string
    code: string
    location: any
    description: any
    latitude: any
    longitude: any
    created_at: string
    updated_at: string
    slug: any
    enabled: any
    content_views: any
    screenshots_set: any
    enabled_landing_only: any
    meet_country: any[]
    essentials: any[]
    transport: any[]
    read_more: any[]
    anecdotes: any[]
    flag_image: FlagImage
    header_image: any
}

export interface FlagImage {
    id: number
    name: string
    alternativeText: any
    caption: any
    sourceText: any
    sourceLink: any
    sourceLicense: any
    width: number
    height: number
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    created_at: string
    updated_at: string
}

export interface Trip {
    id: number
    user: number
    type: string
    created_at: string
    updated_at: string
    title: string
    start_date: any
    end_date: any
    companions_type: any
    is_luxury: any
    onboarding_trip_purpose: any
    onboarding_info: any
}

export interface ContentView {
    id: number
    users_permissions_user: number
    related_type: string
    related_id: number
    created_at: string
    updated_at: string
    is_successful: boolean
}

export interface NewsletterSubscription {
    LASTNAME: string
    FIRSTNAME: string
    SOURCE: string
}

export type TripActivityType = TripActivity[]

export interface TripActivity {
  id?: number
  type: string
  title: string
  activities: Activity[]
  routes?: any[]
}

export interface Activity {
  id: number
  slug: string
  name: string
}
