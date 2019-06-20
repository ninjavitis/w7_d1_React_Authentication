100.times do |i|
  name = Faker::TvShows::Simpsons.character 
  image = Faker::Avatar.image(name.split(" ")[0], "400x400", "png")

  Profile.create(
    name:name, image:image
  )
end