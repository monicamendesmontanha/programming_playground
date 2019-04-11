require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW - Form for adding a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

#CREATE - Add a new butterfly to the database
post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}','#{params[:family]}','#{params[:image]}')"
  query_db query
  redirect to('/butterflies') #GET request
  # erb :butterflies_new
  # params.to_s
end

# SHOW = Shows a single butterfly in more detail
get '/butterflies/:id' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies.first
  erb :butterflies_show
end

def query_db(sql_statement)
  puts sql_statement #Option feature which is nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close  #close the conection
  result # Implicity returned
end