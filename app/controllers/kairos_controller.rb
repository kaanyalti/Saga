class KairosController < ApplicationController

  def index
    connection = Faraday.new(url: 'http://api.kairos.com') do |faraday|
      faraday.request  :url_encoded
      faraday.response :response
      faraday.adapter  Faraday.default_adapter
    end
    response = connection.post do |req|
      req.url '/detect'
      req.headers['app_id'] = '5031fc46'
      req.headers['app_key'] = '60d086ae62d5e9db3942bd8aba620381'
      req.headers['Content-Type'] = 'application/json'
      req.body = '{"image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Patrick_Stewart_Photo_Call_Logan_Berlinale_2017_%28cropped%29.jpg/1200px-Patrick_Stewart_Photo_Call_Logan_Berlinale_2017_%28cropped%29.jpg"}'
    end
    render json: response
  end
end
