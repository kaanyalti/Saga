# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
UserVideo.delete_all
Video.delete_all
User.delete_all

5.times do
  User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::StarWars.character, isCreator:true)
end


creators = User.where(isCreator: true)
creators.each do |creator|
  creator.videos.create!(title: Faker::StarWars.character, length: rand(60..360))
end

videos = Video.all
videos.each do |video|
  video.users.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::StarWars.character, isCreator:false)
end


# viewers = User.joins(:user_videos).where(isCreator:false)
# viewerIDs = viewers.map {|v| v["id"]}

# viewerVideos = UserVideo.where(user_id: viewerIDs)

# viewerVideos.each do |v|
#   v["reaction"] = {"happy":"10", "sad":"1"}
# end