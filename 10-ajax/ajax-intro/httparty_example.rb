require 'httparty'
data = HTTParty.get 'http://numbersapi.com/random/trivia' #Syncronous
puts data