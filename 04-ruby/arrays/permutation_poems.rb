require 'pry'
# binding.pry

# words = %w{ I AM THAT I AM }
# p words

# Escrever qualquer texto que queria dps de chamar o arquivo na linha de comando e verá o mesmo resultado.
# ruby permutation_poems.rb I AM THAT I AM
words = ARGV

words.permutation.each do |line|
  puts line.join ' '
end