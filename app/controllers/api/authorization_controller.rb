require 'httparty'
require 'json'

class Api::AuthorizationController < ApplicationController
  def get_authorization
    pp "ID TOKEN #{params["id_token"]}"
    url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{params["id_token"]}"
    response = HTTParty.get(url)
    puts
    pp "RESPONSE #{response.parsed_response}"
    # @user = User.from_omniauth(response.parsed_response)
    # tokens = @user.create_new_auth_token
    # @user.save
    # set_headers(tokens)
    # render json:@user
  end

  private
  def set_headers(tokens)
    headers['access-token'] = (tokens['access-token']).to_s
    headers['client'] = (tokens['clienst']).to_s
    headers['expiry'] = (tokens['expiry']).to_s
    headers['uid'] = @user.uid
    headers['token-type'] = (tokens['token-type']).to_s
  end
end
