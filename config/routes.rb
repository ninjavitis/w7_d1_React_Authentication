Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :profiles, only: [:index, :show, :update]
    resources :posts
    
    get 'my_friends', to: 'profiles#my_friends'
    get 'top_friends', to: 'profiles#top_friends'
  end
end
