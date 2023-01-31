Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  namespace :api do
    namespace :v1 do
      resources :tweets
    end
  end

  devise_scope :user do
    authenticated :user do
      get '/', to: 'home#index'
      get '/*undefined', to: redirect('/')
    end
    unauthenticated do
      get '*path', to: 'home#app', via: :all
    end
  end

  root to: "home#app"
  mount ActionCable.server => "/cable"
  
end
