Rails.application.routes.draw do

 

  root 'root#index'
  # match '*path', to: 'root#index', via: :all
  # get '*path', to: 'root#index'
end
