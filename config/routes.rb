Rails.application.routes.draw do
  resource :home, only: [:show]
  devise_for :user
  resources :sessions, only: [:create, :destroy]

  namespace :api do
    root to: "home#show"
    # resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :videos do
      resources :reactions
    end
    resources :reactions
    resources :kairos
    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'signout', to: 'sessions#destroy', as: 'signout'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
