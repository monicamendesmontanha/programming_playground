require 'pry'

def hello(name="World") # Variadic
  puts "Hello #{name}"
end

binding.pry # Equivalent to JS: debugger;

hello
hello()