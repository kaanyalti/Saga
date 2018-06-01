Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: "home#show"

namespace :api do

    # resources :videos
    # resources :users
    resources :kairos

end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
