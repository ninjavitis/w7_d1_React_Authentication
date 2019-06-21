class Profile < ApplicationRecord
  belongs_to :user
  has_many :posts

  def self.posts(id)
    Post.where("user_id = ?",id)
  end
end

