class AddOverallReactionsColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :reactions, :average_reactions, :json
  end
end
