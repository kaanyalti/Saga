class ApplicationController < ActionController::API
  def current_user
    @current_user ||= User.find_by_token(cookies[:token]) if cookies[:token]
  end
end
