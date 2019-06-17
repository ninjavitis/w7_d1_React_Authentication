class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.integer :likes
      t.belongs_to :User, foreign_key: true

      t.timestamps
    end
  end
end
