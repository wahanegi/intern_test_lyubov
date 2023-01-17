Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "home#index"
  namespace :api do
    namespace :v1 do
      resources :tweets
    end
  end

  get '*path', to: 'home#index', via: :all
end
