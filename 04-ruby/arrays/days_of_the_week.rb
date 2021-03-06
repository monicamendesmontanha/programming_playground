# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

# days_of_the_week = %w[ Monday Tuesday Wednesday Thursday Friday Saturday Sunday ] # shortcut to create a array
# puts days_of_the_week

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

require 'pry'
# binding.pry

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

#solution version 1 (Remove Sunday from the last postion and move it to the first position.)
# days_of_the_week.pop
# days_of_the_week.insert(0, "Sunday")
# puts days_of_the_week

#solution version 2 (Remove Sunday from the last postion and move it to the first position.)
# p days_of_the_week.unshift days_of_the_week.pop

#solution version 3 (Remove Sunday from the last postion and move it to the first position.)
days_of_the_week = days_of_the_week.rotate! -1
p days_of_the_week

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

weekdays = days_of_the_week[1..5]  # (..) Includes friday, (...) Excludes friday
p "Weekdays: #{weekdays}"

weekend = days_of_the_week.rotate.drop(5)
p "Weekend: #{weekend}"

# 4. Remove either the weekdays or the weekends
# Your choice...

#using .pop

# 5. Sort the remaining days alphabetically

p weekdays.flatten.sort