# 100.times do |i|
#   name = Faker::TvShows::Simpsons.character 
#   image = Faker::Avatar.image(name.split(" ")[0], "400x400", "png")

#   Profile.create(
#     name:name, image:image
#   )
# end

500.times do |i|
  title = Faker::TvShows::Simpsons.quote 
  body = Faker::Lorem.paragraphs
  user_id = rand(1..100)
  
  Post.create(title:title, body:body, user_id:user_id)
end