100.times do |i|
  name = Faker::TvShows::Simpsons.character 
  image = Faker::Avatar.image("avatar", "50x50", "png")

  Profile.create(
    name:name, image:image
  )
end