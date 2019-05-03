class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.integer :album_id, null: false
      t.integer :duration, null: false

      t.timestamps
    end
    add_index :songs, :name
    add_index :songs, :album_id
  end
end
