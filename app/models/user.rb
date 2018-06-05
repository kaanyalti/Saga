class User < ApplicationRecord
  has_many :videos
  validates :email, uniqueness: true


  # Take the data that Google returns and persist it to the database.
  # If the user does not exist, a new one will be created
  # Else the existing user will be updated.
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end
end