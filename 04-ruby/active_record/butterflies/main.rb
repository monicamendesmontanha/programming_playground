require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

#Rails will do all this for you automagically.

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Butterfly < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW - Form for adding a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

#CREATE - Add a new butterfly to the database
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save

  redirect to ("/butterflies/#{ butterflies.id }")
end

# EDIT - Shows a form to edit a single butterfly
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# SHOW = Shows a single butterfly in more detail
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end


# UPDATE - Modify the database with new information for a particular butterfly
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to("/butterflies/#{params[:id]}")
end


# DESTROY - Delets a given a butterfly from the database
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to("/butterflies")
end