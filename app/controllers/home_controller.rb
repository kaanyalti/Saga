class HomeController < ApplicationController
 
  def show
    dbtest = Reaction.all
    render json: dbtest
    dbtest.each 
    pp dbtest
    # render nothing: true
  end

  
end
