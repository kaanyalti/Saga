Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  
  scope '/api' do
    root to: "home#show"
    resources :sessions, only: [:create, :destroy]
    resources :videos do
      resources :reactions
    end
    # resources :users
    resources :kairos
    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
