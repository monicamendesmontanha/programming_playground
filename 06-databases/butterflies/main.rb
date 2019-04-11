require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end


# INDEX - Show all butterflies
get '/butterflies' do

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterflies = db.execute 'SELECT * FROM butterflies'

  erb :butterflies_index
end

# SHOW = Shows a single butterfly in more detail
get '/butterflies/:id' do

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  butterflies = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = butterflies.first

  erb :butterflies_show
end