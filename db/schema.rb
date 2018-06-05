# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180605003405) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reactions", force: :cascade do |t|
    t.bigint "video_id"
    t.json "apiData"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["video_id"], name: "index_reactions_on_video_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider"
    t.string "uid"
    t.string "oauth_token"
    t.datetime "oauth_token_expires_at"
    t.string "email"
  end

  create_table "videos", force: :cascade do |t|
    t.string "title"
    t.integer "length"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "youtube_id"
    t.index ["user_id"], name: "index_videos_on_user_id"
  end

  add_foreign_key "reactions", "videos"
  add_foreign_key "videos", "users"
end
