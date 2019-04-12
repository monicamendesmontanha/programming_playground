require 'pry'

class MarxBrother

  # macro
   # getter
  attr_reader :name :instrument
  attr_writer :name :instrument

  attr_reader :instrument
  attr_writer :instrument

  attr_reader :vice
  attr_writer :vice
end

groucho = MarxBrother.new
groucho.name= 'Groucho Marx'
groucho.instrument= 'guitar'
groucho.vice= 'cigars'

harpo = MarxBrother.new
harpo.name= 'Harpo Marx'
harpo.instrument= 'harp'


binding.pry
