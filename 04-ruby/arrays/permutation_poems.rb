require 'pry'
# binding.pry

# words = %w{ I AM THAT I AM }
# p words

# Escrever qualquer texto que queria dps de chamar o arquivo na linha de comando e verá o mesmo resultado.
# ruby permutation_poems.rb I AM THAT I AM

words = %w{ I AM THAT I AM } #Default
words = ARGV unless ARGV.empty?


puts "-=" * 40
puts words.join(' ').upcase.center 80
puts "-=" * 40

words.permutation.to_a.shuffle.each do |line|
  puts line.join(' ').center 80
end