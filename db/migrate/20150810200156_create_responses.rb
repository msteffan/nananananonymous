class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :comfort_score
      t.integer :completeness_score
      t.timestamps
      t.string :name
      t.string :comment
      t.references :event, index: true, foreign_key: true
    end
  end
end
