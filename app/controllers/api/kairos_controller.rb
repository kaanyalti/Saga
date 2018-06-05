class Api::KairosController < ApplicationController
  @@kairos_headers = {
      "Content-Type" => "application/json",
      "app_id" => ENV["KAIROS_ID"],
      "app_key" => ENV["KAIROS_KEY"]
    }

  def index
    def upload_media (source_url)
      response = HTTParty.post(
        "http://api.kairos.com/v2/media?source=#{source_url}",
        :headers => @@kairos_headers
      )
      puts response["id"]
      retrieve_data_from_kairos(response["id"])
    end

    def retrieve_data_from_kairos (media_id)
      puts "RETRIEVE DATA"
      status_message = "Analyzing"

      while status_message == "Analyzing" do
        puts "INSIDE THE LOOP"
        api_data = HTTParty.get(
          "http://api.kairos.com/v2/media/#{media_id}",
          :headers => @@kairos_headers
        )
        pp "STATUS MESSAGE BEFORE: #{status_message}"
        status_message = api_data["status_message"]
        pp "STATUS MESSAGE AFTER: #{status_message}"
        pp "COMPARE TO ANALYZING #{status_message == "Analyzing"}"
        sleep(10)
      end

      cleaned_data = api_data["frames"].map do |a|
                      data_entry ={}
                      data_entry["time"] = a["time"]
                      data_entry["people"] = a["people"].map do |p|
                                              people_entry = {}
                                              people_entry["emotions"] = p["emotions"]
                                              people_entry["attention"] = p["attention"]
                                              people_entry
                                            end
                      data_entry
                    end
      # pp cleaned_data
      # render json: cleaned_data
      video = Video.find_by(youtube_id: @youtube_video_id)
      video.reactions.create({apiData: cleaned_data})
      true
    end

    @youtube_video_id = params[:youtube_video_id]
    stream_token_access_url = stream_token_url(params["video_token"])
    stream_token = retrieve_stream_token(stream_token_access_url)
    source_url = upload_stream_url(params["video_token"], stream_token)

    puts source_url
    upload_media(source_url)

    render nothing: true
  end
end


private
  def stream_token_url (video_token)
    "https://embed-cdn.ziggeo.com/v1/applications/#{ENV["ZIGGEO_KEY"]}/videos/#{video_token}/"
  end

  def retrieve_stream_token (stream_token_url)
    response = HTTParty.get(stream_token_url)
    response["streams"][1]["token"]
  end

  def upload_stream_url (video_token,stream_token)
    "https://embed-cdn.ziggeo.com/v1/applications/#{ENV["ZIGGEO_KEY"]}/videos/#{video_token}/streams/#{stream_token}/video.mp4"
  end



# def retrieve_data
  #   media_id = Video.find(params[:id]).reactions

  #   api_data = HTTParty.get(
  #     "http://api.kairos.com/v2/media/#{media_id}",
  #     :headers => @kairos_headers
  #   )

  #   cleaned_data = api_data["frames"].map do |a|
  #                   data_entry ={}
  #                   data_entry["time"] = a["time"]
  #                   data_entry["people"] = a["people"].map do |p|
  #                                           people_entry = {}
  #                                           people_entry["emotions"] = p["emotions"]
  #                                           people_entry["attention"] = p["attention"]
  #                                           people_entry
  #                                         end
  #                   data_entry
  #                 end
  #   pp cleaned_data
  #   render json: cleaned_data
  # end

  # def upload_media
  #   stream_token_access_url = stream_token_url(params["video_token"])
  #   stream_token = retrieve_stream_token(stream_token_access_url)
  #   source_url = upload_stream_url(params["video_token"], stream_token)

  #   response = HTTParty.post(
  #     "http://api.kairos.com/v2/media?source=#{source_url}",
  #     :headers => @@kairos_headers
  #   )

  #   render nothing: true
  # end
