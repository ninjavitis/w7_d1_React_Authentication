Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :posts do
      resources :comments
    end

    resources :profiles, only: [:index, :show, :update]


    
    get 'profile_posts/:id', :to => 'profiles#posts'
    get 'my_friends', to: 'profiles#my_friends'
    get 'top_friends', to: 'profiles#top_friends'
  end

  
end
