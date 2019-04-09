# FIRST EXAMPLE
words = %w{ I AM THAT I AM }
p words

words.permutation.each do |line|
  puts line.join ' '
end

