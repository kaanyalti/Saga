class Api::ReactionsController < ApplicationController

  # GET /reactions
  def index
    @reactions = Video.find_by(youtube_id: params[:video_id]).reactions.to_a

    @filtered = @reactions.map do |reaction|
      filter(reaction[:apiData])
    end.reject(&:blank?)

    render json: @filtered, status: :ok
    pp "filtered reactions #{@filtered}"
  end

  private

  def filter(res)
    res.map do |entry|
      entry["people"].map do |mood|
        if mood["emotions"].values.inject { |a, b| a + b } > 0
          entry
        end
      end.reject(&:blank?)
    end.reject(&:blank?)
  end

end
# create var here if this is the endpoont youre doing jur ajax on. try to aggregate data on the backed instead
# of doing the whole wokr on th front end
# map rduce will need to b used at some point
