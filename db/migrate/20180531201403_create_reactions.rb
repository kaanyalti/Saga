class CreateReactions < ActiveRecord::Migration[5.1]
  def change
    create_table :reactions do |t|
      t.references :video, index: true, foreign_key: true
      t.json :apiData

      t.timestamps
    end
    # add_reference :videos, :user, foreign_key: true
  end
end
