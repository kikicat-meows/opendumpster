Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update] do
      resources :reservations, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :restaurants, only: [:index, :show] do
      resources :timeslots, only: [:index]
      resources :reviews, only: [:index]
    end

    resources :cities, only: [:index, :show]

    resources :reservations, only: [:show, :create, :update]

    resources :reviews, only: [:show, :create, :update, :destroy]

  end

  root to: 'static_pages#root'
end
