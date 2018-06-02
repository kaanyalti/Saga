class Api::KairosController < ApplicationController

  def index
    headers = {
      "Content-Type" => "application/json",
      "app_id" => ENV["KAIROS_ID"],
      "app_key" => ENV["KAIROS_KEY"]
    }

    def uploadMedia (url)
      response = HTTParty.post(

      )
    end
    # puts request.body.read

    # url = "http://media.kairos.com/test.flv"
    url = "https://embed-cdn.ziggeo.com/v1/applications/120e5271e3f8259cc47311e11e135c46/videos/b22a0044b9398de3dad66bd73c0f7869/streams/3b450800f39b842906f67c0d7afe828c/video.flv"
    # response = HTTParty.post(
    #   "http://api.kairos.com/v2/media?source=#{url}",
    #   :headers => headers
    # )
    # puts "time: #{response["frames"][0]["time"]}, emotions: #{response["frames"][0]["people"][0]["emotions"]}, attention: #{response["frames"][0]["people"][0]["tracking"]["attention"]}"

    puts response

    analyzed = HTTParty.get(
      "http://api.kairos.com/v2/media/3088829a7d65d1bcdd454393",
      :headers => headers
    )

    # puts "time: #{analyzed["frames"]}"
    analyzed["frames"].each do |a|
      puts
      puts "time: #{a["time"]}"
      a["people"].each do |p|
        puts "emotions: #{p["emotions"]}, attention: #{p["tracking"]["attention"]}"
      end
    end
    # response["frames"].each do |f|
    #   puts
    #   puts "time: #{f["time"]}"
    #   f["people"].each do |p|
    #     puts "emotions: #{p["emotions"]}, attention: #{p["tracking"]["attention"]}"
    #   end

    # end

    # render json: response

    render nothing: true
  end
end
