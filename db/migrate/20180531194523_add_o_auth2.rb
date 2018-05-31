class AddOAuth2 < ActiveRecord::Migration[5.1]
  def change

    # change_table :users do |t|
    #   t.remove_references :videos
    # end

    # change_table :videos do |t|
    #   t.remove_references :users
    # end

    remove_column :users, :first_name, :string
    remove_column :users, :last_name, :string
    remove_column :users, :email, :string
    remove_column :users, :password_digest, :string
    remove_column :users, :isCreator, :boolean

    change_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :oauth_token
      t.datetime :oauth_token_expires_at
    end
  end
end