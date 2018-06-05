class AddYoutubeId < ActiveRecord::Migration[5.1]
  def change
      add_column :videos, :youtube_id, :string
  end
end
