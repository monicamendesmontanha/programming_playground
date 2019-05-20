# lr.rb - A ruby line reader (equivalent to cat)
# Usage: ruby lr.rb / etc/passwd

# ARGF is an array of the lines of each file mentioned in ARGV
ARGF.each do |line|
  # puts line.upcase
  # puts line.chomp.reverse
  puts line if line =~ /[aeiou]/
end

# require 'pry'
# binding.pry
# -----------------------------------------------------------------------------------------------------
# LR RUBY FILE (PRY)

# ruby lr.rb /etc/passwd

# From: /Users/monicamendes/Documents/myGA/programming_playground/16-regular_expressions/lr.rb @ line 5 :

#     1: # lr.rb - A ruby line reader (equivalent to cat)
#     2: # Usage: ruby lr.rb / etc/passwd
#     3:
#     4: require 'pry'
#  => 5: binding.pry

# [1] pry(main)> ARGV
# => ["/etc/passwd"]
# [2] pry(main)> ARGF
# => ARGF
# [3] pry(main)> ARGF.to_a.take 5
# => ["##\n",
#  "# User Database\n",
#  "# \n",
#  "# Note that this file is consulted directly only when the system is running\n",
#  "# in single-user mode.  At other times this information is provided by\n"]