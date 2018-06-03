class Api::KairosController < ApplicationController

  def index
    @kairos_headers = {
      "Content-Type" => "application/json",
      "app_id" => ENV["KAIROS_ID"],
      "app_key" => ENV["KAIROS_KEY"]
    }

    def uploadMedia (source_url)
      response = HTTParty.post(
        "http://api.kairos.com/v2/media?source=#{source_url}",
        :headers => @kairos_headers
      )
      render json: response
    end

    def retrieveData (media_id)
      apiData = HTTParty.get(
        "http://api.kairos.com/v2/media/#{media_id}",
        :headers => @kairos_headers
      )
      cleanedData = apiData["frames"].map do |a|
                      dataEntry ={}
                      dataEntry["time"] = a["time"]
                      dataEntry["people"] = a["people"].map do |p|
                                              peopleEntry = {}
                                              peopleEntry["emotions"] = p["emotions"]
                                              peopleEntry["attention"] = p["attention"]
                                              peopleEntry
                                            end
                      dataEntry
                    end
      pp cleanedData
      render json: cleanedData
    end

    # pp request.query_parameters

    # params.each do |key, value|
    #   puts "key => #{key}, value => #{value}"
    # end

    url = "https://embed-cdn.ziggeo.com/v1/applications/120e5271e3f8259cc47311e11e135c46/videos/b22a0044b9398de3dad66bd73c0f7869/streams/3b450800f39b842906f67c0d7afe828c/video.flv"

    if params["kairos_method"] == "retrieve"
      retrieveData("3088829a7d65d1bcdd454393")
    else
      uploadMedia(url)
    end

  end
end
