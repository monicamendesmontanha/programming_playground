#   6.  [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.


# A lot of people when faced with a problema think "I know, I'll use regular expressions"
# Now they have two problems.
# --- Jamie Zawinski (jmz)

# TODO: Look at extend regular expressions


ARGF.each do |line|
  # puts line if line =~ # /(wilma.*fred|fred.*wilma)/
  puts line if line =~ /wilma/ && line =~ /fred/
end