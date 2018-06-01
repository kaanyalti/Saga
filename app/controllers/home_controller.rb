class HomeController < ApplicationController
 
  def show
    
    render nothing: true
  end

  
end
# create var here if this is the endpoont youre doing jur ajax on. try to aggregate data on the backed instead
# of doing the whole wokr on th front end
# map rduce will need to b used at some point
# namespaced controller in rails
# create controller reaction, have it in the namespace, so that you access rpt/videos/reactions