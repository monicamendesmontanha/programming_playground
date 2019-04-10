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

get '/hello' do
  "Hello world from Sinatra!"
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }."
end
