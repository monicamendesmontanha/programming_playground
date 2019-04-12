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

# DESTROY - Delets a given a butterfly from the database
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to("/butterflies")
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



def query_db(sql_statement)
  puts sql_statement #Option feature which is nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close  #close the conection
  result # Implicity returned
end