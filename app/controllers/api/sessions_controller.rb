class Api::SessionsController < ApplicationController
  def create
    # user = User.from_omniauth(env["omniauth.auth"])
    # cookies.permanent[:token] = user.token
    # render status: :ok
    # redirect_to root_path
    user = User.
    pp params[:response]
  end

  def destroy
    session[:user_id] = nil
    # redirect_to root_path
  end
end
