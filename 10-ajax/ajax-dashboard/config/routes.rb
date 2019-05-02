Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/api/brother' => 'dashboard#brother'
  get '/api/time' => 'dashboard#time'
end
