class Profile < ApplicationRecord
  has_many :posts

  def self.posts(id)
    Post.where("user_id = ?",id)
  end
end

