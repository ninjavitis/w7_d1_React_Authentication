class Post < ApplicationRecord
  belongs_to :User, dependent: :destroy
end
