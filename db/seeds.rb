# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Video.destroy_all
User.destroy_all
Reaction.destroy_all

5.times do
  User.create!(
    provider: Faker::Name.first_name,
    uid: Faker::Name.last_name,
    oauth_token: Faker::Internet.email,
    oauth_token_expires_at: Faker::StarWars.character)
end

users = User.all

users.each do |u|
  u.videos.create!(
    title: Faker::Lorem.word,
    length: rand(60..360))
end

videos = Video.all

videos.each do |v|
  v.reactions.create!(
    apiData: { 'name': 'yes', 'face': 'yes' })
end



