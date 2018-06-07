class Api::ReactionsController < ApplicationController

  # GET /reactions
  def index
    puts "INSIDE GET REQUEST"
    @reactions = Video.find_by(youtube_id: params[:video_id]).reactions

    render json: @reactions, status: :ok
  end
end
# create var here if this is the endpoont youre doing jur ajax on. try to aggregate data on the backed instead
# of doing the whole wokr on th front end
# map rduce will need to b used at some point
