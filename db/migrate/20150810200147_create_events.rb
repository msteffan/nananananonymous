class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :date
      t.timestamps
      t.references :user, index: true, foreign_key: true
    end
  end
end
