TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:index, :create, :update, :show, :destroy]
    resources :cards, only: [:index, :create, :update, :show, :destroy]

    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end
end
