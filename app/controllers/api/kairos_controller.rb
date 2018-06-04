class Api::KairosController < ApplicationController

  def index
    @kairos_headers = {
      "Content-Type" => "application/json",
      "app_id" => ENV["KAIROS_ID"],
      "app_key" => ENV["KAIROS_KEY"]
    }

    def stream_token_url (video_token)
      "https://embed-cdn.ziggeo.com/v1/applications/#{ENV["ZIGGEO_KEY"]}/videos/#{video_token}/"
    end

    def retrieve_stream_token (stream_token_url)
      response = HTTParty.get(stream_token_url)
      pp response
      # pp response["streams"][1]["token"]
      # response["streams"][1]["token"]
    end

    def upload_stream_url (video_token,stream_token)
      "https://embed-cdn.ziggeo.com/v1/applications/#{ENV["ZIGGEO_KEY"]}/videos/#{video_token}/streams/#{stream_token}/video.mp4"
    end

    def upload_media (source_url)
      response = HTTParty.post(
        "http://api.kairos.com/v2/media?source=#{source_url}",
        :headers => @kairos_headers
      )
      pp(response.accessToken)
      render json: response
    end

    def retrieve_data (media_id)
      api_data = HTTParty.get(
        "http://api.kairos.com/v2/media/#{media_id}",
        :headers => @kairos_headers
      )
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
      pp cleaned_data
      render json: cleaned_data
    end


    # source_url = upload_stream_url(params["video_token"], stream_token)

    pp "VIDEO TOKEN: #{params["video_token"]}"
    stream_token_access_url = stream_token_url(params["video_token"])
    pp "STREAM TOKEN URL: #{stream_token_access_url}"
    stream_token = retrieve_stream_token(stream_token_access_url)

    # if params["kairos_method"] == "retrieve"
    #   retrieve_data("3088829a7d65d1bcdd454393")
    # else
    #   upload_media(source_url)
    # end

  end
end
