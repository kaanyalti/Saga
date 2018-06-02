class ReactionController < ApplicationController
  def show
    reactionData = Reaction.all
    puts "Reaction: #{reactionData}" 
  end
end
# create var here if this is the endpoont youre doing jur ajax on. try to aggregate data on the backed instead
# of doing the whole wokr on th front end
# map rduce will need to b used at some point