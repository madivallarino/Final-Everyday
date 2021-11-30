Rails.application.routes.draw do
  resources :reviews
  resources :users
  resources :products
  resources :shopping_carts
  resources :carts
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/home", to: "products#home_products"
  get "/clothing", to: "products#clothing_products"
  get "/lifestyle", to: "products#lifestyle_products"
  post "/addtocart/:id", to: "carts#add_to_cart"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
