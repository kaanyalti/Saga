class Video < ApplicationRecord
  # belongs_to :user
  has_many :reactions
  validates :youtube_id, uniqueness: true
end
