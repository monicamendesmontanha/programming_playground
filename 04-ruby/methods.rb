require 'pry'

def hello(name="World", adjetive="Cruel") # Variadic
  puts "Hello #{adjetive} #{name}"
end

binding.pry # Equivalent to JS: debugger;

hello
hello()