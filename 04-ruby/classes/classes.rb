require 'pry'

class MarxBrother

  # macro to write getters an setters for me
  attr_accessor :name :instrument :vice
end

groucho = MarxBrother.new
groucho.name= 'Groucho Marx'
groucho.instrument= 'guitar'
groucho.vice= 'cigars'

harpo = MarxBrother.new
harpo.name= 'Harpo Marx'
harpo.instrument= 'harp'


binding.pry
