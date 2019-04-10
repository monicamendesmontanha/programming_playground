require 'sinatra'
require 'sinatra/reloader' #restart the server

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }."
end

# Significant problems:
# 1. How do we user input without making them change the URL?
# 2. Where is the HTML ?

# Solution: Learn the convention (rules) to follow and know the configuration!!