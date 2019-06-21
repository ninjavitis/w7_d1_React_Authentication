Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  
  namespace :api do
    resources :users do 
      resources :posts
    end
    
    resources :posts do
      resources :comments
    end
    

    resources :profiles, only: [:index, :show, :update]


    # get 'user_posts/:user_id', to: 'posts#user_posts'
    # get 'profile_posts/:id', :to => 'profiles#posts'
    get 'my_friends', to: 'profiles#my_friends'
    get 'top_friends', to: 'profiles#top_friends'
  end

  
end
