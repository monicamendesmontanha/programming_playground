# == Schema Information
#
# Table name: planets
#
#  id       :integer          primary key
#  name     :text
#  image    :text
#  obit     :float
#  diameter :float
#  mass     :float
#  moons    :integer
#

class Planet < ActiveRecord::Base
end
