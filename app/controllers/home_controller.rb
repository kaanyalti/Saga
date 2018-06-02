class HomeController < ApplicationController
 
  def show
    dbtest = User.all
    render json: dbtest
    puts dbtest
    # render nothing: true
  end

  
end
