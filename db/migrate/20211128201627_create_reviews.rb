class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.belongs_to :product
      t.integer :star_rating
      t.string :review
      t.timestamps
    end
  end
end
