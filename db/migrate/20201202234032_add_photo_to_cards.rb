class AddPhotoToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :photo, :string
  end
end
