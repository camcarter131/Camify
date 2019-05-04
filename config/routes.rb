Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :playlists
    resources :songs, only: [:index]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]

  end

  root "static_pages#root"
end
