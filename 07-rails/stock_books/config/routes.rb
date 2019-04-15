Rails.application.routes.draw do

get '/home' => 'pages#home'
get '/faq' => 'pages#faq'
get '/about' => 'pages#about'
end
