class Api::KairosController < ApplicationController

  def index
    headers = {
      "Content-Type" => "application/json",
      "app_id" => ENV["KAIROS_ID"],
      "app_key" => ENV["KAIROS_KEY"]
    }

    source = "http://media.kairos.com/test.flv"

    response = HTTParty.post(
      "http://api.kairos.com/v2/media?source=#{source}",
      :headers => headers
    )
    # puts "time: #{response["frames"][0]["time"]}, emotions: #{response["frames"][0]["people"][0]["emotions"]}, attention: #{response["frames"][0]["people"][0]["tracking"]["attention"]}"


    response["frames"].each do |f|
      puts
      puts "time: #{f["time"]}"
      f["people"].each do |p|
        puts "emotions: #{p["emotions"]}, attention: #{p["tracking"]["attention"]}"
      end

    end

    render json: response

  end
end
