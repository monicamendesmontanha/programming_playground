require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# We can enter the port that we want (has to be more than 1234): ruby main.rb -p 8080

get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/result' do
 "#{ params[:x].to_f + params[:y].to_f }"
end