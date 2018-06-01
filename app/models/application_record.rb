class ApplicationRecord < ActiveRecord::Base
  include ActionController::Helpers
  protect_from_forgery with: :exception
  helper_method :current_user

  self.abstract_class = true

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
