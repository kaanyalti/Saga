class HomeController < ApplicationController
 
  def show
    dbtest = Reaction.all
    render json: dbtest #send this to my component
    dbtest.each 
    pp dbtest
    # render nothing: true
  end

  
end
