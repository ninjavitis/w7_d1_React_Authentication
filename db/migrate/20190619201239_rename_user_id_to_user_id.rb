class RenameUserIdToUserId < ActiveRecord::Migration[5.2]
  def change
    remove_reference :posts, :User, index: true
    add_reference :posts, :user, foreign_key: true
  end
end
