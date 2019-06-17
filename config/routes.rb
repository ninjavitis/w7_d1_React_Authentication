Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/show'
  get 'posts/create'
  get 'posts/update'
  get 'posts/destroy'
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
