Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  namespace :api do
    root to: "home#show"
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :videos do
      resources :reactions
    end
    resources :kairos
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
