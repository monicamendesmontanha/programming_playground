# SINATRA is a DSL for quickly creating web applications in Ruby with minimal effort.
# DSL: Domain Specific Language
# 127.0.0.1 is the number of my own computer
# port number: :4567
# call the /hello

# Terminal: $ ruby intro_server.rb
# open on the browser and typing the adress:
# 127.0.0.1:4567/hello
# 127.0.0.1:4567= localhost


require 'sinatra'
require 'sinatra/reloader' #restart the server
require 'pry' # This is bad idea in general

get '/hello' do
  "Hello world from Sinatra!"
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }."
end

get '/uptime' do
  "The server uptime is: #{ `uptime` }"
end


# params is how to get the information from the web.
# params[:name]
# Sinatra uses Indifferent Hash Acess
# we can use params[:name] or params["name"]
# Dynamic URL
get '/fanclub/:name' do
  "#{params[:name].capitalize} is a proud member of the XXX fanclub."
end

get '/fanclub/:first/:last' do
  "#{params[:first].capitalize} #{params[:last].capitalize} is a proud member of the XXX fanclub."
end
