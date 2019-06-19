Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/show'
  get 'posts/create'
  get 'posts/update'
  get 'posts/destroy'
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :profiles, only: [:index,:update]
    get 'my_friends', to: 'profiles#my_friends'

    resources :users do
      resources :posts
  end
end
